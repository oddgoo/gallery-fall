<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string;
    export let imageUrl: string;
    export let rows: number;
    export let columns: number;
    export let puzzleId: string = "";
    export let id: string = puzzleId; // For backward compatibility

    interface PuzzlePiece {
        id: number;
        currentPosition: number;
        correctPosition: number;
        style: string;
    }

    let pieces: PuzzlePiece[] = [];
    let feedback = '';
    let draggedPiece: number | null = null;
    let imageLoaded = false;
    let imageElement: HTMLImageElement;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchedPiece: number | null = null;
    let touchDragging = false;
    let touchedElement: HTMLElement | null = null;
    let initialTouchX = 0;
    let initialTouchY = 0;
    const isComplete = isPuzzleComplete(puzzleId);

    $: parsedPrompt = marked(prompt);
    $: gridStyle = `grid-template-columns: repeat(${columns}, 1fr);`;
    $: totalPieces = rows * columns;

    function handleImageLoad() {
        imageLoaded = true;
        initializePuzzle();
    }

    function initializePuzzle() {
        // Get the container width from the parent element, accounting for padding
        const containerWidth = (imageElement.parentElement?.offsetWidth ?? window.innerWidth - 40) - 20;
        const aspectRatio = imageElement.width / imageElement.height;
        const finalWidth = containerWidth;
        const finalHeight = finalWidth / aspectRatio;
        
        const pieceWidth = finalWidth / columns;
        const pieceHeight = finalHeight / rows;

        pieces = Array.from({ length: totalPieces }, (_, index) => ({
            id: index,
            currentPosition: $isComplete ? index : Math.floor(Math.random() * totalPieces),
            correctPosition: index,
            style: `
                width: ${pieceWidth}px;
                height: ${pieceHeight}px;
                background-image: url(${imageUrl});
                background-position: ${-(index % columns) * pieceWidth}px ${-Math.floor(index / columns) * pieceHeight}px;
                background-size: ${finalWidth}px ${finalHeight}px;
            `
        }));

        // Ensure the puzzle is solvable by swapping pairs until we get a valid permutation
        if (!$isComplete) {
            while (!isValidPermutation(pieces.map(p => p.currentPosition))) {
                const i = Math.floor(Math.random() * totalPieces);
                const j = Math.floor(Math.random() * totalPieces);
                [pieces[i].currentPosition, pieces[j].currentPosition] = [pieces[j].currentPosition, pieces[i].currentPosition];
            }
        }

        if ($isComplete) {
            feedback = 'Puzzle solved!';
        }
    }

    function isValidPermutation(permutation: number[]): boolean {
        let inversions = 0;
        for (let i = 0; i < permutation.length; i++) {
            for (let j = i + 1; j < permutation.length; j++) {
                if (permutation[i] > permutation[j]) inversions++;
            }
        }
        return inversions % 2 === 0;
    }

    function handleDragStart(pieceId: number) {
        draggedPiece = pieceId;
    }

    function handleDragOver(event: DragEvent) {
        event.preventDefault();
    }

    function handleDrop(event: DragEvent, targetPieceId: number) {
        event.preventDefault();
        if (draggedPiece === null) return;

        const draggedIndex = pieces.findIndex(p => p.id === draggedPiece);
        const targetIndex = pieces.findIndex(p => p.id === targetPieceId);
        
        if (draggedIndex !== -1 && targetIndex !== -1) {
            // Swap positions
            [pieces[draggedIndex].currentPosition, pieces[targetIndex].currentPosition] = 
            [pieces[targetIndex].currentPosition, pieces[draggedIndex].currentPosition];
            
            // Check if puzzle is solved
            checkSolution();
        }
        
        draggedPiece = null;
    }

    function handleTouchStart(event: TouchEvent, pieceId: number) {
        event.preventDefault();
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchedPiece = pieceId;
        touchDragging = false;
        touchedElement = event.target as HTMLElement;
        initialTouchX = touchedElement.offsetLeft;
        initialTouchY = touchedElement.offsetTop;
    }

    function handleTouchMove(event: TouchEvent) {
        if (touchedPiece === null || !touchedElement) return;
        event.preventDefault();
        
        const touch = event.touches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            touchDragging = true;
            touchedElement.style.position = 'absolute';
            touchedElement.style.zIndex = '1000';
            touchedElement.style.left = `${initialTouchX + deltaX}px`;
            touchedElement.style.top = `${initialTouchY + deltaY}px`;
        }
    }

    function handleTouchEnd(event: TouchEvent, targetPieceId: number) {
        if (touchedPiece === null || !touchDragging) return;
        event.preventDefault();
        
        const draggedIndex = pieces.findIndex(p => p.id === touchedPiece);
        const targetIndex = pieces.findIndex(p => p.id === targetPieceId);
        
        if (draggedIndex !== -1 && targetIndex !== -1) {
            [pieces[draggedIndex].currentPosition, pieces[targetIndex].currentPosition] = 
            [pieces[targetIndex].currentPosition, pieces[draggedIndex].currentPosition];
            
            checkSolution();
        }
        
        if (touchedElement) {
            touchedElement.style.position = '';
            touchedElement.style.zIndex = '';
            touchedElement.style.left = '';
            touchedElement.style.top = '';
        }
        
        touchedPiece = null;
        touchDragging = false;
        touchedElement = null;
    }

    function checkSolution() {
        const isSolved = pieces.every(piece => piece.currentPosition === piece.correctPosition);
        if (isSolved) {
            feedback = 'Puzzle solved!';
            markPuzzleComplete(puzzleId);
        } else {
            feedback = 'Not quite right';
        }
    }
