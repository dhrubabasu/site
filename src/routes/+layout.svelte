<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	let { children } = $props();

	const links = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/about',
			name: 'About',
		},
		{
			href: '/writing',
			name: 'Writing',
		},
		{
			href: '/mentions',
			name: 'Mentions',
		},
	];

	type Mode = 'light' | 'dark' | 'system';
	const modePathMap = {
		// heroicons sun
		light:
			'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z',

		// heroicons moon
		dark: 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z',

		// heroicons computer-desktop
		system:
			'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25',
	};

	let currentMode = $state('system');
	let isDark = $state(false);
	let openDarkModeDropdown = $state(false);
	let isHoveringOverDropdown = $state(false);

	function toggleDarkMode(mode: Mode) {
		if (mode === 'system') {
			localStorage.removeItem('theme');
		} else {
			localStorage.theme = mode;
		}

		document.documentElement.classList.toggle(
			'dark',
			localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
		);

		currentMode = mode;
		isDark = document.documentElement.classList.contains('dark');
		openDarkModeDropdown = false;
		isHoveringOverDropdown = false;
	}

	onMount(() => {
		currentMode = localStorage.theme ? localStorage.theme : 'system';
		isDark = document.documentElement.classList.contains('dark');
	});
</script>

<svelte:head>
	<title>Dhruba Basu</title>
</svelte:head>

<div class="my-8 mx-auto prose dark:prose-invert">
	<div class="flex justify-between items-center">
		<code class="text-lg font-bold after:content-none before:content-none">/dhrubabasu</code>
		<div class="inline-block relative">
			<button
				onclick={() => {
					openDarkModeDropdown = !openDarkModeDropdown;
					isHoveringOverDropdown = false;
				}}
				class="flex justify-center items-center"
				id="dark-mode-menu-button"
				aria-label="dark-mode-menu-button"
				aria-expanded={openDarkModeDropdown}
				aria-haspopup="true"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width={(isDark && currentMode == 'dark') || (!isDark && currentMode == 'light') ? 2.5 : 1.5}
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d={isDark ? modePathMap['dark'] : modePathMap['light']}
					/>
				</svg>
			</button>
			{#if openDarkModeDropdown}
				<div
					class="absolute right-0 z-10 mt-2 rounded-md ring-1 shadow-lg origin-top-right focus:outline-none bg-zinc-100 ring-zinc-800/5 dark:ring-zinc-400/5 dark:bg-zinc-900"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="dark-mode-menu-button"
					tabindex="-1"
					onfocus={() => {
						isHoveringOverDropdown = true;
					}}
					onmouseover={() => {
						isHoveringOverDropdown = true;
					}}
				>
					<div class="py-1" role="none">
						{#each Object.entries(modePathMap) as [mode, d]}
							<button
								onclick={() => toggleDarkMode(mode as Mode)}
								class="inline-block flex gap-2 items-center py-1 px-2 w-full hover:bg-zinc-200 hover:dark:bg-zinc-800 hover:outline-none {!isHoveringOverDropdown &&
									currentMode == mode &&
									'bg-zinc-200 dark:bg-zinc-800'}"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path stroke-linecap="round" stroke-linejoin="round" {d} />
								</svg>
								{mode}
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="flow-root mt-4">
		<div class="flex flex-wrap items-center -my-2 -mx-1">
			{#each links as { href, name }, idx}
				<a class="mx-1 mt-2 mb-1" class:no-underline={page.url.pathname == href} {href}>{name}</a>
				{#if idx != links.length - 1}<span class="mt-2 mb-1">•</span>{/if}
			{/each}
		</div>
	</div>
</div>

{@render children()}
