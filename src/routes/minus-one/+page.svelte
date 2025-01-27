<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>


<div class="max-w-3xl mx-auto p-8">
    <h2 class="text-4xl mb-6 text-gray-800">Minus One</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">A Layer Deeper</p>
    
    <!-- <div class="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
        <h3 class="text-2xl mb-4 text-gray-800">The Pendulum</h3>
        <p class="text-gray-700">A massive Foucault pendulum dominates the central atrium. Its swing seems to follow an unusual pattern today.</p>
    </div> -->

    <PuzzleContainer 
    title="Tiny Giants"
    description=""
    borderColor="border-purple-500"
    >
    <p class="my-2 w-full text-center"> When the giants shrink, so do their tincture. What is this paint?</p>

        <TextPuzzle 
            placeholder="What is the man holding?"
            correctAnswers={["gold","golden"]}
            id="b1_giants"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Arte Povera"
    description=""
    borderColor="border-green-500"
    >
        <ArrangePuzzle 
            prompt="10m"
            imageUrl="images/b1/arte_povera.jpg"
            rows=1
            columns=6
            id="b1_povera"
        />
    </PuzzleContainer>


    <PuzzleContainer 
    title="Prepared"
    description=""
    borderColor="border-purple-500"
    >
    <p class="my-2 w-full text-center"> Follow the smell and seek the square window. He holds a tool on his right hand. </p>

        <TextPuzzle 
            placeholder="What is the man holding?"
            correctAnswers={["umbrella"]}
            id="b1_prepared"
        />
    </PuzzleContainer>

</div> 