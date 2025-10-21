import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'Make Exchanges Boring Again - Dhruba Basu';
	const description =
		'The 10/10 crash proved the all-in-one "casino" model is a dangerous conflict of interest. This post argues that the future of crypto finance is unbundled, neutral, and boring.';
	const publishedTime = new Date(Date.UTC(2025, 9, 21, 14));

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
