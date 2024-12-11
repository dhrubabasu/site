<script>
	import ScrollProgress from '../../components/ScrollProgress.svelte';
</script>

<ScrollProgress />

<article class="mx-auto prose dark:prose-invert">
	<slot />

	<hr />

	<p class="text-center">
		See more writing <a href="/writing">here</a>.
	</p>
</article>
