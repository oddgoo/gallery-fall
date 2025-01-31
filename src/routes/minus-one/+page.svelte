<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="bg">
<div class="max-w-3xl mx-auto p-8">
    <h2 class="text-4xl mb-6 text-gray-800">Minus One - The Descent</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
        [LOG: 02] The corruption seeps deeper. Here the curator began their obsessive documentation, 
        their digital fingerprints growing erratic. The gallery's subconscious level pulses with 
        fragmented memories and distorted perceptions.
    </p>

    <PuzzleContainer 
        title="Tinted Memories"
        puzzleId="b1_tinted_memories"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> In the room of coloured windows, Capture a tinted photograph of yourself. <br/>
            Send it to the hosts of keys. They will grant you the key to this lock</p>
        <TextPuzzle 
            {puzzleId}
            placeholder="What is the passkey?"
            correctAnswers={["<3","❤️"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Tiny Giants"
        puzzleId="b1_giants"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> I saw the giants shrink and change their colour. </p>
        <TextPuzzle 
            {puzzleId}
            placeholder="What is their new colour?"
            correctAnswers={["gold","golden"]}

        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Givers of Language"
        puzzleId="b1_language"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> And from this same room I saw an opening. Walking there, I became witness to givers of language, perched atop the wall. What were these these ancestral beings?</p>
        <TextPuzzle 
            {puzzleId}
            placeholder="What were the guardians?"
            correctAnswers={["dog","dogs"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Destructive Feminine Force"
        puzzleId="b1_destructive_feminine_force"
        let:puzzleId
    >
        <img src="images/b1/destructive_feminine_force.jpg" class="w-3/4 mx-auto"/>
        <NumberPuzzle 
            {puzzleId}
            prompt="Year of creation?"
            correctAnswers={[1956]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Arte Povera"
        puzzleId="b1_povera"
        let:puzzleId
    >
        <ArrangePuzzle 
            {puzzleId}
            prompt="10m"
            imageUrl="images/b1/arte_povera.jpg"
            rows={1}
            columns={6}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Prepared"
        description=""
        puzzleId="b1_prepared"
        let:puzzleId
    >
        <p class="my-2 w-full text-center"> Follow the smell and seek the square window. He holds a tool on his right hand. </p>
        <TextPuzzle 
            {puzzleId}
            placeholder="What is the man holding?"
            correctAnswers={["umbrella"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Shapes of Utility"
        description="Seek this angle"
        puzzleId="b1_shapes"
        let:puzzleId
    >
        <p class="my-2">Face the eight times abled creature and recombine the shapes of utility</p>
        <ArrangePuzzle 
            {puzzleId}
            prompt="Face the eight times abled creature and recombine the shapes of utility"
            imageUrl="images/b1/shapes.png"
            rows={1}
            columns={6}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Starry Hands"
        puzzleId="b1_stars"
        let:puzzleId
    >
        <p class="my-2">Going back to the surface, through the way of the snail.
            I try to take inventory of the stars that guide my right hand.
        </p>
        <NumberPuzzle 
            {puzzleId}
            prompt=""
            correctAnswers={[40,41,42]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Chief Cop"
        puzzleId="b1_chief_cop"
        let:puzzleId
    >
        <p class="my-2 w-full text-center">I found myself back in the room of coloured windows. In it, a glowing door caught my attention. <br/>
            Underneath the door, I learned what the chief cop was misled on.
        </p>
        <TextPuzzle 
            {puzzleId}
            placeholder="What was the chief cop misled on?"
            correctAnswers={["murder weapons"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Dazzling and Dismaying"
        puzzleId="b1_dazzling"
        let:puzzleId
    >
        <img src="images/b1/dazzling.jpg" class="w-3/4 mx-auto"/>
        <TextPuzzle
            {puzzleId}
            prompt="Who made this?"
            correctAnswers={["Kathleen Ryan","Kathleen"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="They are all me"
        puzzleId="b1_broken_men"
        let:puzzleId
    >
        <p class="my-2">The broken men, they are all me; the broken men, they are all me. <br/>
            One sticks out the most, from its face. I will capture the main colour of its suit.
        </p>
        <TextPuzzle
            {puzzleId}
            prompt=""
            correctAnswers={["orange"]}
        />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Listening Vessels"
        puzzleId="b1_vessels"
        let:puzzleId
    >
        <p class="my-2 w-full text-center">
            Seek the listening vessels. Face the one that listens. <br/>
            What colour is it outside and inside?
        </p>
        <TextPuzzle 
            {puzzleId}
            prompt="_____ and ______"
            correctAnswers={["purple and white","white and purple","purple white","white purple"]}
        />
    </PuzzleContainer>
    

</div>
</div> 

<style>
    .bg {
        background-image: url('/images/ui/bg-b1.jpg');
        background-repeat: repeat;
        background-size: 50%;
        min-height: 100vh;
    }
</style> 

