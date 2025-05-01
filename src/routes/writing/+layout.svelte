<script lang="ts">
	import ScrollProgress from '$lib/ScrollProgress.svelte';

	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<ScrollProgress />

<article class="prose prose-zinc dark:prose-invert mx-auto mb-8">
	{@render children()}
</article>
