<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import ProgressionGate from '$lib/ProgressionGate.svelte';
	import GlitchText from '$lib/GlitchText.svelte';
</script>

<div class="garden-bg">
	<div class="mx-auto max-w-3xl p-8">
		<h2 class="mb-6 text-4xl text-gray-800">Spirits of the Gallery</h2>

		<ProgressionGate page="gardens">

			<p class="mb-7 text-gray-700 leading-relaxed">
				The garden section flickers between reality and digital decay. Here, in this liminal space, the curator's obsession has awakened something unexpected - the very spirits of the building itself. They manifest as glitches in the system, yet their presence feels ancient, protective. These entities, once mere maintenance protocols, have evolved into something more. They maintain not just the physical space, but the very fabric of reality itself.
			</p>

			<p class="mb-7 font-bold text-gray-800">
				To stabilise this section, we must acknowledge these spirits, give them form through recognition. Each name is an anchor, a point of stability in the chaos.
			</p>

			<PuzzleContainer title="Spirit of Connections" puzzleId="spirit_connection" let:puzzleId>
				<img class="mx-auto w-2/3" src="images/garden/spirit_connection.jpg" />
				<p>This spirit had the name of a place..</p>

				<TextPuzzle {puzzleId} prompt="" correctAnswers={['aruba']} />
			</PuzzleContainer>

			<PuzzleContainer title="Spirit of Thresholds" puzzleId="spirit_threshold" let:puzzleId>
				<p>This spirit opened the way to the water closets</p>
				<TextPuzzle {puzzleId} prompt="" correctAnswers={['dormakaba']} />
			</PuzzleContainer>

			<PuzzleContainer title="Spirit of Warning" puzzleId="spirit_warning" let:puzzleId>
				<p>This spirit provided saftey precautions in a specific order</p>

				<ArrangePuzzle
					{puzzleId}
					prompt=""
					imageUrl="images/garden/spirit_warning.png"
					rows={2}
					columns={3}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="Spirit of Elevation" puzzleId="spirit_elevation" let:puzzleId>
				<img class="mx-auto w-2/3" src="images/garden/spirit_elevation.jpg" />
				<div class="text-center">AS ____ .11</div>
				<NumberPuzzle {puzzleId} prompt="" correctAnswers={[1735]} />
			</PuzzleContainer>

			<h2 class="mb-6 text-4xl text-gray-800">Back Gardens</h2>

			<PuzzleContainer title="Bloom in the Cosmos" puzzleId="garden_flowers_cosmos" let:puzzleId>
				<p>Shouting out thanks to my flowers forever</p>
				<p>From _____ with all my heart</p>

				<TextPuzzle {puzzleId} prompt="" correctAnswers={['Earth']} />
			</PuzzleContainer>

			<PuzzleContainer title="See no Evil" puzzleId="garden_window" let:puzzleId>
				<p>I looked up at the glass window, and I saw an animal looking back at me.</p>
				<img class="mx-auto w-2/3" src="images/garden/garden_window.png" />

				<TextPuzzle {puzzleId} prompt="What was the animal?" correctAnswers={['Pig', 'a pig']} />
			</PuzzleContainer>

			<h2 class="mb-6 text-4xl text-gray-800">Front Gardens</h2>

			<PuzzleContainer title="Inscription" puzzleId="garden_pipe_inscription" let:puzzleId>
				<img class="mx-auto w-2/3" src="images/garden/pipe.jpg" />
				<TextPuzzle {puzzleId} prompt="D N _ _ _ M M" correctAnswers={['200']} />
			</PuzzleContainer>

			<PuzzleContainer title="Pathways" puzzleId="garden_steps" let:puzzleId>
				<p>
					From the fallen lift in the bay of double wool, I sought the giants' square once more.<br
					/>
					Left mirrored Right. A path of matching stair strides.<br />
					The broader stairway's count, lessened by the narrow one's, reveals the answer: _
				</p>

				<NumberPuzzle {puzzleId} prompt="Steps" correctAnswers={[0]} />
			</PuzzleContainer>
		</ProgressionGate>
	</div>
</div>

<style>
	.garden-bg {
		background-image: url('/images/ui/gardens.jpg');
		background-repeat: repeat;
		background-size: 50%;
		min-height: 100vh;
	}
</style>
