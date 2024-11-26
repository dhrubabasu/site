<script lang="ts">
	import { onMount } from 'svelte';

	const debounce = <T extends (...args: any[]) => void>(func: T): (() => void) => {
		let timeout: number;
		return function (this: any) {
			const context = this;
			const args = Array.from(arguments);

			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}

			timeout = window.requestAnimationFrame(function () {
				func.apply(context, args);
			});
		};
	};

	let width: string = '0%';

	function watchScroll() {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		width = `${Math.min(Math.max(scrollTop / (scrollHeight - clientHeight), 0), 1) * 100}%`;
	}

	onMount(() => {
		watchScroll();
	});
</script>

<div class="fixed top-0 left-0 z-40 p-0 m-0 w-full bg-transparent">
	<div
		class="top-0 z-50 h-1 bg-gray-900 duration-100 ease-out scroll-progress-bar"
		style:--scroll-progress-width={width}
	></div>
</div>

<svelte:window on:scroll={debounce(watchScroll)} on:load={debounce(watchScroll)} />

<style>
	.scroll-progress-bar {
		width: var(--scroll-progress-width);
		transition-property: width;
	}
</style>
