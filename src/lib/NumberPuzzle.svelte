<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string = "";
    export let correctAnswers: number[];
    export let puzzleId: string = "";
    export let id: string = puzzleId; // For backward compatibility

    let userInput = "";
    let feedback = "";
    const isComplete = isPuzzleComplete(puzzleId);

    onMount(() => {
        if ($isComplete) {
            feedback = 'Correct!';
        }
    });

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    }

    function checkAnswer() {
        const numericInput = Number(userInput);
        if (correctAnswers.includes(numericInput)) {
            feedback = "Correct!";
            markPuzzleComplete(puzzleId);
        } else {
            feedback = "Not quite right";
        }
    }

    $: parsedPrompt = marked(prompt);
</script>

<div class="puzzle-container">
    <div class="text-base sm:text-lg mb-4 prose max-w-none">{@html parsedPrompt}</div>
    
    <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <input
            type="number"
            bind:value={userInput}
            {id}
            class="flex-1 sm:flex-none sm:w-64 border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
            disabled={$isComplete}
            on:keypress={handleKeyPress}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
        />
        <button
            on:click={checkAnswer}
            class="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-600 active:bg-purple-700 disabled:opacity-50 touch-manipulation"
            disabled={$isComplete}
        >
            Submit
        </button>
    </div>
    
    {#if feedback}
        <p class="mt-4 text-center text-lg {$isComplete ? 'text-green-600' : 'text-red-600'}">{feedback}</p>
    {/if}
</div>

<style>
    .puzzle-container {
        @apply bg-white p-2 rounded-lg shadow-sm w-full;
    }

    /* Remove spinner buttons from number input */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style> 