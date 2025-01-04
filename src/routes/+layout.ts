export const prerender = true;

import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const baseMetaTags: MetaTagsProps = {
		title: 'Dhruba Basu',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_US',
			title: 'Dhruba Basu',
		},
		twitter: {
			creator: '@dhrubabasu_',
			site: '@dhrubabasu_',
			cardType: 'summary',
		},
	};

	return {
		baseMetaTags: Object.freeze(baseMetaTags),
	};
};
