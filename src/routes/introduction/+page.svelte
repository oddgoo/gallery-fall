<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="mx-auto w-full max-w-3xl px-4 py-6 sm:p-8">
	<h2 class="mb-4 text-3xl text-gray-800 sm:mb-6 sm:text-4xl">Introduction</h2>
	<p class="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
		Anomaly detected. Curator's obsession has destabilized the gallery's attachment to reality.
		Initiating visitor authentication sequence. Complete these calibration protocols to establish
		your presence in the system.
	</p>

	<PuzzleContainer
		title="Cosmic Laps"
		description="Time signatures must align for safe passage."
		puzzleId="intro_age"
		let:puzzleId
	>
		<p>
			The Keeper of Keys circles the sun. Their orbits marks our path. How many cycles complete?
		</p>
		<NumberPuzzle
			{puzzleId}
			prompt="How many laps around the sun has the keeper of keys completed?"
			correctAnswers={[36]}
		/>
	</PuzzleContainer>

	<PuzzleContainer title="Deity" puzzleId="intro_text" let:puzzleId>
		<p class="mb-4 text-gray-700">
			A fragment persists through the static. The curator's last coherent upload...
		</p>
		<img src="images/intro/deity.jpg" alt="Word Chamber" class="mx-auto mb-4 w-1/2 rounded-lg" />
		<TextPuzzle
			{puzzleId}
			prompt="Which deity is granting passage? Enter their name."
			correctAnswers={['Ganesha']}
			placeholder="Enter the divine name"
		/>
	</PuzzleContainer>

	<PuzzleContainer
		title="Here Comes Everybody"
		description="Memory fragments detected. Restoration required."
		puzzleId="intro_arrange"
		let:puzzleId
	>
		<p>
			The glitch tears at the fabric of our reality. Restore the image to its true form before the
			corruption spreads. Manipulate the fragments to reconstruct.
		</p>
		<ArrangePuzzle {puzzleId} imageUrl="images/intro/giant.jpg" rows={3} columns={2} />
	</PuzzleContainer>
</div>
