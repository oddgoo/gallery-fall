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
    title="Tinted Memories"
    >
    <p class="my-2 w-full text-center"> In the room of coloured windows, Capture a tinted photograph of yourself. <br/>
        Send it to the hosts of keys. They will grant you the key to this lock</p>
        <TextPuzzle 
            placeholder="What is the passkey?"
            correctAnswers={["<3","❤️"]}
            id="b1_tinted_memories"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Tiny Giants"
    >
    <p class="my-2 w-full text-center"> I saw the giants shrink and change their colour. </p>

        <TextPuzzle 
            placeholder="What is their new colour?"
            correctAnswers={["gold","golden"]}
            id="b1_giants"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Givers of Language"
    >
    <p class="my-2 w-full text-center"> And from this same room I saw an opening. Walking there, I became witness to givers of language, perched atop the wall. What were these these ancestral beings?</p>

        <TextPuzzle 
            placeholder="What were the guardians?"
            correctAnswers={["dog","dogs"]}
            id="b1_giants"
        />
    </PuzzleContainer>

    <PuzzleContainer title="Destructive Feminine Force">
        <img src="images/b1/destructive_feminine_force.jpg" class="w-3/4 mx-auto"/>
        <NumberPuzzle 
            prompt="Year of creation?"
            correctAnswers={[1956]}
            id="b1_destructive_feminine_force"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Arte Povera"
    >
        <ArrangePuzzle 
            prompt="10m"
            imageUrl="images/b1/arte_povera.jpg"
            rows={1}
            columns={6}
            id="b1_povera"
        />
    </PuzzleContainer>


    <PuzzleContainer 
    title="Prepared"
    description=""
    >
    <p class="my-2 w-full text-center"> Follow the smell and seek the square window. He holds a tool on his right hand. </p>

        <TextPuzzle 
            placeholder="What is the man holding?"
            correctAnswers={["umbrella"]}
            id="b1_prepared"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Shapes of Utility"
    description="Seek this angle"
    >
    <p class="my-2">Face the eight times abled creature and recombine the shapes of utility</p>

        <ArrangePuzzle 
            prompt="Face the eight times abled creature and recombine the shapes of utility"
            imageUrl="images/b1/shapes.png"
            rows={1}
            columns={6}
            id="b1_shapes"
        />
    </PuzzleContainer>

    <PuzzleContainer title="Starry Hands">
        <p class="my-2">Going back to the surface, through the way of the snail.
            I try to take inventory of the stars that guide my right hand.
        </p>
        <NumberPuzzle 
            prompt=""
            correctAnswers={[40,41,42]}
            id="b1_stars"
        />
    </PuzzleContainer>

    <PuzzleContainer 
    title="Chief Cop"
    >
    <p class="my-2 w-full text-center">I found myself back in the room of coloured windows. In it, a glowing door caught my attention. <br/>
        Underneath the door, I learned what the chief cop was misled on.
    </p>
        <TextPuzzle 
            placeholder="What was the chief cop misled on?"
            correctAnswers={["murder weapons"]}
            id="b1_chief_cop"
        />
    </PuzzleContainer>

    <PuzzleContainer title="Dazzling and Dismaying">
        <img src="images/b1/dazzling.jpg" class="w-3/4 mx-auto"/>
        <TextPuzzle
            prompt="Who made this?"
            correctAnswers={["Kathleen Ryan","Kathleen"]}
            id="b1_dazzling"
        />
    </PuzzleContainer>

    <PuzzleContainer title="They are all me">
        <p class="my-2">The broken men, they are all me; the broken men, they are all me. <br/>
            One sticks out the most, from its face. I will capture the main colour of its suit.
        </p>
        <TextPuzzle
            prompt=""
            correctAnswers={["orange"]}
            id="b1_broken_men"
        />
    </PuzzleContainer>




</div> 