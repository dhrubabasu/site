import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'Onchain CLOBs: The Endgame Exchange? - Dhruba Basu';
	const description =
		'An analysis of speed, privacy, and liquidity reveals what the true endgame exchange must look like.';
	const publishedTime = new Date(Date.UTC(2025, 5, 26, 18));

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
