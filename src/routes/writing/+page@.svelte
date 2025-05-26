<script>
	const writings = [
		{
			href: '/writing/2025/01/06/decentralization-is-not-the-goal',
			date: new Date(Date.UTC(2025, 0, 6, 16)),
			title: 'Decentralization is not the goal',
		},
		{
			href: '/writing/2024/01/02/mev-vs-pfof',
			date: new Date(Date.UTC(2024, 0, 2, 8)),
			title: 'MEV vs PFOF',
		},
	];
</script>

<div class="prose prose-zinc dark:prose-invert mx-auto">
	<h2>Writing</h2>

	<div>
		{#each writings as { href, title, date } (href)}
			<div
				class="flex flex-col justify-between border-zinc-300 py-3 not-last:border-b first:pt-0 md:flex-row md:items-center md:py-2 dark:border-zinc-700"
			>
				<a class="text-lg font-semibold" {href}>{title}</a>
				<div class="font-left min-w-32 text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
					{date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
				</div>
			</div>
		{/each}
	</div>
</div>
