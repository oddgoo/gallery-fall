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
        <h2 class="text-4xl text-gray-800">Welcome to the Museum</h2>
    </div>
    
    <p class="text-lg leading-relaxed mb-6 text-gray-700">You find yourself at the entrance of a mysterious museum. Your mission, should you choose to accept it, is to uncover the secrets hidden within these walls.</p>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">Remember perspective.</p>
    
    <div class="bg-gray-50 p-8 rounded-lg mt-8">
        <h3 class="text-2xl mb-4 text-gray-800">How to Play</h3>
        <ul class="list-disc pl-6 space-y-2">
            <li class="text-gray-700">Explore each area carefully. Everything can be in the puzzles, not just the artworks</li>
            <li class="text-gray-700">Look for hidden clues and patterns</li>
            <li class="text-gray-700">All the information is within the gallery premises</li>
            <li class="text-gray-700">Take notes of anything suspicious</li>
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
