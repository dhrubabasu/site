<script lang="ts">
	const modes = ['light', 'dark', 'system'] as const;

	let openDarkModeDropdown = $state(false);

	import { setMode } from 'mode-watcher';
</script>

<div class="relative inline-block">
	<button
		onclick={() => {
			openDarkModeDropdown = !openDarkModeDropdown;
		}}
		class="flex cursor-pointer items-center justify-center"
		id="dark-mode-menu-button"
		aria-label="dark-mode-menu-button"
		aria-expanded={openDarkModeDropdown}
		aria-haspopup="true"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			class="size-6 fill-none stroke-current"
		>
			<path
				class="inline dark:hidden"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
			/>
			<path
				class="hidden dark:inline"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
			/>
		</svg>
	</button>
	{#if openDarkModeDropdown}
		<div
			class="absolute right-0 z-30 mt-2 origin-top-right rounded-md bg-zinc-100 shadow-lg ring-1 ring-zinc-800/5 focus:outline-hidden dark:bg-zinc-900 dark:ring-zinc-400/5"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="dark-mode-menu-button"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				{#each modes as mode (mode)}
					<button
						onclick={() => {
							setMode(mode);

							openDarkModeDropdown = false;
						}}
						class="flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 capitalize hover:bg-zinc-200 hover:outline-hidden dark:hover:bg-zinc-800"
					>
						{mode}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
