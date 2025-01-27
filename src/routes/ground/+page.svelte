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
    borderColor="border-green-500"
    >
    <p class="my-2 w-full text-center"> itisbitter_____heanswered </p>

        <TextPuzzle 
            placeholder="Enter the missing word"
            correctAnswers={["bitter"]}
            id="g_naked_bestial"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="My Life is Coloured"
    description=""
    borderColor="border-purple-500"
    >
        <ArrangePuzzle 
            prompt="Re-order into reality"
            imageUrl="images/g/colors.jpg"
            rows=1
            columns=6
            id="g_colors"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Cast Thy Gaze"
    description=""
    borderColor="border-green-500"
    >
    <p class="my-2 w-full text-center"> From the middle of the bridge, an eastward gaze into the long distance reveals a signed place. </p>

        <TextPuzzle 
            placeholder="What is this place called?"
            correctAnswers={["ARTSPACE"]}
            id="g_artspace"
        />
    </PuzzleContainer>


    <PuzzleContainer 
    title="Congregation"
    description=""
    borderColor="border-purple-500"
    >
        <ArrangePuzzle 
            prompt="Re-order into reality"
            imageUrl="images/g/congregation.png"
            rows=3
            columns=3
            id="g_congregation"
        />
    </PuzzleContainer>


    <PuzzleContainer 
    title="Dibirdibi Country"
    description=""
    borderColor="border-blue-500"
    >

    <img src="images/g/Dibirdibi.png" alt="" class="w-full rounded-lg mb-4"/>

        <NumberPuzzle 
            prompt="What Year?"
            correctAnswers=[2008]
            id="g_dibirdibi"
        />
    </PuzzleContainer>


    <PuzzleContainer 
        title="Rusted Song"
        description="In the hallway flanked by the blaze snuffers, a number identifies the song of the rusted materials."
        borderColor="border-blue-500"
    >
        <NumberPuzzle 
            prompt=""
            correctAnswers=[1010]
            id="g_rusted_song"
        />
    </PuzzleContainer>

    
    <PuzzleContainer 
        title="Cozy Corner"
        description="A corner, a cozy corner, a cozy cuved corner. I go in there and count the number of easels I can see"
        borderColor="border-blue-500"
    >

    <img src="images/g/corner.jpg" alt="" class="w-1/4 mx-auto"/>

        <NumberPuzzle 
            prompt=""
            correctAnswers=[12,11]
            id="g_corner"
        />
    </PuzzleContainer>


    <PuzzleContainer 
    title="Award"
    description=""
    borderColor="border-green-500"
    >
    <p class="my-2 w-full text-center"> An award was granted to these premises, but I can't recall the name</p>
    <img src="images/g/award.jpg" alt="" class="w-1/4 mx-auto"/>

        <TextPuzzle 
            placeholder="What was the award's name?"
            correctAnswers={["Suliman", "suliman award", "suliman award for architectural merit"]}
            id="g_award"
        />
    </PuzzleContainer>



</div> 