<script>
	import ScrollProgress from '$lib/ScrollProgress.svelte';

	let { children } = $props();
</script>

<ScrollProgress />

<article class="prose mx-auto dark:prose-invert">
	{@render children()}

	<hr />

	<p class="text-center">
		See more writing <a href="/writing">here</a>.
	</p>
</article>
