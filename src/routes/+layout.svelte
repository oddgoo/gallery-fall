<script lang="ts">
	import '../app.css';
	import { slide } from 'svelte/transition';
	import { sectionCounts, totalCounts } from '$lib/stores/puzzleCounts';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Get the data prop from the page
	export let data;
</script>

<header class="fixed top-0 left-0 right-0 flex items-center p-4 bg-white shadow-md z-[60]">
	<button
		class="relative p-2 z-[110] cursor-pointer border-none bg-transparent"
		on:click={toggleMenu}
		aria-label="Menu"
	>
		<div class="hamburger-lines" class:open={isMenuOpen}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</button>
	<h1 class="text-2xl ml-4 text-gray-800 m-0 flex-grow">The Gallery's Glitch</h1>
	<div class="text-gray-600 mr-4 flex items-center">
		<span class="text-sm font-medium">Progress:</span>
		<span class="ml-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
			{$totalCounts.completed || 0}/{$totalCounts.total || 0}
		</span>
	</div>
</header>

{#if isMenuOpen}
<nav
	class="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-[100] transition-transform transform 
		translate-x-0 duration-300 ease-in-out"
>
	<!-- Close Button Inside Side Menu -->
	<button
		class="absolute top-4 right-4 p-2 cursor-pointer border-none bg-transparent"
		on:click={toggleMenu}
		aria-label="Close Menu"
	>
		<svg
			class="w-6 h-6 text-gray-800"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
		</svg>
	</button>
	<ul class="list-none p-0 m-0 mt-12">
		<li>
			<a
				href="/"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline"
				on:click={toggleMenu}
			>
				Home
			</a>
		</li>
		<li>
			<a
				href="/introduction"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline flex justify-between items-center"
				on:click={toggleMenu}
			>
				<span>Introduction</span>
				<span class="text-sm text-gray-500">{$sectionCounts['introduction']?.completed || 0}/{$sectionCounts['introduction']?.total || 0}</span>
			</a>
		</li>
		<li>
			<a
				href="/ground"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline flex justify-between items-center"
				on:click={toggleMenu}
			>
				<span>Ground Floor</span>
				<span class="text-sm text-gray-500">{$sectionCounts['ground']?.completed || 0}/{$sectionCounts['ground']?.total || 0}</span>
			</a>
		</li>
		<li>
			<a
				href="/minus-one"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline flex justify-between items-center"
				on:click={toggleMenu}
			>
				<span>Minus One</span>
				<span class="text-sm text-gray-500">{$sectionCounts['minus-one']?.completed || 0}/{$sectionCounts['minus-one']?.total || 0}</span>
			</a>
		</li>
		<li>
			<a
				href="/minus-two"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline flex justify-between items-center"
				on:click={toggleMenu}
			>
				<span>Minus Two</span>
				<span class="text-sm text-gray-500">{$sectionCounts['minus-two']?.completed || 0}/{$sectionCounts['minus-two']?.total || 0}</span>
			</a>
		</li>
		<li>
			<a
				href="/gardens"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline flex justify-between items-center"
				on:click={toggleMenu}
			>
				<span>The Gardens</span>
				<span class="text-sm text-gray-500">{$sectionCounts['gardens']?.completed || 0}/{$sectionCounts['gardens']?.total || 0}</span>
			</a>
		</li>
		<li>
			<a
				href="/the-tank"
				class="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors no-underline flex justify-between items-center"
				on:click={toggleMenu}
			>
				<span>The Tank</span>
				<span class="text-sm text-gray-500">{$sectionCounts['the-tank']?.completed || 0}/{$sectionCounts['the-tank']?.total || 0}</span>
			</a>
		</li>
	</ul>
</nav>
{/if}

{#if isMenuOpen}
<div
	class="fixed inset-0 bg-black/30 z-[90] transition-opacity duration-300 ease-in-out"
	on:click={toggleMenu}
></div>
{/if}

<main 
	class="min-h-screen pt-16 {!data?.background ? 'bg-pattern' : ''}" 
	style:background={data?.background}
>
	<slot />
</main>

<style>
	.hamburger-lines {
		width: 25px;
		height: 20px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.3s ease;
	}

	.hamburger-lines span {
		display: block;
		height: 3px;
		width: 100%;
		background: #333;
		transition: all 0.3s ease;
		border-radius: 2px;
	}

	.hamburger-lines.open span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger-lines.open span:nth-child(2) {
		opacity: 0;
		transform: translateX(-20px);
	}

	.hamburger-lines.open span:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	/* Ensure the hamburger button remains clickable */
	button:focus {
		outline: none;
	}

	/* Close Button Styling */
	nav button {
		/* Position inside the nav */
	}

	/* Optional: Hover effect for the close button */
	nav button:hover svg {
		color: #555;
	}

	/* Add background pattern styling */
	:global(.bg-pattern) {
		background-image: url('/images/ui/bg-1.jpg');
		background-repeat: repeat;
		background-size: 50%;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
