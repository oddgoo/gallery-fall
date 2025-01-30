<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string = "";
    export let imageUrl: string = "";
    export let rows: number = 2;
    export let columns: number = 3;
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
    let placeholderElement: HTMLElement | null = null;
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

        // Create pieces with sequential positions first
        pieces = Array.from({ length: totalPieces }, (_, index) => ({
            id: index,
            currentPosition: index,
            correctPosition: index,
            style: `
                width: ${pieceWidth}px;
                height: ${pieceHeight}px;
                background-image: url(${imageUrl});
                background-position: ${-(index % columns) * pieceWidth}px ${-Math.floor(index / columns) * pieceHeight}px;
                background-size: ${finalWidth}px ${finalHeight}px;
            `
        }));

        // Only shuffle if not already complete
        if (!$isComplete) {
            // Create a shuffled array of positions
            const shuffledPositions = Array.from({ length: totalPieces }, (_, i) => i);
            for (let i = shuffledPositions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledPositions[i], shuffledPositions[j]] = [shuffledPositions[j], shuffledPositions[i]];
            }

            // Ensure the permutation is valid
            if (!isValidPermutation(shuffledPositions)) {
                // If invalid, swap the first two elements to make it valid
                [shuffledPositions[0], shuffledPositions[1]] = [shuffledPositions[1], shuffledPositions[0]];
            }

            // Apply shuffled positions
            pieces = pieces.map((piece, index) => ({
                ...piece,
                currentPosition: shuffledPositions[index]
            }));
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
        if (!$isComplete) {
            draggedPiece = pieceId;
        }
    }

    function handleDragOver(e: DragEvent) {
        e.preventDefault();
        if (!$isComplete) {
            e.dataTransfer!.dropEffect = 'move';
        }
    }

    function handleDrop(e: DragEvent, targetPieceId: number) {
        e.preventDefault();
        if (draggedPiece === null || draggedPiece === targetPieceId || $isComplete) return;
        swapPieces(draggedPiece, targetPieceId);
        draggedPiece = null;
    }

    function handleTouchStart(e: TouchEvent, pieceId: number) {
        if ($isComplete) return;
        e.preventDefault(); // Prevent default touch behavior
        
        // Always get the puzzle piece element, even if we touched a child element
        const pieceElement = (e.target as HTMLElement).closest('.puzzle-piece') as HTMLElement;
        if (!pieceElement) return;
        
        touchedPiece = pieceId;
        touchedElement = pieceElement;
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        initialTouchX = touch.clientX;
        initialTouchY = touch.clientY;
        
        // Add visual feedback
        touchedElement.style.opacity = '0.8';
        touchedElement.style.transform = 'scale(1.1)';
        touchedElement.style.zIndex = '100';
    }

    function handleTouchMove(e: TouchEvent) {
        if (touchedPiece === null || touchedElement === null) return;
        e.preventDefault(); // Prevent scrolling while dragging
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        
        // Update position of dragged element
        if (touchedElement) {
            touchedElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
            touchedElement.style.zIndex = '100';
            touchDragging = true;
        }
    }

    function handleTouchEnd(e: TouchEvent, targetPieceId: number) {
        if (touchedPiece === null || touchedElement === null) {
            resetTouchState();
            return;
        }
        
        const touch = e.changedTouches[0];
        
        // Temporarily hide the dragged element to find what's underneath
        touchedElement.style.visibility = 'hidden';
        
        // Find the element under the touch point
        const elementUnderTouch = document.elementFromPoint(
            touch.clientX,
            touch.clientY
        ) as HTMLElement | null;
        
        // Restore visibility
        touchedElement.style.visibility = 'visible';
        
        // Get the piece ID from the element under touch
        const pieceUnderTouch = elementUnderTouch?.closest('.puzzle-piece');
        const pieceIdUnderTouch = pieceUnderTouch ? 
            parseInt(pieceUnderTouch.getAttribute('data-piece-id') || '-1') : -1;
        
        // If we found a different piece under the touch point and we've dragged, swap
        if (touchDragging && pieceIdUnderTouch !== -1 && pieceIdUnderTouch !== touchedPiece) {
            swapPieces(touchedPiece, pieceIdUnderTouch);
        }
        
        resetTouchState();
    }

    function handleTouchCancel() {
        resetTouchState();
    }

    function resetTouchState() {
        if (touchedElement) {
            touchedElement.style.opacity = '';
            touchedElement.style.transform = '';
            touchedElement.style.zIndex = '';
            touchedElement.style.visibility = '';
        }
        touchedPiece = null;
        touchedElement = null;
        touchDragging = false;
    }

    function swapPieces(pieceId1: number, pieceId2: number) {
        const index1 = pieces.findIndex(p => p.id === pieceId1);
        const index2 = pieces.findIndex(p => p.id === pieceId2);
        
        if (index1 === -1 || index2 === -1) return; // Guard against invalid indices
        
        const tempPosition = pieces[index1].currentPosition;
        pieces[index1].currentPosition = pieces[index2].currentPosition;
        pieces[index2].currentPosition = tempPosition;
        
        // Force a re-render of the pieces array
        pieces = [...pieces];
    }

    function checkSolution() {
        // Sort pieces by current position to check if they match their correct positions
        const sortedPieces = [...pieces].sort((a, b) => a.currentPosition - b.currentPosition);
        const isSolved = sortedPieces.every((piece, index) => piece.id === index);
        
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
                        on:touchcancel={handleTouchCancel}
                        data-position={piece.currentPosition}
                        data-piece-id={piece.id}
                        role="button"
                        tabindex="0"
                    ></div>
                {/each}
            </div>
        </div>

        <div class="flex justify-center mt-4">
            <button
                on:click={checkSolution}
                class="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-600 active:bg-purple-700 disabled:opacity-50 touch-manipulation"
                disabled={$isComplete}
            >
                Submit
            </button>
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
        position: relative; /* Ensure proper stacking context */
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

    .puzzle-piece-placeholder {
        @apply bg-gray-300;
        opacity: 0.5;
    }
</style> 