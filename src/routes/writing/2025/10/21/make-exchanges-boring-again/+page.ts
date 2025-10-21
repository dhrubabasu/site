import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'Make Exchanges Boring Again - Dhruba Basu';
	const description =
		'This article argues that the all-in-one crypto exchange model is an inherent architectural flaw that accelerates market crashes, and that the only solution is to unbundle services into neutral, non-conflicted infrastructure.';
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
