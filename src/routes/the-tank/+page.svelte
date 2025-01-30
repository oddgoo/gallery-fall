<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="tank-bg">
    <div class="max-w-3xl mx-auto p-8">
        <h2 class="text-4xl mb-6 text-white">The Tank</h2>
        <p class="text-lg leading-relaxed mb-6 text-white">At the depths. Can't see the way out. Can't see the way in. Stuck in darkness</p>

        
        <PuzzleContainer 
        title="Fundamental Reality"
        >
            <ArrangePuzzle 
                prompt=""
                imageUrl="images/tank/tank_fundamental.jpg"
                rows={5}
                columns={5}
                id="tank_fundamental"
            />
        </PuzzleContainer>

        <PuzzleContainer title="The Plan">
            <p class="my-2 w-full text-center">1010210610<br/>1050___650<br/>1130330730<br/></p>
            <NumberPuzzle correctAnswers={[250]} id="tank_plan" />
        </PuzzleContainer>

        <PuzzleContainer 
        title="Emergency"
        >
        <p class="my-2 w-full text-center">Assembly Point 3: _______ </p>
    
            <TextPuzzle 
                correctAnswers={["The Domain","Domain"]}
                id="tank_emergency"
            />
        </PuzzleContainer>

        <PuzzleContainer title="Tome of the depths">
            <p class="my-2 w-full text-center">Seek the tome. Seek its identity</p>
            <NumberPuzzle correctAnswers={[781741]} prompt="9 ______ 741711" 
            id="tank_tome" />
        </PuzzleContainer>

        <PuzzleContainer 
        title="The Pleiades"
        >
        <p class="my-2 w-full text-center">The Pleiades provides a symbolic cartography for Mesiti’s installation, a gesture to _______ _______ on a global scale </p>
    
            <TextPuzzle 
                prompt="Maybe this passage is not physically here..."
                correctAnswers={["communal creativity"]}
                id="tank_pleiades"
            />
        </PuzzleContainer>

    </div>
</div>

<style>
    .tank-bg {
        background-image: url('/images/ui/dark-concrete.jpg');
        background-repeat: repeat;
        background-size: 50%;
        min-height: 100vh;
    }
</style> 