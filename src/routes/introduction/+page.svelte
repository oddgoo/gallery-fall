<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="w-full max-w-3xl mx-auto px-4 py-6 sm:p-8">
    <h2 class="text-3xl sm:text-4xl mb-4 sm:mb-6 text-gray-800">Introduction</h2>
    <p class="text-base sm:text-lg leading-relaxed mb-6 text-gray-700">Calibrate your attunement with with these simple tasks</p>
    
    <PuzzleContainer 
        title="Cosmic Laps"
        description=""
        puzzleId="intro_age"
        let:puzzleId
    >
    <p>How many laps around the sun has the host of keys completed?</p>
            <NumberPuzzle 
                {puzzleId}
                prompt=""
                correctAnswers={[36]}
            />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Deity"
        puzzleId="intro_text"
        let:puzzleId
    >

        <img src="images/intro/deity.jpg" alt="Word Chamber" class="w-1/2 mx-auto rounded-lg mb-4">
            <TextPuzzle 
                {puzzleId}
                prompt="Which deity is this?"
                correctAnswers={["Ganesha"]}
                placeholder="Type the word you see"
            />
    </PuzzleContainer>

    <PuzzleContainer 
        title="Here Comes Everybody"
        description=""
        puzzleId="intro_arrange"
        let:puzzleId
    >
    <p>Bring the image back to its truth. Drag to swap pieces.</p>
            <ArrangePuzzle 
                {puzzleId}
                imageUrl="images/intro/giant.jpg"
                rows={3}
                columns={2}
            />
    </PuzzleContainer>
</div> 