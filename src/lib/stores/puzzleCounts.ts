import { derived } from 'svelte/store';
import { progress } from './progress';

// Define sections and their puzzle IDs
export const sections = {
    'introduction': ['intro_age', 'intro_text', 'intro_arrange'],
    'ground': ['g_naked_bestial', 'g_colors', 'g_artspace', 'g_congregation', 'g_dibirdibi', 'g_rusted_song', 'g_corner', 'g_award', 'g_princess'],
    'minus-one': ['b1_tinted_memories', 'b1_giants', 'b1_language', 'b1_destructive_feminine_force', 'b1_povera', 'b1_prepared', 'b1_shapes', 'b1_stars', 'b1_chief_cop', 'b1_dazzling', 'b1_broken_men', 'b1_vessels'],
    'minus-two': ['b2_the_gift', 'b2_congregation','b2_touch', 'b2_stairs', 'b2_cibachrome', 'b2_bound', 'b2_caos_tome'],
    'gardens': ['spirit_connection', 'spirit_threshold', 'spirit_warning', 'spirit_elevation', 'garden_flowers_cosmos', 'garden_window', 'garden_pipe_inscription', 'garden_steps'],
    'the-tank': ['tank_fundamental', 'tank_plan', 'tank_emergency', 'tank_tome', 'tank_pleiades']
};

// Create derived stores for section counts and total counts
export const sectionCounts = derived(progress, ($progress) => {
    const counts = {} as Record<string, { completed: number; total: number }>;
    
    for (const [section, puzzleIds] of Object.entries(sections)) {
        const completed = puzzleIds.filter(id => $progress[id]?.completed).length;
        counts[section] = {
            completed,
            total: puzzleIds.length
        };
    }
    
    return counts;
});

export const totalCounts = derived(sectionCounts, ($sectionCounts) => {
    return Object.values($sectionCounts).reduce(
        (acc, curr) => ({
            completed: acc.completed + curr.completed,
            total: acc.total + curr.total
        }),
        { completed: 0, total: 0 }
    );
});