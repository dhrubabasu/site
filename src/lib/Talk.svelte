<script lang="ts">
	import type { Snippet } from 'svelte';
	let { title, date, children }: { title: string; date: Date; children: Snippet } = $props();
</script>

<h2 class="-mt-4 border-b border-zinc-300 bg-zinc-100 py-4 dark:border-zinc-700 dark:bg-zinc-900">
	{title}
</h2>

<span class="text-sm font-normal tracking-wide text-zinc-700 dark:text-zinc-400"
	>{date.toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})}</span
>

{@render children()}

<br />
