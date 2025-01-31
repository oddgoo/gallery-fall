<script lang="ts">
    import { progression } from './stores/progression';
    import { sectionCounts } from './stores/puzzleCounts';

    export let page: keyof typeof $progression;
    
    $: isUnlocked = $progression[page];
    $: requiredSection = {
        'ground': 'introduction',
        'minus-one': 'ground',
        'minus-two': 'minus-one',
        'gardens': 'minus-two',
        'the-tank': 'all sections',
        'epilogue': 'the-tank'
    }[page];
    
    $: requiredCount = {
        'ground': 2,
        'minus-one': 4,
        'minus-two': 5,
        'gardens': 3,
        'the-tank': 17,
        'epilogue': 3
    }[page];

    $: currentProgress = page === 'the-tank' 
        ? $sectionCounts['introduction']?.completed + 
          $sectionCounts['ground']?.completed + 
          $sectionCounts['minus-one']?.completed + 
          $sectionCounts['minus-two']?.completed + 
          $sectionCounts['gardens']?.completed + 
          $sectionCounts['the-tank']?.completed
        : $sectionCounts[requiredSection]?.completed || 0;
</script>

{#if isUnlocked}
    <slot />
{:else}
    <div class="p-8 bg-gray-100 rounded-lg shadow-inner mt-8">
        <h2 class="text-xl text-gray-800 mb-4">🔒 This area is locked</h2>
        <p class="text-gray-600">
            To unlock, you need to solve {requiredCount} puzzle{requiredCount === 1 ? '' : 's'} 
            in {requiredSection}.
        </p>
        <p class="text-gray-600 mt-2">
            Current progress: {currentProgress}/{requiredCount}
        </p>
    </div>
{/if}

<style>
    /* Add any additional styling here */
</style> 