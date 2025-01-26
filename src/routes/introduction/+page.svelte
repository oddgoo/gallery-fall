<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';

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
        imageUrl: "https://picsum.photos/500/100",
        rows: 1,
        columns: 3
    };
</script>

<div class="max-w-3xl mx-auto p-8">
    <h2 class="text-4xl mb-6 text-gray-800">Introduction</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">Start with these simple puzzles to get the hang of the interface</p>
    
    <div class="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
        <h3 class="text-2xl mb-4 text-gray-800">The Sound Chamber</h3>
        <p class="text-gray-700 mb-6">Listen carefully to the sound in this chamber. Each sound corresponds to a number.</p>
        
        <NumberPuzzle 
            prompt={soundChamberPuzzle.prompt}
            correctAnswers={soundChamberPuzzle.correctAnswers}
            id="sound-chamber-1"
        />
    </div>

    <div class="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
        <h3 class="text-2xl mb-4 text-gray-800">The Word Chamber</h3>
        <img src="https://picsum.photos/500/300" alt="Word Chamber" class="mb-4">
        <p class="text-gray-700 mb-6">In this chamber, words appear on the walls. Read them carefully.</p>
        
        <TextPuzzle 
            prompt={wordChamberPuzzle.prompt}
            correctAnswers={wordChamberPuzzle.correctAnswers}
            id="word-chamber-1"
            placeholder="Type the word you see"
        />
    </div>

    <div class="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
        <h3 class="text-2xl mb-4 text-gray-800">The Image Chamber</h3>
        <p class="text-gray-700 mb-6">In this chamber, images have been broken into pieces. Arrange them correctly to proceed.</p>
        
        <ArrangePuzzle 
            prompt={imagePuzzle.prompt}
            imageUrl={imagePuzzle.imageUrl}
            rows={imagePuzzle.rows}
            columns={imagePuzzle.columns}
            id="image-chamber-1"
        />
    </div>
</div> 