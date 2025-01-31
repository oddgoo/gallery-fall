<script lang="ts">
    import { resetProgress } from '$lib/stores/progress';

    function handleReset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            resetProgress();
            alert('Progress has been reset!');
        }
    }
</script>

<div class="max-w-3xl mx-auto p-8">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-4xl text-gray-800">Welcome to the Fractured Gallery</h2>
    </div>
    
    <p class="text-lg leading-relaxed mb-6 text-gray-700">The air crackles with static as you approach the museum's entrance. Something is wrong. The curator's obsession with perfection has torn a rift in reality itself, creating unstable pockets of digital entropy throughout the gallery. You're not just a visitor anymore - you're our only hope.</p>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">Each exhibit holds a piece of the corruption, each puzzle a chance to stabilise the anomalies. But be warned: the deeper you venture, the more the boundaries between art and reality begin to blur. Time is running out, and the void grows hungry.</p>
    
    <div class="bg-gray-50 p-8 rounded-lg mt-8">
        <h3 class="text-2xl mb-4 text-gray-800">How to Navigate the Anomaly</h3>
        <ul class="list-disc pl-6 space-y-2">
            <li class="text-gray-700">Trust nothing at first glance - the glitches have altered even the most mundane details</li>
            <li class="text-gray-700">Search for patterns in the corruption - they may hold the key to restoration</li>
            <li class="text-gray-700">All solutions exist within the destabilised space</li>
            <li class="text-gray-700">Document any anomalies you encounter - they might be crucial later</li>
        </ul>
    </div>

    <div class="flex justify-center my-5">
        <button
        on:click={handleReset}
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
        Reset Progress
    </button>
    </div>
</div>
