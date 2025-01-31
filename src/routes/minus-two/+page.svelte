<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="bg">
<div class="max-w-3xl mx-auto p-8 ">
    <h2 class="text-4xl mb-6 text-white">Minus Two - The Abyss</h2>
    <p class="text-lg leading-relaxed mb-6 text-white">
        [LOG: 03] System integrity critical. The curator's logs become increasingly fragmented here. 
        Their obsession with the gallery's deepest level has corrupted both data and reality. 
        The digital void yearns to manifest.
    </p>

<PuzzleContainer 
    title="The gift"
    puzzleId="b2_the_gift"
    let:puzzleId
>
    <p class="my-2 w-full text-center">I took the gift from Buddha's open hands<br/>
    </p>
    <TextPuzzle 
        {puzzleId}
        placeholder="What was the gift?"
        correctAnswers={["a stone","stone"]}
    />
</PuzzleContainer>

<PuzzleContainer 
    title="Minus Two Arrangement"
    description=""
    puzzleId="b2_congregation"
    let:puzzleId
>
    <ArrangePuzzle 
        {puzzleId}
        prompt=""
        imageUrl="images/b2/b2_arrangement.png"
        rows={1}
        columns={8}
    />
</PuzzleContainer>

<PuzzleContainer 
    title="Pause, Turn, Touch, Reach"
    puzzleId="b2_pause"
    let:puzzleId
>
<p class="my-2 w-full text-center">In darkness, manipulate the beams into 4 segments and send evidence of your deed to the hosts of keys. <br/>
    They will grant you the key to this lock<br/>
</p>
    <TextPuzzle 
        {puzzleId}
        placeholder=""
        correctAnswers={["🌙"]}
    />
</PuzzleContainer>

<PuzzleContainer 
title="Cibachrome"
puzzleId="b2_cibachrome"
let:puzzleId
>
<img src="images/b2/cibachrome.jpg" class="w-1/2 mx-auto"/>
<p class="p-3 w-full text-center">In what year was this taken?<br/>
</p>
    <NumberPuzzle 
        {puzzleId}
        prompt=""
        correctAnswers={[1992]}
    />
</PuzzleContainer>


<PuzzleContainer 
title="Bound"
puzzleId="b2_bound"
let:puzzleId
>
<p class="my-2 w-full text-center">What animal was bound by the face in the night forest?<br/>
</p>
    <TextPuzzle 
        {puzzleId}
        placeholder="Name the animal"
        correctAnswers={["ox","bull","an ox","a bull"]}
    />
</PuzzleContainer>


<PuzzleContainer 
title="v6.15"
puzzleId="b2_caos_tome"
let:puzzleId
>
<p class="my-2 w-full text-center"> I seek <b class="font-weight-500">Cao's Tome</b>. <br/> I've located the page by cross-referencing the number from Q1, Introduction of this device... The key is in the dialog box.   <br/>
</p>
    <TextPuzzle 
        {puzzleId}
        prompt="Enter B-1-4: ______"
        placeholder="Identify the gift"
        correctAnswers={["Hip hop","hiphop"]}
    />
</PuzzleContainer>

<PuzzleContainer 
title="Naming of the steps"
puzzleId="b2_stairs"
let:puzzleId
>
<img src="images/b2/stairs.jpg" class="w-1/2 mx-auto"/>
<p class="p-3 w-full text-center">These stairs... I know they have a name somehow...<br/>
</p>
    <TextPuzzle 
        {puzzleId}
        prompt=""
        correctAnswers={["Patricia Ritchie","patricia ritchie stairs"]}
    />
</PuzzleContainer>


<PuzzleContainer 
title="Invisible"
puzzleId="b2_invisible"
let:puzzleId
>
    <p class="my-2 w-full text-center">
    Where emptiness takes form, dual specters dwell.<br/>
    Steel fingers grasp at nothing.<br/>
    How many arms hold the void?<br/>
    </p>

    <NumberPuzzle 
        {puzzleId}
        prompt=""
        correctAnswers={[19]}
    />
</PuzzleContainer>
</div>


</div> 

<style>
    .bg {
        background-image: url('/images/ui/bg-b2.jpg');
        background-repeat: repeat;
        background-size: 50%;
        min-height: 100vh;
    }
</style> 