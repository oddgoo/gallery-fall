<script lang="ts">
    import NumberPuzzle from '$lib/NumberPuzzle.svelte';
    import TextPuzzle from '$lib/TextPuzzle.svelte';
    import ArrangePuzzle from '$lib/ArrangePuzzle.svelte';
    import PuzzleContainer from '$lib/PuzzleContainer.svelte';
</script>

<div class="max-w-3xl mx-auto p-8">
    <h2 class="text-4xl mb-6 text-gray-800">Minus Two</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">Skirting the depths.</p>
    

<PuzzleContainer 
title="The gift"
>
<p class="my-2 w-full text-center">I took the gift from Buddha's open hands<br/>
</p>
    <TextPuzzle 
        placeholder="What was the gift?"
        correctAnswers={["a stone","stone"]}
        id="b2_the_gift"
    />
</PuzzleContainer>

<PuzzleContainer 
title="Minus Two Arrangement"
description=""
>
    <ArrangePuzzle 
        prompt=""
        imageUrl="images/b2/b2_arrangement.png"
        rows={1}
        columns={8}
        id="b2_congregation"
    />
</PuzzleContainer>

<PuzzleContainer 
title="Pause, Turn, Touch, Reach"
>
<p class="my-2 w-full text-center">In darkness, manipulate the beams into 4 segments and send evidence of your deed to the hosts of keys. <br/>
    They will grant you the key to this lock<br/>
</p>
    <TextPuzzle 
        placeholder=""
        correctAnswers={["🌙"]}
        id="b2_touch"
    />
</PuzzleContainer>


<PuzzleContainer 
title="Bound"
>
<p class="my-2 w-full text-center">What animal was bound by the face in the night forest?<br/>
</p>
    <TextPuzzle 
        placeholder="Name the animal"
        correctAnswers={["ox","bull","an ox","a bull"]}
        id="b2_bound"
    />
</PuzzleContainer>


<PuzzleContainer 
title="v6.15"
>
<p class="my-2 w-full text-center"> I seek <b class="font-weight-500">Cao's Tome</b>. <br/> I've located the page by cross-referencing the number from Q1, Introduction of this device... The key is in the dialog box.   <br/>
</p>
    <TextPuzzle 
        prompt="Enter B-1-4: ______"
        placeholder="Identify the gift"
        correctAnswers={["Hip hop","hiphop"]}
        id="b2_caos_tome"
    />
</PuzzleContainer>


<PuzzleContainer 
title="Invisible"
>

    <p class="my-2 w-full text-center">
    Where emptiness takes form, dual specters dwell.<br/>
    Steel fingers grasp at nothing.<br/>
    How many arms hold the void?<br/>
    </p>

    <NumberPuzzle 
        prompt=""
        correctAnswers={[19]}
        id="b2_invisible"
    />
</PuzzleContainer>



</div> 