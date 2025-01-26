<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string = "";
    export let correctAnswers: string[];
    export let id: string;
    export let placeholder: string = "Enter your answer";
    
    let userInput = '';
    let feedback = '';
    let isCorrect = false;

    onMount(() => {
        isCorrect = isPuzzleComplete(id);
        if (isCorrect) {
            feedback = 'Correct!';
        }
    });

    function checkAnswer() {
        const cleanInput = userInput.trim().toLowerCase();
        const cleanAnswers = correctAnswers.map(answer => answer.trim().toLowerCase());
        
        if (cleanAnswers.includes(cleanInput)) {
            feedback = 'Correct!';
            isCorrect = true;
            markPuzzleComplete(id);
        } else {
            feedback = 'Try again';
            isCorrect = false;
        }
    }

    function handleKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter' && !isCorrect) {
            checkAnswer();
        }
    }

    $: parsedPrompt = marked(prompt);
</script>

<div class="puzzle-container">
    <div class="text-base sm:text-lg mb-4 prose max-w-none">{@html parsedPrompt}</div>
    
    <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <input
            type="text"
            bind:value={userInput}
            {id}
            class="flex-1 sm:flex-none sm:w-64 border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
            {placeholder}
            disabled={isCorrect}
            on:keypress={handleKeyPress}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
        />
        <button
            on:click={checkAnswer}
            class="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-600 active:bg-purple-700 disabled:opacity-50 touch-manipulation"
            disabled={isCorrect}
        >
            Submit
        </button>
    </div>
    
    {#if feedback}
        <p class="mt-4 text-center text-lg {isCorrect ? 'text-green-600' : 'text-red-600'}">{feedback}</p>
    {/if}
</div>

<style>
    .puzzle-container {
        @apply bg-white p-2 rounded-lg shadow-sm w-full;
    }
    :global(.prose img) {
        @apply mx-auto rounded-lg shadow-md;
    }
</style> 