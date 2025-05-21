<script lang="ts">
	let { type, text }: { type: 'h3' | 'h4'; text: string } = $props();

	import slugify from 'slugify';
	const slug = slugify(text, { lower: true });
</script>

<svelte:element this={type} id={slug} class="group flex scroll-mt-20 justify-between">
	{text}
	<a
		href="#{slug}"
		class="after:hash shrink-0 pl-1 text-zinc-500 no-underline opacity-100 group-hover:opacity-100 md:absolute md:-ml-5 md:pr-2 md:pl-0 md:opacity-0 dark:text-zinc-400"
		aria-label="Anchor"
	></a>
</svelte:element>
