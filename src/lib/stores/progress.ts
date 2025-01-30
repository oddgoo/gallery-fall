import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Set this to true to disable progress persistence (for testing)
export const TESTING_MODE = false;

interface PuzzleProgress {
    [puzzleId: string]: {
        completed: boolean;
        completedAt: string | null;
    };
}

// Initialize from localStorage if available and not in testing mode
const storedProgress = (browser && !TESTING_MODE) ? localStorage.getItem('puzzleProgress') : null;
const initialProgress: PuzzleProgress = storedProgress ? JSON.parse(storedProgress) : {};

const progress = writable<PuzzleProgress>(initialProgress);

// Subscribe to changes and update localStorage if not in testing mode
if (browser && !TESTING_MODE) {
    progress.subscribe(value => {
        localStorage.setItem('puzzleProgress', JSON.stringify(value));
    });
}

export function markPuzzleComplete(puzzleId: string) {
    progress.update(curr => ({
        ...curr,
        [puzzleId]: {
            completed: true,
            completedAt: new Date().toISOString()
        }
    }));
}

export function isPuzzleComplete(puzzleId: string) {
    return derived(progress, $progress => $progress[puzzleId]?.completed ?? false);
}

// Helper to reset all progress (useful for testing)
export function resetProgress() {
    progress.set({});
    if (browser && !TESTING_MODE) {
        localStorage.removeItem('puzzleProgress');
    }
}

export { progress }; 