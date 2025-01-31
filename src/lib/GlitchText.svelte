<script lang="ts">
    import { onMount } from 'svelte';

    export let text: string;
    export let className = ''; // Allow additional classes to be passed

    let glitchIntervals: number[] = [];
    
    onMount(() => {
        const chars = document.querySelectorAll('.glitch-char');
        chars.forEach((char) => {
            glitchIntervals.push(
                setInterval(() => {
                    const randomEffect = Math.floor(Math.random() * 4);
                    const element = char as HTMLElement;
                    
                    // Reset previous effects
                    element.style.color = '';
                    element.style.fontStyle = '';
                    element.style.fontWeight = '';
                    
                    switch(randomEffect) {
                        case 0:
                            element.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
                            break;
                        case 1:
                            element.style.fontStyle = 'italic';
                            break;
                        case 2:
                            element.style.fontWeight = '900';
                            break;
                        case 3:
                            element.style.color = '#ff0000';
                            element.style.fontWeight = '700';
                            break;
                    }
                    
                    // Random timing between 100ms and 2000ms
                    setTimeout(() => {
                        element.style.color = '';
                        element.style.fontStyle = '';
                        element.style.fontWeight = '';
                    }, Math.random() * 900 + 100);
                }, Math.random() * 1000 + 1000)
            );
        });

        return () => {
            glitchIntervals.forEach(interval => clearInterval(interval));
        };
    });
</script>

<span class="glitch-text font-mono {className}">
    {#each text.split('') as char}
        <span class="glitch-char inline-block transition-all duration-100">{char}</span>
    {/each}
</span> 