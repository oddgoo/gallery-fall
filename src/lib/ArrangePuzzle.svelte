<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string;
    export let imageUrl: string;
    export let rows: number;
    export let columns: number;
    export let id: string;

    interface PuzzlePiece {
        id: number;
        currentPosition: number;
        correctPosition: number;
        style: string;
    }

    let pieces: PuzzlePiece[] = [];
    let isCorrect = false;
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

    $: parsedPrompt = marked(prompt);
    $: gridStyle = `grid-template-columns: repeat(${columns}, 1fr);`;
    $: totalPieces = rows * columns;

    onMount(() => {
        isCorrect = isPuzzleComplete(id);
    });

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
            currentPosition: isCorrect ? index : index,
            correctPosition: index,
            style: `
                width: ${pieceWidth}px;
                height: ${pieceHeight}px;
                background-image: url(${imageUrl});
                background-position: ${-(index % columns) * pieceWidth}px ${-Math.floor(index / columns) * pieceHeight}px;
                background-size: ${finalWidth}px ${finalHeight}px;
            `
        }));

        if (!isCorrect) {
            shufflePieces();
        }
    }

    function shufflePieces() {
        let isSolved;
        let attempts = 0;
        const maxAttempts = 10;

        do {
            // Fisher-Yates shuffle of current positions
            for (let i = pieces.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = pieces[i].currentPosition;
                pieces[i].currentPosition = pieces[j].currentPosition;
                pieces[j].currentPosition = temp;
            }

            // Check if accidentally solved
            isSolved = pieces.every(piece => piece.currentPosition === piece.correctPosition);
            attempts++;
        } while (isSolved && attempts < maxAttempts);

        // If we somehow still have a solution after max attempts, just swap two pieces
        if (isSolved) {
            const temp = pieces[0].currentPosition;
            pieces[0].currentPosition = pieces[1].currentPosition;
            pieces[1].currentPosition = temp;
        }

        pieces = pieces; // Trigger reactivity
    }

    function handleTouchStart(e: TouchEvent, pieceId: number) {
        if (isCorrect) return;
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

    function handleDragStart(pieceId: number) {
        draggedPiece = pieceId;
    }

    function handleDragOver(e: DragEvent) {
        e.preventDefault();
    }

    function handleDrop(targetPieceId: number) {
        if (draggedPiece === null || draggedPiece === targetPieceId) return;
        swapPieces(draggedPiece, targetPieceId);
        draggedPiece = null;
    }

    function checkSolution() {
        const isSolved = pieces.every(piece => piece.currentPosition === piece.correctPosition);
        
        if (isSolved) {
            isCorrect = true;
            feedback = 'Correct!';
            markPuzzleComplete(id);
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
                        draggable={!isCorrect}
                        on:dragstart={() => handleDragStart(piece.id)}
                        on:dragover={handleDragOver}
                        on:drop={() => handleDrop(piece.id)}
                        on:touchstart={(e) => handleTouchStart(e, piece.id)}
                        on:touchmove={handleTouchMove}
                        on:touchend={(e) => handleTouchEnd(e, piece.id)}
                        on:touchcancel={handleTouchCancel}
                        data-position={piece.currentPosition}
                        data-piece-id={piece.id}
                        role="button"
                        tabindex="0"
                    />
                {/each}
            </div>
        </div>

        {#if !isCorrect}
            <div class="mt-4 flex justify-center">
                <button
                    on:click={checkSolution}
                    class="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-600 active:bg-purple-700 touch-manipulation"
                >
                    Submit
                </button>
            </div>
        {/if}
    {/if}

    {#if feedback}
        <p class="mt-4 text-center text-lg {isCorrect ? 'text-green-600' : 'text-red-600'}">{feedback}</p>
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