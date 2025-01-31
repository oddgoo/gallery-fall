<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import GlitchText from '$lib/GlitchText.svelte';
</script>

<div class="mx-auto w-full max-w-3xl px-4 py-6 sm:p-8">
	<h2 class="mb-4 text-3xl text-gray-800 sm:mb-6 sm:text-4xl">Introduction</h2>
	<p class="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
		You stand at the periphery of the Anomaly, where reality first begins to waver. The air shimmers with sparks of instability.
	</p>

	<div class="mb-6 border-l-4 border-purple-400 bg-purple-50 p-4 font-mono text-sm italic">
		<div class="flex items-center space-x-2 text-purple-800 mb-2">
			<span class="text-xs">[ SYSTEM INTERFACE v2.1.8 ]</span>
			<div class="h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
		</div>
		<p class="text-purple-900">
			This interface has manifested from the gallery's  <GlitchText text="destabilised" /> network - a bridge between your reality and the anomalous space. Its protocols resonate with the glitches, allowing controlled interaction with the corrupted exhibits.
		</p>
	</div>

	<div class="bg-gray-600 p-4 my-6 rounded-lg font-mono text-sm">
		<p class="my-2 text-base leading-relaxed text-green-300 ">
			Initiating visitor authentication sequence... <br/> Your presence has been detected as a potential stabilising force. Complete these calibration protocols to establish your signature in the system. Warning: Failure to properly calibrate may result in temporal displacement.
		</p>

	</div>

	<PuzzleContainer
		title="Cosmic Laps"
		description="Time signatures must align for safe passage."
		puzzleId="intro_age"
		let:puzzleId
	>
		<p>
			The Keeper of Keys circles the sun. Their orbits marks our path. How many cycles complete? How many laps around the sun has the keeper of keys completed?
		</p>
		<NumberPuzzle
			{puzzleId}
			prompt=""
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
