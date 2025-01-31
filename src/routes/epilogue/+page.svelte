<script lang="ts">
	import NumberPuzzle from '$lib/NumberPuzzle.svelte';
	import TextPuzzle from '$lib/TextPuzzle.svelte';
	import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
	import PuzzleContainer from '$lib/PuzzleContainer.svelte';
	import ProgressionGate from '$lib/ProgressionGate.svelte';
	import GlitchText from '$lib/GlitchText.svelte';
</script>

<div class="mx-auto max-w-3xl p-8">
	<h2 class="mb-6 text-4xl text-gray-800">Epilogue</h2>

	<ProgressionGate page="epilogue">

		<div class="prose prose-lg">
			<p>The digital entropy dissipates like morning fog, reality knitting itself back together. The curator's obsession, <b>my obsession</b>, once a tear in the fabric of space-time, has been transformed into something <GlitchText text="beautiful" />. In my relentless pursuit of perfection, of cataloguing every detail, I had become both the Keeper of Keys and the source of the anomaly.</p>
            
            <p>But you, my friends, your presence here today has done more than solve puzzles, you've reminded me of what matters most. Each shared moment, each laugh, each connection has helped anchor me back to reality. The exhibits shine with renewed purpose, no longer trapped in my fractured vision, but enriched by the joy of sharing them with others.</p>

            <p class="text-sm italic mt-8">Thank you for being here on my birthday, for helping me find my way back through the static. Your friendship today has made all the difference. 💝</p>
		</div>

		<img src="images/epilogue/love.jpg" class="mx-auto w-1/2 my-10" />
	</ProgressionGate>
</div>
