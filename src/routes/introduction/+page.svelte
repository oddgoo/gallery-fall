<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';

    const soundChamberPuzzle = {
        prompt: "In this chamber, a tone plays. What number do you hear?",
        correctAnswers: [1]
    };

    const wordChamberPuzzle = {
        prompt: "What word is written on the wall?",
        correctAnswers: ["begin"]
    };

    const imagePuzzle = {
        prompt: "Arrange the pieces to complete the image.",
        imageUrl: "https://picsum.photos/500/500",
        rows: 3,
        columns: 3
    };
</script>

<div class="w-full max-w-3xl mx-auto px-4 py-6 sm:p-8">
    <h2 class="text-3xl sm:text-4xl mb-4 sm:mb-6 text-gray-800">Introduction</h2>
    <p class="text-base sm:text-lg leading-relaxed mb-6 text-gray-700">Calibrate your attunement with your hand-scanner with these simple tasks</p>
    
    <PuzzleContainer 
        title="The Sound Chamber"
        description="Listen carefully to the sound in this chamber. Each sound corresponds to a number."
        puzzleId="sound-chamber-1"
        let:puzzleId
    >
            <NumberPuzzle 
                {puzzleId}
                prompt={soundChamberPuzzle.prompt}
                correctAnswers={soundChamberPuzzle.correctAnswers}
            />
    </PuzzleContainer>

    <PuzzleContainer 
        title="The Word Chamber"
        description="In this chamber, words appear on the walls. Read them carefully."
        puzzleId="word-chamber-1"
        let:puzzleId
    >
        <img src="https://picsum.photos/500/300" alt="Word Chamber" class="w-full rounded-lg mb-4">
            <TextPuzzle 
                {puzzleId}
                prompt={wordChamberPuzzle.prompt}
                correctAnswers={wordChamberPuzzle.correctAnswers}
                placeholder="Type the word you see"
            />
    </PuzzleContainer>

    <PuzzleContainer 
        title="The Image Chamber"
        description="In this chamber, images have been broken into pieces. Arrange them correctly to proceed."
        puzzleId="image-chamber-1"
        let:puzzleId
    >
            <ArrangePuzzle 
                {puzzleId}
                prompt={imagePuzzle.prompt}
                imageUrl={imagePuzzle.imageUrl}
                rows={imagePuzzle.rows}
                columns={imagePuzzle.columns}
            />
    </PuzzleContainer>
</div> 