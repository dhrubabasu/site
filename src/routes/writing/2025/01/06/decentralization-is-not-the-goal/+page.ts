import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'Decentralization is not the goal - Dhruba Basu';
	const description = 'What does "decentralization" mean and is it always a good thing?';
	const publishedTime = new Date(Date.UTC(2025, 0, 6, 16));

	const pageMetaTags: MetaTagsProps = {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			article: {
				publishedTime: publishedTime.toISOString(),
				modifiedTime: publishedTime.toISOString(),
				authors: ['https://x.com/dhrubabasu_'],
			},
		},
	};

	return {
		date: publishedTime,
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
