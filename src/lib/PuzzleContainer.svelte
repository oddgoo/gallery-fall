<script lang="ts">
    import { slide } from 'svelte/transition';
    import { isPuzzleComplete } from '$lib/stores/progress';
    
    export let title: string = "Untitled";
    export let description: string = "";
    export let puzzleId: string;

    let isExpanded = false;
    const isComplete = isPuzzleComplete(puzzleId);

    function toggle() {
        isExpanded = !isExpanded;
    }
</script>

<div class="bg-gray-50 rounded-lg mb-6 border-l-8 transition-colors" 
    style:border-color={$isComplete ? 'rgb(34, 197, 94)' : 'rgb(170, 140, 140)'} 
    class:overflow-hidden={true}>
    <button
        on:click={toggle}
        class="w-full text-left p-4 sm:p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
    >
        <h3 class="text-xl sm:text-2xl text-gray-800 font-outfit">{title}</h3>
        <div class="flex items-center ml-4 gap-2">
            {#if $isComplete}

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            {/if}
            {#if isExpanded}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            {/if}
        </div>
    </button>

    {#if isExpanded}
        <div transition:slide={{ duration: 300 }} class="px-4 pb-4 sm:px-6 sm:pb-6">
            <p class="text-gray-700 mb-4 sm:mb-6">{description}</p>
            <slot {puzzleId} />
        </div>
    {/if}
</div> 