<script lang="ts">
	import ScrollProgress from '$lib/ScrollProgress.svelte';

	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<ScrollProgress />

<article class="prose prose-zinc mx-auto mb-8 dark:prose-invert">
	{@render children()}
</article>
