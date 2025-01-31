<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import ProgressionGate from '$lib/ProgressionGate.svelte';
</script>

<div class="mx-auto max-w-3xl p-8">
	<h2 class="mb-6 text-4xl text-gray-800">Epilogue</h2>

	<ProgressionGate page="epilogue">
		<p class="mb-6 text-lg leading-relaxed text-gray-700">Welcome to the Epilogue.</p>

		<div class="prose prose-lg">
			<p>you have reached the end of the journey</p>
		</div>
	</ProgressionGate>
</div>
