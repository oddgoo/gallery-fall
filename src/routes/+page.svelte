<script lang="ts">
    import { resetProgress } from '$lib/stores/progress';
    import GlitchText from '$lib/GlitchText.svelte';

    function handleReset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            resetProgress();
            alert('Progress has been reset!');
        }
    }
</script>

<div class="max-w-3xl mx-auto p-8">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-4xl text-gray-800">Welcome to the <GlitchText text="Fractured" /> Gallery</h2>
    </div>
    
    <p class="text-lg leading-relaxed mb-6 text-gray-700">The air crackles with static as you approach the museum's entrance. Something is wrong. The curator's obsession with perfection has torn a rift in reality itself, creating critical pockets of <GlitchText text="entropy" /> throughout the gallery. <br/>
        Time is running out, and the void grows hungry...
    </p>
    

    <div class="flex justify-center my-5">
        <button
        on:click={handleReset}
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
        Reset Progress
    </button>
    </div>
</div>
