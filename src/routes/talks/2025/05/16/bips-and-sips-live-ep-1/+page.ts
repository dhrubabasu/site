import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const title = 'bips & sips live: ep 1 - Dhruba Basu';
	const description =
		"Dhruba joins Eshita and Khushi on bips & sips to discuss why decentralization isn't the goal. They get into tradeoffs, power, and when inclusion latency > execution latency.";
	const publishedTime = new Date(Date.UTC(2025, 4, 16, 18, 15));

	const pageMetaTags: MetaTagsProps = {
		title,
		description,
		openGraph: {
			type: 'website',
			title,
			description,
		},
	};

	return {
		date: publishedTime,
		pageMetaTags: Object.freeze(pageMetaTags),
	};
};
