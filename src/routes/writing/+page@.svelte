<script>
	const writings = [
		{
			href: '/writing/2024/01/02/mev-vs-pfof',
			date: new Date(Date.UTC(2024, 0, 2, 8)),
			title: 'MEV vs PFOF',
		},
	];
</script>

<svelte:head>
	<title>Writing - Dhruba Basu</title>
</svelte:head>

<div class="mx-auto prose dark:prose-invert">
	<h2>Writing</h2>

	<div>
		{#each writings as { href, title, date }}
			<div
				class="flex flex-col justify-between border-zinc-300 py-3 md:flex-row md:items-center md:py-2 dark:border-zinc-700 [&:first-child]:pt-0 [&:not(:last-child)]:border-b"
			>
				<a class="text-lg font-semibold" {href}>{title}</a>
				<div class="text-sm tracking-wide font-left min-w-32 text-zinc-600 dark:text-zinc-400">
					{date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
				</div>
			</div>
		{/each}
	</div>
</div>
