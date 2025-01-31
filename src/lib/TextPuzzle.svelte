<script lang="ts">
    import { onMount } from 'svelte';
    import { markPuzzleComplete, isPuzzleComplete } from '$lib/stores/progress';
    import { marked } from 'marked';

    export let prompt: string = "";
    export let correctAnswers: string[];
    export let placeholder: string = "Enter your answer";
    export let puzzleId: string = "";
    export let id: string = puzzleId; // For backward compatibility
    export let cooldownTime: number = 10;

    let userInput = "";
    let feedback = "";
    let cooldownRemaining = 0;
    let cooldownInterval: number;
    const isComplete = isPuzzleComplete(puzzleId);

    onMount(() => {
        if ($isComplete) {
            feedback = 'Correct!';
        }
        return () => {
            if (cooldownInterval) clearInterval(cooldownInterval);
        };
    });

    function startCooldown() {
        cooldownRemaining = cooldownTime;
        if (cooldownInterval) clearInterval(cooldownInterval);
        cooldownInterval = setInterval(() => {
            cooldownRemaining--;
            if (cooldownRemaining <= 0) {
                clearInterval(cooldownInterval);
            }
        }, 1000);
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter' && cooldownRemaining === 0) {
            checkAnswer();
        }
    }

    function checkAnswer() {
        const normalizedInput = userInput.toLowerCase().trim();
        const normalizedAnswers = correctAnswers.map(a => a.toLowerCase().trim());
        
        if (normalizedAnswers.includes(normalizedInput)) {
            feedback = "Correct!";
            markPuzzleComplete(puzzleId);
        } else {
            feedback = "Not quite right";
            startCooldown();
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
            disabled={$isComplete}
            on:keypress={handleKeyPress}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
        />
        <button
            on:click={checkAnswer}
            class="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-600 active:bg-purple-700 disabled:opacity-50 touch-manipulation transition-all duration-200 relative overflow-hidden {cooldownRemaining > 0 ? 'cursor-not-allowed' : ''}"
            disabled={$isComplete || cooldownRemaining > 0}
        >
            {#if cooldownRemaining > 0}
                Wait {cooldownRemaining}s
            {:else}
                Submit
            {/if}
            {#if cooldownRemaining > 0}
                <div 
                    class="absolute bottom-0 left-0 h-1 bg-white/30"
                    style="width: {(cooldownRemaining / cooldownTime) * 100}%"
                ></div>
            {/if}
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
    :global(.prose img) {
        @apply mx-auto rounded-lg shadow-md;
    }
</style> 