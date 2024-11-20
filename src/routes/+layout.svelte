<script>
	import '../app.css';
	import { page } from '$app/stores';

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
</script>

<svelte:head>
	<title>Dhruba Basu</title>
</svelte:head>

<div class="my-8 mx-auto prose">
	<code class="text-lg font-bold after:content-none before:content-none">/dhrubabasu</code>
	<div class="flow-root mt-4">
		<div class="flex flex-wrap items-center -my-2 -mx-1">
			{#each links as { href, name }, idx}
				<a class="mx-1 mt-2 mb-1" class:no-underline={$page.url.pathname == href} {href}>{name}</a>
				{#if idx != links.length - 1}<span class="mt-2 mb-1">•</span>{/if}
			{/each}
		</div>
	</div>
</div>

<slot />
