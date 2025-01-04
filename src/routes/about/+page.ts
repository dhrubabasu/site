import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags: MetaTagsProps = {
		title: 'About - Dhruba Basu',
		openGraph: {
			title: 'About - Dhruba Basu',
		},
	};

	return {
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
