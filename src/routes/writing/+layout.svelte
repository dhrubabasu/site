<script lang="ts">
	import ScrollProgress from '$lib/ScrollProgress.svelte';

	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<ScrollProgress />

<article class="prose prose-zinc mx-auto dark:prose-invert">
	{@render children()}

	<hr />

	<p class="text-center">
		See more writing <a href="/writing">here</a>.
	</p>
</article>
