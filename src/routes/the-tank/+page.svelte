<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import ProgressionGate from '$lib/ProgressionGate.svelte';
</script>

<div class="tank-bg">
	<div class="mx-auto max-w-3xl p-8">
		<h2 class="mb-6 text-4xl text-white">The Tank - Point of No Return</h2>

		<ProgressionGate page="the-tank">
			<p class="mb-6 text-lg leading-relaxed text-white">
				[FINAL LOG] System collapse imminent. The curator's consciousness has merged with the void.
				The gallery's deepest level has become a singularity of corrupted data and fractured
				reality. This is where the glitch began. This is where it must end.
			</p>

			<PuzzleContainer title="Fundamental Reality" puzzleId="tank_fundamental" let:puzzleId>
				<ArrangePuzzle
					{puzzleId}
					prompt=""
					imageUrl="images/tank/tank_fundamental.jpg"
					rows={5}
					columns={5}
				/>
			</PuzzleContainer>

			<PuzzleContainer title="The Plan" puzzleId="tank_plan" let:puzzleId>
				<p class="my-2 w-full text-center">1010210610<br />1050___650<br />1130330730<br /></p>
				<NumberPuzzle {puzzleId} correctAnswers={[250]} />
			</PuzzleContainer>

			<PuzzleContainer title="Emergency" puzzleId="tank_emergency" let:puzzleId>
				<p class="my-2 w-full text-center">Assembly Point 3: _______</p>
				<TextPuzzle {puzzleId} correctAnswers={['The Domain', 'Domain']} />
			</PuzzleContainer>

			<PuzzleContainer title="Tome of the depths" puzzleId="tank_tome" let:puzzleId>
				<p class="my-2 w-full text-center">Seek the tome. Seek its identity</p>
				<NumberPuzzle {puzzleId} correctAnswers={[781741]} prompt="9 ______ 741711" />
			</PuzzleContainer>

			<PuzzleContainer title="The Pleiades" puzzleId="tank_pleiades" let:puzzleId>
				<p class="my-2 w-full text-center">
					The Pleiades provides a symbolic cartography for Mesiti's installation, a gesture to
					_______ _______ on a global scale
				</p>
				<TextPuzzle
					{puzzleId}
					prompt="Maybe this passage is not physically here..."
					correctAnswers={['communal creativity']}
				/>
			</PuzzleContainer>
		</ProgressionGate>
	</div>
</div>

<style>
	.tank-bg {
		background-image: url('/images/ui/bg-tank.jpg');
		background-repeat: repeat;
		background-size: 50%;
		min-height: 100vh;
	}
</style>
