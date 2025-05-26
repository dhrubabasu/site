<script>
	const talks = [
		{
			href: '/talks/2025/05/16/bips-and-sips-live-ep-1',
			date: new Date(Date.UTC(2025, 4, 16, 18, 15)),
			title: 'bips & sips live: ep 1',
		},
	];
</script>

<div class="prose prose-zinc dark:prose-invert mx-auto">
	<h2>Talks</h2>

	<div>
		{#each talks as { href, title, date } (href)}
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
