<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<PuzzleContainer 
title="The gift"
>
<p class="my-2 w-full text-center">I took the gift from Buddha's open hands<br/>
</p>
    <TextPuzzle 
        placeholder="Identify the gift"
        correctAnswers={["a stone","stone"]}
        id="b2_the_gift"
    />
</PuzzleContainer>

