import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'MEV vs PFOF - Dhruba Basu';
	const description = 'A comparison betweeen MEV in crypto and PFOF in traditional finance.';
	const publishedTime = new Date(Date.UTC(2024, 0, 2, 8));

	const pageMetaTags: MetaTagsProps = {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			article: {
				publishedTime: publishedTime.toISOString(),
				modifiedTime: new Date(Date.UTC(2024, 10, 27, 8)).toISOString(),
				authors: ['https://x.com/dhrubabasu_'],
			},
		},
	};

	return {
		date: publishedTime,
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
