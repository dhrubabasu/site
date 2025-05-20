<script lang="ts">
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
			href: '/talks',
			name: 'Talks',
		},
		{
			href: '/mentions',
			name: 'Mentions',
		},
	];

	import type { Snippet } from 'svelte';
	let { data, children }: { data: { baseMetaTags: MetaTagsProps }; children: Snippet } = $props();

	import '../app.css';

	import { page } from '$app/state';
	import { MetaTags, deepMerge, type MetaTagsProps } from 'svelte-meta-tags';
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	import DarkModeSelector from '$lib/DarkModeSelector.svelte';
</script>

<MetaTags {...metaTags} />

<div class="prose prose-zinc mx-auto my-8 dark:prose-invert">
	<div class="flex items-center justify-between">
		<code class="text-lg font-bold before:content-none after:content-none">/dhrubabasu</code>
		<DarkModeSelector />
	</div>
	<div class="mt-4 flow-root">
		<div class="-mx-1 -my-2 flex flex-wrap items-center">
			{#each links as { href, name }, idx}
				<a class="mx-1 mb-1 mt-2" class:no-underline={page.url.pathname == href} {href}>{name}</a>
				{#if idx != links.length - 1}<span class="mb-1 mt-2">•</span>{/if}
			{/each}
		</div>
	</div>
</div>

{@render children()}