</script>

<div class="puzzle-container">
    <div class="text-base sm:text-lg mb-4 prose max-w-none">{@html parsedPrompt}</div>

    {#if !imageLoaded}
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading puzzle...</p>
        </div>
    {/if}
    
    <!-- Hidden image for initial load and measurements -->
    <img
        src={imageUrl}
        alt="Puzzle"
        bind:this={imageElement}
        on:load={handleImageLoad}
        class="hidden"
    />

    {#if imageLoaded}
        <div class="puzzle-grid-container">
            <div class="puzzle-grid" style={gridStyle}>
                {#each pieces.sort((a, b) => a.currentPosition - b.currentPosition) as piece (piece.id)}
                    <div
                        class="puzzle-piece"
                        style={piece.style}
                        draggable={!$isComplete}
                        on:dragstart={() => handleDragStart(piece.id)}
                        on:dragover={handleDragOver}
                        on:drop={(e) => handleDrop(e, piece.id)}
                        on:touchstart={(e) => handleTouchStart(e, piece.id)}
                        on:touchmove={handleTouchMove}
                        on:touchend={(e) => handleTouchEnd(e, piece.id)}
                    ></div>
                {/each}
            </div>
        </div>
    {/if}
    
    {#if feedback}
        <p class="mt-4 text-center text-lg {$isComplete ? 'text-green-600' : 'text-red-600'}">{feedback}</p>
    {/if}
</div>

<style>
    .puzzle-container {
        @apply bg-white p-2 rounded-lg shadow-sm w-full;
    }

    .puzzle-grid-container {
        @apply flex justify-center w-full touch-manipulation;
        touch-action: none; /* Prevent browser handling of touch events */
    }

    .puzzle-grid {
        @apply grid bg-gray-200;
        width: 100%;
        touch-action: none;
    }

    .puzzle-piece {
        @apply cursor-grab bg-cover bg-no-repeat touch-manipulation;
        -webkit-tap-highlight-color: transparent;
        transition: transform 0.15s ease-out, opacity 0.15s ease-out;
        touch-action: none;
        will-change: transform, opacity;
        user-select: none;
        -webkit-user-select: none;
    }

    .puzzle-piece:hover {
        @apply shadow-lg z-10;
        transform: scale(1.02);
    }

    .puzzle-piece:active {
        @apply shadow-lg z-10;
        transform: scale(1.02);
    }

    .puzzle-piece[draggable="false"] {
        @apply cursor-default;
        transform: none;
    }

    .loading-container {
        @apply flex flex-col items-center justify-center p-4 sm:p-8;
    }

    .loading-spinner {
        @apply w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2;
    }
</style> 