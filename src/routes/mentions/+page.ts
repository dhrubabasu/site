import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags: MetaTagsProps = {
		title: 'Mentions - Dhruba Basu',
		openGraph: {
			title: 'Mentions - Dhruba Basu',
		},
	};

	return {
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
