import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags: MetaTagsProps = {
		title: 'Writing - Dhruba Basu',
		openGraph: {
			title: 'Writing - Dhruba Basu',
		},
	};

	return {
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
