import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags: MetaTagsProps = {
		title: 'Talks - Dhruba Basu',
		openGraph: {
			title: 'Talks - Dhruba Basu',
		},
	};

	return {
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
