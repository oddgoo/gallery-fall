<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import ProgressionGate from '$lib/ProgressionGate.svelte';
</script>

<div class="mx-auto max-w-3xl p-8">
	<h2 class="mb-6 text-4xl text-gray-800">Ground Floor</h2>

	<ProgressionGate page="ground">
		<p class="mb-6 text-lg leading-relaxed text-gray-700">
			The first signs of corruption manifest here, where reality begins to fray at the edges. The curator's obsession has left its mark - exhibits flicker between states, their meanings destabilised. Digital artefacts corrupt the  gallery space, leaving behind enigmatic patterns that cry for resolution. Each solved anomaly could be the key to preventing total systemic collapse.
		</p>


		<PuzzleContainer title="Naked Bestial" description="" puzzleId="g_naked_bestial" let:puzzleId>
			<p class="my-2 w-full text-center">itisbitter_____heanswered</p>
			<TextPuzzle {puzzleId} placeholder="Enter the missing word" correctAnswers={['bitter']} />
		</PuzzleContainer>

		<PuzzleContainer title="My Life is Coloured" description="" puzzleId="g_colors" let:puzzleId>
			<ArrangePuzzle
				{puzzleId}
				prompt="Re-order into reality"
				imageUrl="images/g/colors.jpg"
				rows={1}
				columns={6}
			/>
		</PuzzleContainer>

		<PuzzleContainer title="Cast Thy Gaze" description="" puzzleId="g_artspace" let:puzzleId>
			<p class="my-2 w-full text-center">
				From the middle of the bridge, an eastward gaze into the long distance reveals a signed
				locale.
			</p>
			<TextPuzzle
				{puzzleId}
				placeholder="What is this place called?"
				correctAnswers={['ARTSPACE']}
			/>
		</PuzzleContainer>

		<PuzzleContainer title="Congregation" description="" puzzleId="g_congregation" let:puzzleId>
			<ArrangePuzzle
				{puzzleId}
				prompt="Re-order into reality"
				imageUrl="images/g/congregation.png"
				rows={3}
				columns={3}
			/>
		</PuzzleContainer>

		<PuzzleContainer title="Dibirdibi Country" description="" puzzleId="g_dibirdibi" let:puzzleId>
			<img src="images/g/dibirdibi.png" alt="" class="mb-4 w-full rounded-lg" />
			<NumberPuzzle {puzzleId} prompt="What Year?" correctAnswers={[2008]} />
		</PuzzleContainer>

		<PuzzleContainer
			title="Rusted Song"
			description="In the hallway flanked by the blaze snuffers, a number identifies the song of the rusted materials."
			puzzleId="g_rusted_song"
			let:puzzleId
		>
			<NumberPuzzle {puzzleId} prompt="" correctAnswers={[1010]} />
		</PuzzleContainer>

		<PuzzleContainer
			title="Cozy Corner"
			description="A corner, a cozy corner, a cozy cuved corner. I go in there and count the number of easels I can see"
			puzzleId="g_corner"
			let:puzzleId
		>
			<img src="images/g/corner.jpg" alt="" class="mx-auto w-1/4" />
			<NumberPuzzle {puzzleId} prompt="" correctAnswers={[12, 11]} />
		</PuzzleContainer>

		<PuzzleContainer title="Award" description="" puzzleId="g_award" let:puzzleId>
			<p class="my-2 w-full text-center">
				An award was granted to these premises, but I can't recall the name
			</p>
			<img src="images/g/award.jpg" alt="" class="mx-auto w-1/4" />

			<TextPuzzle
				{puzzleId}
				placeholder="What was the award's name?"
				correctAnswers={['Suliman', 'suliman award', 'suliman award for architectural merit']}
			/>
		</PuzzleContainer>

		<PuzzleContainer title="The Princess" puzzleId="g_princess" let:puzzleId>
			<p class="my-2">_____ and the Swan</p>
			<img src="images/g/swan.jpg" alt="" class="mx-auto w-1/4" />
			<TextPuzzle {puzzleId} prompt="" correctAnswers={['Leda']} />
		</PuzzleContainer>
	</ProgressionGate>
</div>
