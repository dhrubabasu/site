import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags: MetaTagsProps = {
		title: 'Dhruba Basu',
		openGraph: {
			type: 'website',
			title: 'Dhruba Basu',
		},
	};

	return {
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
