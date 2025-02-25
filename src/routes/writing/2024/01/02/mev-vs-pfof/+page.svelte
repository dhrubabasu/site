<script lang="ts">
	import ExternalLink from '$lib/ExternalLink.svelte';
	import Writing from '$lib/Writing.svelte';

	import janMarketImg from './2024-01-02-coq-inu-markets.jpg';
	import novMarketImg from './2024-11-27-coq-inu-markets.jpg';

	let { data }: { data: { date: Date } } = $props();
</script>

<Writing title="MEV vs PFOF" readingTime={3} date={data.date}>
	<p>
		<em
			>Originally posted to <ExternalLink href="https://x.com/dhrubabasu_/status/1742242040820441196">X</ExternalLink>.
			Minimally edited for website format.</em
		>
	</p>

	<p>
		Maximal Extractable Value (MEV) in crypto is often compared to or equated with Payment for Order Flow (PFOF) in
		TradFi. However, each impacts the unsuspecting trader in very different ways. Why? Regulations.
	</p>

	<p>
		In TradFi, the SEC and FINRA govern how PFOF can be used by trading firms and what they can or cannot do with the
		order flow. FINRA member firms must not let PFOF interfere with their <ExternalLink
			href="https://www.finra.org/rules-guidance/notices/21-23">duty of best execution</ExternalLink
		>.
	</p>

	<p>
		While reasonable people can disagree on whether or not these regulations are sufficiently effective, it is
		indisputable that firms like Citadel or Jump Trading have to comply with these regulations.
	</p>

	<p>
		Traders using Robinhood and Schwab are, in theory, guaranteed that their order will be executed at the most
		favorable terms reasonably available. Although both brokers profit from PFOF, SEC + FINRA <ExternalLink
			href="https://www.sec.gov/files/34-96496-fact-sheet.pdf">certifies</ExternalLink
		> best execution.
	</p>

	<p>
		In crypto, nobody registers with a FINRA-type org as it is a permissionless system. Block proposers have no duty of
		best execution. This enables all kinds of bad behavior like MEV which extract value from unsuspecting traders.
	</p>

	<p>
		jaredfromsubway.eth is perhaps one of the most famous MEV bots created in February 2023. This bot extracted upwards
		of <ExternalLink href="https://www.theblock.co/post/230218/jaredfromsubway-mev-bot">$34 million</ExternalLink> in proceeds
		from unsuspecting traders participating in on-chain trading.
	</p>

	<p>
		With no enforcement of good behavior, jaredfromsubway.eth can extract as much as they please from unsuspecting
		traders. In this way, MEV is <em>more</em> nefarious than PFOF. There is no recourse for victims of MEV, unlike for
		<ExternalLink href="https://www.sec.gov/news/press-release/2020-321">PFOF</ExternalLink>.
	</p>

	<p>
		This poses an existential threat to on-chain trading. Will the next billion users be willing to put up with this
		hidden fee for the sake of being on-chain? Or will they opt to trade on venues that must comply with a regulatory
		body, namely centralized exchanges like Coinbase?
	</p>

	<p>
		Can we enforce good behavior cryptographically or is it necessary for a FINRA-type org to come in? There are
		promising solutions like <ExternalLink href="https://penumbra.zone">Penumbra</ExternalLink> but a solution that does
		not make UX sacrifices is elusive. Until then, centralized exchanges will continue to dominate.
	</p>

	<p>
		CEX domination can even be shown through assets that originate on-chain. $COQ was minted and launched on the Trader
		Joe DEX. KuCoin and others listed the asset following its success. Now, centralized exchanges are trading more $COQ
		on aggregate than decentralized exchanges.
	</p>

	<figure>
		<img src={janMarketImg} alt="List of top trading venues for $COQ on 2024/01/02" />
		<figcaption class="text-center">On January 2 of 2024, Trader Joe was the top trading venue for $COQ.</figcaption>
	</figure>

	<p>
		Will decentralized exchanges be relegated to new asset launches? Once centralized exchanges list the asset, are
		decentralized exchanges destined to lose market share?
	</p>

	<p>
		<em>
			Update (Nov 27, 2024): Trader Joe is no longer the top trading venue for $COQ. Bybit, the new top trading venue
			for $COQ, saw an increase in market share from 8.96% to 20.29%. Trader Joe saw a decrease in market share from 31%
			to 8%. Gate.io (16.15%) and BingX (12.14%) also lead Trader Joe in market share.
		</em>
	</p>

	<figure>
		<img src={novMarketImg} alt="List of top trading venues for $COQ on 2024/11/27" />
		<figcaption class="text-center">On November 27 of 2024, Bybit was the top trading venue for $COQ.</figcaption>
	</figure>
</Writing>
