<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="max-w-3xl mx-auto p-8">



    <h2 class="text-4xl mb-6 text-gray-800">Spirits of the Gallery</h2>

    <p class="mb-7">Throughout these unearthly grounds, I witnessed untiring spirits keeping the place and making visitors feel at ease.

    </p>

    <PuzzleContainer 
    title="Spirit of Connections"
    >
        <img class="mx-auto w-2/3" src="images/garden/spirit_connection.jpg"/>
        <p>This spirit had the name of a place..</p>

        <TextPuzzle 
            prompt=""
            correctAnswers={["aruba"]}
            id="spirit_connection"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Spirit of Thresholds"
    >
        <p>This spirit opened the way to the water closets</p>
        <TextPuzzle 
            prompt=""
            correctAnswers={["dormakaba"]}
            id="spirit_threshold"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Spirit of Warning"
    >
        <p>This spirit provided saftey precautions in a specific order</p>

        <ArrangePuzzle 
        prompt=""
        imageUrl="images/garden/spirit_warning.png"
        rows={2}
        columns={3}
        id="spirit_warning"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Spirit of Elevation"
    >
        <img class="mx-auto w-2/3" src="images/garden/spirit_elevation.jpg"/>
        <div class="text-center">AS ____ .11</div>
        <NumberPuzzle 
            prompt=""
            correctAnswers={[1735]}
            id="spirit_elevation"
        />
    </PuzzleContainer>

    <h2 class="text-4xl mb-6 text-gray-800">Back Gardens</h2>

    <PuzzleContainer 
    title="Bloom in the Cosmos"
    >
        <p>Shouting out thanks to my flowers forever</p>
        <p>From _____ with all my heart</p>

        <TextPuzzle 
            prompt=""
            correctAnswers={["Earth"]}
            id="garden_flowers_cosmos"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="See no Evil"
    >
        <p>I looked up at the glass window, and I saw an animal looking back at me. </p>
        <img class="mx-auto w-2/3" src="images/garden/garden_window.png"/>

        <TextPuzzle 
            prompt="What was the animal?"
            correctAnswers={["Pig","a pig"]}
            id="garden_window"
        />
    </PuzzleContainer>


    <h2 class="text-4xl mb-6 text-gray-800">Front Gardens</h2>

    <PuzzleContainer 
    title="Inscription"
    >
        <img class="mx-auto w-2/3" src="images/garden/pipe.jpg"/>
        <TextPuzzle 
            prompt="D N _ _ _ M M"
            correctAnswers={["200"]}
            id="garden_pipe_inscription"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Pathways"
    >

    <p>From the fallen lift in the bay of double wool, I sought the giants' square once more.<br/>
    Left mirrored Right. A path of matching stair strides.<br/>
    The broader stairway's count, lessened by the narrow one's, reveals the answer: _</p>

        <NumberPuzzle
            prompt="Steps"
            correctAnswers={[0]}
            id="garden_steps"
        />
    </PuzzleContainer>
    



</div> 