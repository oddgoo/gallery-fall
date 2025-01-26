<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string;
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

    $: parsedPrompt = marked(prompt);
</script>

<div class="puzzle-container">
    <div class="text-lg mb-4 prose prose-lg max-w-none">{@html parsedPrompt}</div>
    
    <div class="flex gap-4 items-center">
        <input
            type="text"
            bind:value={userInput}
            {id}
            class="border-2 border-gray-300 rounded px-4 py-2 focus:border-purple-500 focus:outline-none min-w-[250px]"
            {placeholder}
            disabled={isCorrect}
        />
        <button
            on:click={checkAnswer}
            class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
            disabled={isCorrect}
        >
            Submit
        </button>
    </div>
    
    {#if feedback}
        <p class="mt-4 {isCorrect ? 'text-green-600' : 'text-red-600'}">{feedback}</p>
    {/if}
</div>

<style>
    .puzzle-container {
        @apply bg-white p-6 rounded-lg shadow-sm;
    }
    :global(.prose img) {
        @apply mx-auto rounded-lg shadow-md;
    }
</style> 