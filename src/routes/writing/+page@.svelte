<script>
	const writings = [
		{
			href: '/writing/2024/01/02/mev-vs-pfof',
			date: 'January 2, 2024',
			title: 'MEV vs PFOF',
		},
	];
</script>

<svelte:head>
	<title>Writing - Dhruba Basu</title>
</svelte:head>

<div class="mx-auto prose">
	<h2>Writing</h2>

	{#each writings as { href, date, title }, idx}
		<div class:mt-4={idx > 0}>
			<span class="text-sm font-normal text-gray-700">{date}</span>
			<br />
			<a class="text-lg" {href}>{title}</a>
		</div>
	{/each}
</div>
