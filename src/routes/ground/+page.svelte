<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>


<div class="max-w-3xl mx-auto p-8">
    <h2 class="text-4xl mb-6 text-gray-800">Ground Floor</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">Welcome to the ground floor of the Gallery's Glitch.</p>
    
    <!-- <div class="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
        <h3 class="text-2xl mb-4 text-gray-800">The Pendulum</h3>
        <p class="text-gray-700">A massive Foucault pendulum dominates the central atrium. Its swing seems to follow an unusual pattern today.</p>
    </div> -->

    <PuzzleContainer 
    title="Naked Bestial"
    description=""
    borderColor="border-purple-500"
    >
    <p class="my-2 w-full text-center"> itisbitter_____heanswered </p>

        <TextPuzzle 
            placeholder="Enter the missing word"
            correctAnswers={["bitter"]}
            id="g_naked_bestial"
        />
    </PuzzleContainer>

</div> 