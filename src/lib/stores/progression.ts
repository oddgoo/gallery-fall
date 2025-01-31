import { derived } from 'svelte/store';
import { sectionCounts, totalCounts } from './puzzleCounts';

export const TESTING_MODE = false;

export const progression = derived(
    [sectionCounts, totalCounts],
    ([$sectionCounts, $totalCounts]) => {
        if (TESTING_MODE) {
            return {
                ground: true,
                'minus-one': true,
                'minus-two': true,
                gardens: true,
                'the-tank': true,
                epilogue: true
            };
        }
        
        return {
            ground: $sectionCounts['introduction']?.completed >= 2,
            'minus-one': $sectionCounts['ground']?.completed >= 4,
            'minus-two': $sectionCounts['minus-one']?.completed >= 5,
            gardens: $sectionCounts['minus-two']?.completed >= 3,
            'the-tank': $totalCounts.completed >= 17,
            epilogue: $sectionCounts['the-tank']?.completed >= 3
        };
    }
); 