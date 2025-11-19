export const prerender = true;

import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const baseMetaTags: MetaTagsProps = {
		title: 'Dhruba Basu',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			url: new URL(url.pathname, url.origin).href,
			type: 'website',
			title: 'Dhruba Basu',
			locale: 'en_US',
		},
		twitter: {
			cardType: 'summary',
			site: '@dhrubabasu',
			creator: '@dhrubabasu',
		},
	};

	return {
		baseMetaTags: Object.freeze(baseMetaTags),
	};
};
