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
        puzzleId="g_naked_bestial"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> itisbitter_____heanswered </p>
        <TextPuzzle 
            {puzzleId}
            placeholder="Enter the missing word"
            correctAnswers={["bitter"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="My Life is Coloured"
        description=""
        puzzleId="g_colors"
        let:puzzleId
    >
        <ArrangePuzzle 
            {puzzleId}
            prompt="Re-order into reality"
            imageUrl="images/g/colors.jpg"
            rows={1}
            columns={6}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Cast Thy Gaze"
        description=""
        puzzleId="g_artspace"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> From the middle of the bridge, an eastward gaze into the long distance reveals a signed locale. </p>
        <TextPuzzle 
            {puzzleId}
            placeholder="What is this place called?"
            correctAnswers={["ARTSPACE"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Congregation"
        description=""
        puzzleId="g_congregation"
        let:puzzleId
    >
        <ArrangePuzzle 
            {puzzleId}
            prompt="Re-order into reality"
            imageUrl="images/g/congregation.png"
            rows={3}
            columns={3}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Dibirdibi Country"
        description=""
        puzzleId="g_dibirdibi"
        let:puzzleId
    >
        <img src="images/g/dibirdibi.png" alt="" class="w-full rounded-lg mb-4"/>
        <NumberPuzzle 
            {puzzleId}
            prompt="What Year?"
            correctAnswers={[2008]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Rusted Song"
        description="In the hallway flanked by the blaze snuffers, a number identifies the song of the rusted materials."
        puzzleId="g_rusted_song"
        let:puzzleId
    >
        <NumberPuzzle 
            {puzzleId}
            prompt=""
            correctAnswers={[1010]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Cozy Corner"
        description="A corner, a cozy corner, a cozy cuved corner. I go in there and count the number of easels I can see"
        puzzleId="g_corner"
        let:puzzleId
    >
        <img src="images/g/corner.jpg" alt="" class="w-1/4 mx-auto"/>
        <NumberPuzzle 
            {puzzleId}
            prompt=""
            correctAnswers={[12,11]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Award"
        description=""
        puzzleId="g_award"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> An award was granted to these premises, but I can't recall the name</p>
        <img src="images/g/award.jpg" alt="" class="w-1/4 mx-auto"/>

        <TextPuzzle 
            {puzzleId}
            placeholder="What was the award's name?"
            correctAnswers={["Suliman", "suliman award", "suliman award for architectural merit"]}

        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="The Princess"  
        puzzleId="g_princess"
        let:puzzleId
    >

        <p class="my-2">_____ and the Swan
        </p>
        <img src="images/g/swan.jpg" alt="" class="w-1/4 mx-auto"/>
        <TextPuzzle
            {puzzleId}
            prompt=""
            correctAnswers={["Leda"]}
        />

    </PuzzleContainer>




</div> 