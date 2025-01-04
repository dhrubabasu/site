import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'MEV vs PFOF - Dhruba Basu';
	const description = 'A comparison betweeen MEV in crypto and PFOF in traditional finance.';

	const pageMetaTags: MetaTagsProps = {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			article: {
				publishedTime: '2024-01-02T00:00:00Z',
				modifiedTime: '2024-11-27T00:00:00Z',
				authors: ['https://x.com/dhrubabasu_'],
			},
		},
		twitter: {
			title,
			description,
		},
	};

	return {
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
