<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import ProgressionGate from '$lib/ProgressionGate.svelte';
	import GlitchText from '$lib/GlitchText.svelte';
</script>

<div class="bg">
	<div class="mx-auto max-w-3xl p-8">
		<h2 class="mb-6 text-4xl text-gray-800">Minus One - The Descent</h2>

		<ProgressionGate page="minus-one">
			<p class="mb-6 text-lg leading-relaxed text-gray-700">
				[LOG: 02] The corruption seeps deeper. Here the curator began their obsessive documentation,
				their digital fingerprints growing <GlitchText text="erratic" />. The gallery's subconscious level pulses with
				fragmented memories and distorted perceptions.
			</p>

			<PuzzleContainer title="Tinted Memories" puzzleId="b1_tinted_memories" let:puzzleId>
				<p class="my-2 w-full text-center">
					In the room of coloured windows, Capture a tinted photograph of yourself. <br />
					Send it to the hosts of keys. They will grant you the key to this lock
				</p>

				<p class="italic my-2 text-center w-full"> meta note: since the host of keys is probably not there, the passkey is: ❤️</p>
				
				<TextPuzzle {puzzleId} placeholder="What is the passkey?" correctAnswers={['<3', '❤️']} />
			</PuzzleContainer>

			<PuzzleContainer title="Tiny Giants" puzzleId="b1_giants" let:puzzleId>
				<p class="my-2 w-full text-center">I saw the giants shrink and change their colour.</p>
				<TextPuzzle
					{puzzleId}
					placeholder="What is their new colour?"
					correctAnswers={['gold', 'golden']}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="Givers of Language" puzzleId="b1_language" let:puzzleId>
				<p class="my-2 w-full text-center">
					And from this same room I saw an opening. Walking there, I became witness to givers of
					language, perched atop the wall. What were these these ancestral beings?
				</p>
				<TextPuzzle
					{puzzleId}
					placeholder="What were the guardians?"
					correctAnswers={['dog', 'dogs']}
				/>
			</PuzzleContainer>

			<PuzzleContainer
				title="Destructive Feminine Force"
				puzzleId="b1_destructive_feminine_force"
				let:puzzleId
			>
				<img src="images/b1/destructive_feminine_force.jpg" class="mx-auto w-3/4" />
				<NumberPuzzle {puzzleId} prompt="Year of creation?" correctAnswers={[1956]} />
			</PuzzleContainer>

			<PuzzleContainer title="Arte Povera" puzzleId="b1_povera" let:puzzleId>
				<ArrangePuzzle
					{puzzleId}
					prompt="10m"
					imageUrl="images/b1/arte_povera.jpg"
					rows={1}
					columns={6}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="Prepared" description="" puzzleId="b1_prepared" let:puzzleId>
				<p class="my-2 w-full text-center">
					Follow the smell and seek the square window. He holds a tool on his right hand.
				</p>
				<TextPuzzle
					{puzzleId}
					placeholder="What is the man holding?"
					correctAnswers={['umbrella']}
				/>
			</PuzzleContainer>

			<PuzzleContainer
				title="Shapes of Utility"
				description=""
				puzzleId="b1_shapes"
				let:puzzleId
			>
			    <img src="images/b1/b1_shapes.jpg" class="mx-auto w-3/4" />
				<p class="my-2">Face the eight times abled creature. Take a few steps back and recombine the shapes of utility:</p>
				<ArrangePuzzle
					{puzzleId}
					prompt=""
					imageUrl="images/b1/shapes.png"
					rows={1}
					columns={6}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="Starry Hands" puzzleId="b1_stars" let:puzzleId>
				<p class="my-2">
					Going back to the surface, through the way of the snail. I try to take inventory of the
					stars that guide my right hand.
				</p>
				<NumberPuzzle {puzzleId} prompt="" correctAnswers={[40, 41, 42]} />
			</PuzzleContainer>

			<PuzzleContainer title="Chief Cop" puzzleId="b1_chief_cop" let:puzzleId>
				<p class="my-2 w-full text-center">
					I found myself back in the room of coloured windows. In it, a glowing door caught my
					attention. <br />
					Underneath the door, I learned what the chief cop was misled on.
				</p>
				<TextPuzzle
					{puzzleId}
					placeholder="What was the chief cop misled on?"
					correctAnswers={['murder weapons']}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="Dazzling and Dismaying" puzzleId="b1_dazzling" let:puzzleId>
				<img src="images/b1/dazzling.jpg" class="mx-auto w-3/4" />
				<TextPuzzle
					{puzzleId}
					prompt="Who made this?"
					correctAnswers={['Kathleen Ryan', 'Kathleen']}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="They are all me" puzzleId="b1_broken_men" let:puzzleId>
				<p class="my-2">
					The broken men, they are all me; the broken men, they are all me. <br />
					One sticks out the most, from its face. I will capture the main colour of its suit.
				</p>
				<TextPuzzle {puzzleId} prompt="" correctAnswers={['orange']} />
			</PuzzleContainer>

			<PuzzleContainer title="Listening Vessels" puzzleId="b1_vessels" let:puzzleId>
				<p class="my-2 w-full text-center">
					Seek the listening vessels. Face the one that listens. <br />
					What colour is it outside and inside?
				</p>
				<TextPuzzle
					{puzzleId}
					prompt="_____ and ______"
					correctAnswers={['purple and white', 'white and purple', 'purple white', 'white purple']}
				/>
			</PuzzleContainer>
		</ProgressionGate>
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
