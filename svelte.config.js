import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true,
	},
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			origin: 'https://dhruba.xyz',
		},
	},
};

export default config;
