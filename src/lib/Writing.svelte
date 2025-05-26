<script lang="ts">
	let selectors = 'h3, h4';
	let headings: Element[] = $state([]);
	let bolded = $state('');
	let open = $state(false);

	function onScroll() {
		const numHeadings = headings.length;
		if (numHeadings == 0) return;

		const { scrollY, innerHeight } = window;
		if (scrollY <= 0) {
			bolded = headings[0].id;
			return;
		}

		if (scrollY + innerHeight >= document.body.scrollHeight) {
			bolded = headings[numHeadings - 1].id;
			return;
		}

		const middle = innerHeight * 0.4;
		let current = headings[0].id;
		for (let i = 0; i < numHeadings; i++) {
			if (middle >= headings[i].getBoundingClientRect().top) {
				current = headings[i].id;
			}
		}
		bolded = current;
	}

	import { onMount } from 'svelte';
	onMount(() => {
		const { hash } = window.location;
		if (hash) {
			const id = hash.substring(1);
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView();
				bolded = id;
			}
		}

		headings = Array.from(document.querySelectorAll(selectors)).filter(({ id }) => id.length > 0);

		onScroll();
	});

	import type { Snippet } from 'svelte';
	let { title, readingTime, date, children }: { title: string; readingTime: number; date: Date; children: Snippet } =
		$props();

	import { debounce } from '$lib/debounce';
</script>

<svelte:window on:scroll={debounce(onScroll)} on:load={debounce(onScroll)} />

{#snippet toc(headings: Element[])}
	<span class="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100"> contents </span>
	{#each headings as { id, nodeName, textContent } (id)}
		<p class:ml-4={nodeName == selectors.slice(-2).toUpperCase()}>
			<a
				onclick={() => (open = false)}
				href="#{id}"
				class="m-0 block transform border-l-2 border-transparent p-0 pl-2 text-sm no-underline transition-colors {id ==
				bolded
					? 'border-zinc-800 dark:border-zinc-200'
					: ''}">{textContent}</a
			>
		</p>
	{/each}
{/snippet}

{#if headings.length > 0}
	<div class="fixed inset-y-0 right-0 hidden max-w-56 flex-none pr-8 xl:block print:hidden">
		<div class="top-4 flex max-h-screen flex-col justify-between overflow-y-auto pb-6 pt-10">
			<div class="mb-8 space-y-4">
				{@render toc(headings)}
			</div>
		</div>
	</div>
{/if}

<h2 class="sticky top-0 z-10 -mt-4 border-b border-zinc-300 bg-zinc-100 py-4 dark:border-zinc-700 dark:bg-zinc-900">
	<div class="flex items-center justify-between">
		<span class="shrink">{title}</span>
		{#if headings.length > 0}
			<button
				class="shrink-0 cursor-pointer rounded border border-zinc-300 p-1 hover:bg-zinc-200 xl:hidden dark:border-zinc-700 dark:hover:bg-zinc-800 print:hidden"
				onclick={() => (open = !open)}
				aria-label="Open table of contents."
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
				</svg>
			</button>
		{/if}
	</div>

	{#if open}
		<div class="mt-1 space-y-2 pt-2 xl:hidden print:hidden">
			{@render toc(headings)}
		</div>
	{/if}
</h2>

<span class="text-sm font-normal tracking-wide text-zinc-700 dark:text-zinc-400"
	>{readingTime} min read • {date.toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})}</span
>

{@render children()}
