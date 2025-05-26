<script>
	import { onMount } from 'svelte';
	import { debounce } from './debounce';

	let width = $state('0%');

	function onScroll() {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		width = `${Math.min(Math.max(scrollTop / (scrollHeight - clientHeight), 0), 1) * 100}%`;
	}

	onMount(onScroll);
</script>

<div class="fixed top-0 left-0 z-40 m-0 w-full bg-transparent p-0">
	<div style="width: {width}" class="z-50 h-1 bg-zinc-900 transition-[width] ease-out dark:bg-zinc-100"></div>
</div>

<svelte:window on:scroll={debounce(onScroll)} on:load={debounce(onScroll)} />
