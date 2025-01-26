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
        const containerWidth = (imageElement.parentElement?.offsetWidth ?? 800) - 20; // 10px padding on each side
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

    function handleDragStart(pieceId: number) {
        draggedPiece = pieceId;
    }

    function handleDragOver(e: DragEvent) {
        e.preventDefault();
    }

    function handleDrop(targetPieceId: number) {
        if (draggedPiece === null || draggedPiece === targetPieceId) return;

        // Swap current positions
        const draggedIndex = pieces.findIndex(p => p.id === draggedPiece);
        const targetIndex = pieces.findIndex(p => p.id === targetPieceId);
        
        const tempPosition = pieces[draggedIndex].currentPosition;
        pieces[draggedIndex].currentPosition = pieces[targetIndex].currentPosition;
        pieces[targetIndex].currentPosition = tempPosition;

        draggedPiece = null;
        pieces = pieces; // Trigger reactivity
    }

    function checkSolution() {
        const isSolved = pieces.every(piece => piece.currentPosition === piece.correctPosition);
        
        if (isSolved) {
            isCorrect = true;
            feedback = 'Correct!';
            markPuzzleComplete(id);
        } else {
            feedback = 'Not quite right. Keep trying!';
        }
    }
</script>

<div class="puzzle-container">
    <div class="text-lg mb-4 prose prose-lg max-w-none">{@html parsedPrompt}</div>

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
                        data-position={piece.currentPosition}
                    />
                {/each}
            </div>
        </div>

        {#if !isCorrect}
            <div class="mt-4 flex justify-center">
                <button
                    on:click={checkSolution}
                    class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
                >
                    Check Solution
                </button>
            </div>
        {/if}
    {/if}

    {#if feedback}
        <p class="mt-4 text-center {isCorrect ? 'text-green-600' : 'text-red-600'}">{feedback}</p>
    {/if}
</div>

<style>
    .puzzle-container {
        @apply bg-white p-2 rounded-lg shadow-sm w-full;
    }

    .puzzle-grid-container {
        @apply flex justify-center w-full p-0;
    }

    .puzzle-grid {
        @apply grid bg-gray-200;
        width: 100%;
    }

    .puzzle-piece {
        @apply cursor-grab bg-cover bg-no-repeat;
        transition: transform 0.1s ease-in-out;
    }

    .puzzle-piece:hover {
        @apply shadow-lg z-10;
        transform: scale(1.04);
    }

    .puzzle-piece[draggable="false"] {
        @apply cursor-default;
        transform: none;
    }

    .loading-container {
        @apply flex flex-col items-center justify-center p-8;
    }

    .loading-spinner {
        @apply w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-2;
    }
</style> 