<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import Writing from '$lib/Writing.svelte';
	import ExternalLink from '$lib/ExternalLink.svelte';

	import src from './multiple-concurrent-leaders.jpg';

	let { data }: { data: { date: Date } } = $props();
</script>

<Writing title="Decentralization is not the goal" readingTime={10} date={data.date}>
	<p>
		<em
			>Special thanks to <ExternalLink href="https://x.com/soumyab8">Soumya Basu</ExternalLink>,
			<ExternalLink href="https://x.com/chadfowler">Chad Fowler</ExternalLink>,
			<ExternalLink href="https://x.com/0xFunk">Benjamin Funk</ExternalLink>,
			<ExternalLink href="https://x.com/_patrickogrady">Patrick O'Grady</ExternalLink> and
			<ExternalLink href="https://x.com/MylesOneil">Myles O'Neil</ExternalLink> for feedback and review.</em
		>
	</p>

	<p>
		<em>The opinions expressed in this post are my own and do not necessarily reflect the views of the reviewers.</em>
	</p>

	<Heading type="h3" text="Introduction" />

	<p>
		Speak to any crypto person and you'll almost certainly hear "decentralization" touted as a major benefit. But what
		does it mean and is it always a good thing?
	</p>

	<p>
		Decentralization is rarely defined in an <em>objective</em> way. Even Merriam-Webster only offers a vague definition
	</p>

	<p>: the dispersion or distribution of functions and powers</p>

	<p>
		By dealing in the <em>subjective</em>, we're cursed to engage on beliefs as opposed to data. Look no further than
		the decade-long debate amongst crypto enthusiasts and academics about whether certain networks are "decentralized
		enough":
	</p>

	<ul>
		<li>
			<strong>2014</strong>: Bitcoin is centralized because GHash.io's mining pool controlled <ExternalLink
				href="https://www.theguardian.com/technology/2014/jun/16/bitcoin-currency-destroyed-51-attack-ghash-io"
				>&gt;51%</ExternalLink
			> of Bitcoin's hashpower
		</li>
		<li>
			<strong>2017</strong>: Balaji offers the <ExternalLink
				href="https://news.earn.com/quantifying-decentralization-e39db233c28e"
				>minimum Nakamoto coefficient</ExternalLink
			> as a first step to quantify decentralization
		</li>
		<li>
			<strong>2018</strong>: Cornell researchers use <ExternalLink href="https://arxiv.org/pdf/1801.03998"
				>network connectivity</ExternalLink
			> to quantify decentralization
		</li>
		<li>
			<strong>2022</strong>: Solana is centralized because you need <ExternalLink
				href="https://docs.anza.xyz/operations/requirements#hardware-recommendations">beefy</ExternalLink
			> nodes to run a validator
		</li>
		<li>
			<strong>2023</strong>: Ethereum is centralized because Lido's liquid staking approached <ExternalLink
				href="https://www.trustnodes.com/2023/08/27/lido-closes-in-on-33-of-the-ethereum-network">33%</ExternalLink
			> of the total staked ETH
		</li>
		<li>
			<strong>2023</strong>: L2s are centralized because they use <ExternalLink
				href="https://blockworks.co/news/rollup-sequencers-are-centralized">centralized sequencers</ExternalLink
			>
		</li>
		<li>
			<strong>[Insert any year]</strong>: [Insert your favorite network] is centralized because most validators are on
			AWS
		</li>
	</ul>

	<p>
		These arguments often get lost in the technical details of the network, missing the point of decentralization. The
		true measure of decentralization lies in the <strong>power</strong> that centralized intermediaries have in a system.
	</p>

	<Heading type="h3" text="Decentralization Dimensions" />

	<p>Consider two systems:</p>

	<ol>
		<li>
			<strong>A</strong>: A permissionless system with four validators where no single party can influence the system
		</li>
		<li>
			<strong>B</strong>: A permissionless system with a million validators, but where one party can influence which
			apps are allowed to operate on the system
		</li>
	</ol>

	<p>
		How should we evaluate which system is better? Systems, like the ones above, can be centralized in some aspects and
		decentralized in others. We can understand the differences by examining different <strong>dimensions</strong>, such
		as:
	</p>

	<ul>
		<li><strong>User</strong>: Who can use the system?</li>
		<li><strong>Operator</strong>: Who can enforce the rules of the system?</li>
		<li><strong>Power</strong>: Who can determine the rules of the system?</li>
	</ul>

	<p>Applying these dimensions to the two systems, we see they rank differently:</p>

	<ul>
		<li>
			<strong>User</strong>: A <strong>&equals;</strong> B. Both A and B are permissionless, meaning anyone can use them.
		</li>
		<li><strong>Operator</strong>: A <strong>&lt;</strong> B. A has fewer validators/enforcers than B.</li>
		<li>
			<strong>Power</strong>: A <strong>&gt;</strong> B. A has no central authority, while B is controlled by a single party.
		</li>
	</ul>

	<p>
		Despite having fewer validators than B, A beats B in the power dimension because no single party can control
		application operation. Increasing the number of A's validators at the cost of centralizing power in a single party
		would be a bad application of decentralization since it undermines A's power distribution.
	</p>

	<p>
		Centralizing certain functions, like operator control, may prevent any party from influencing the system, creating a
		better environment for users. While it may seem counterintuitive, in some cases, we should <strong>tolerate</strong>
		centralization when it leads to a better distribution of power.
	</p>

	<Heading type="h3" text="Wild Goose Chase?" />

	<p>
		There's a trend amongst crypto enthusiasts to bring everything on-chain. While this is an admirable ideal, it
		clashes with the practical drawbacks of decentralized systems that preclude this on-chain utopia. This can be seen
		through two growing narratives: Nasdaq and Stablecoins.
	</p>

	<Heading type="h4" text="Decentralized Nasdaq: Censorship Resistance vs Execution Latency" />

	<p>
		Solana co-founder Anatoly Yakovenko has a clear vision for the network: decentralized Nasdaq, a global,
		permissionless price discovery engine capable of competing with centralized exchanges.
	</p>

	<p>
		To analyze the viability of this vision, it's important to first understand price discovery in relation to
		transaction latency. Generally, there are two types of transaction latency:
	</p>

	<ol>
		<li>
			<strong>Inclusion</strong>: The time from when a transaction is created to when it is guaranteed that it will
			<em>eventually</em> be executed
		</li>
		<li><strong>Execution</strong>: The time from when a transaction is created to when it is actually executed</li>
	</ol>

	<p>
		Price discovery is defined by <ExternalLink href="https://doi.org/10.2307/2329348">Hasbrouck (1995)</ExternalLink> as
		the process by which new information is incorporated into an asset's price. Since the updated price is only known after
		a transaction is executed, the efficiency of the price discovery process is tied to <em>execution</em> latency, not
		<em>inclusion</em> latency. In essence, execution latency is equivalent to the latency of a price discovery engine.
	</p>

	<p>
		Reviewing the market microstructure literature tells us that a price discovery engine with lower latency is superior
		to one with higher latency:
	</p>

	<ul>
		<li>
			<ExternalLink href="https://dx.doi.org/10.2139/ssrn.1695460">Hasbrouck and Saar (2013)</ExternalLink> found that "increased
			low-latency activity improves traditional market quality measures—decreasing spreads, increasing displayed depth in
			the limit order book, and lowering short-term volatility"
		</li>
		<li>
			<ExternalLink href="https://dx.doi.org/10.2139/ssrn.2236201">Jones (2013)</ExternalLink>; <ExternalLink
				href="https://dx.doi.org/10.2139/ssrn.2341037">Brogaard, Hendershott, and Riordan (2013)</ExternalLink
			>; <ExternalLink href="https://dx.doi.org/10.2139/ssrn.2122716">Carrion (2013)</ExternalLink> all found that HFT market
			making enhances market quality by reducing spreads and enhancing informational efficiency
		</li>
	</ul>

	<p>With that in mind, let's take a look at how Solana aims to be competitive:</p>

	<figure>
		<ExternalLink href="https://x.com/aeyakovenko/status/1840468650467484133">
			<img {src} alt="Anatoly describing Multiple Concurrent Leaders" fetchpriority="high" loading="eager" />
		</ExternalLink>
	</figure>

	<p>Multiple Concurrent Leaders/Proposers (often stylized as MCP) is the core idea.</p>

	<p>
		Anatoly's tweet is partially correct. MCP can greatly improve Solana's <em>inclusion</em> latency, but it
		<strong>cannot</strong> lower Solana's <em>execution</em> latency. Broadly speaking, permissionless blockchains
		emphasize <strong>censorship resistance</strong> through a decentralized validator set, where a majority of the
		validators must agree on transaction ordering to protect against <ExternalLink
			href="https://en.wikipedia.org/wiki/Byzantine_fault">Byzantine faults</ExternalLink
		>. This collaborative ordering process comes at the cost of higher execution latency, making permissionless
		blockchains suboptimal for tasks like efficient price discovery which benefit from low-latency execution.
	</p>

	<p>
		As we learned above, a price discovery engine with lower latency is superior to one with higher latency. MCP
		therefore falls short of making Solana's execution latency competitive with the execution latency of centralized
		exchanges.
	</p>

	<p>
		Even though Solana cannot compete with centralized exchanges on execution latency, Solana wins in power
		distribution. This characteristic is especially valuable in the broader context of open financial systems. It
		enables Solana to dominate financial functions like asset issuance, not price discovery.
	</p>

	<Heading type="h4" text="Decentralized Stablecoins: Trust is hard to come by" />

	<p>
		Stablecoins are often hailed as the "killer use case" for cryptocurrency. They are now a <ExternalLink
			href="https://www.theblock.co/data/stablecoins/usd-pegged/total-stablecoin-supply">$210B+</ExternalLink
		> market with an accelerating arms race amongst institutional players to issue them. Stripe acquired Bridge for <ExternalLink
			href="https://fortune.com/crypto/2024/10/22/stripe-announces-1-1-billion-acquisition-of-stablecoin-start-up-bridge"
			>$1.1B</ExternalLink
		> to advance stablecoin adoption. Prominent firms like Robinhood, Kraken, and Anchorage Digital launched the <ExternalLink
			href="https://www.reuters.com/technology/crypto-firms-including-robinhood-kraken-launch-global-stablecoin-network-2024-11-04"
			>Global Dollar Network</ExternalLink
		>. Even Donald Trump's crypto project <ExternalLink
			href="https://fortune.com/crypto/2024/10/28/trumps-crypto-project-plans-to-launch-its-own-u-s-dollar-backed-stablecoin-report"
			>plans</ExternalLink
		> to launch its own stablecoin. All of these are centralized stablecoins.
	</p>

	<p>
		Assuming decentralized stablecoins like DAI could technically function, would most people actually trust them over
		centralized stablecoins? Unlike USDC, where Circle can recover lost or incorrectly transferred funds, decentralized
		stablecoin transfers are irreversible, making them far riskier for the average user. Because of this, centralized
		stablecoins will likely remain the dominant form of currency movement. People feel safer knowing they have someone
		to contact (or even sue) when problems arise.
	</p>

	<p>
		This reality means that any amount of decentralization in a blockchain is largely meaningless for centralized
		stablecoins. Whether USDC is issued on a blockchain with a billion solo stakers or a blockchain with a single
		centralized sequencer, it's ultimately secured by Circle. If Circle chooses not to honor your USDC on a given
		network, you lose access to those dollars.
	</p>

	<p>
		To take it further: When Ethereum undergoes a hard fork, the canonical chain is determined <em>only</em> by centralized
		entities, not by any solo staker. This is not a hypothetical scenario. After the DAO hack in 2016, the Ethereum community
		was split between a new chain reversing the hack and the original chain which did not.
	</p>

	<p>
		Ethereum co-founder Vitalik Buterin supported the new chain. Coinbase, Kraken, and Bitfinex all supported the new
		chain as the canonical chain. The new chain then came to be known as Ethereum (ETH) while the original chain is
		referred to as Ethereum Classic (ETC). A good summary of the entire history can be found <ExternalLink
			href="https://www.gemini.com/cryptopedia/ethereum-classic-etc-vs-eth">here</ExternalLink
		>.
	</p>

	<p>
		Since centralized entities control liquidity and accessibility for a large number of users, they effectively
		determine the practical value of each chain. If Ethereum forked again today, whichever fork Circle honors the USDC
		on will be the canonical chain.
	</p>

	<Heading type="h3" text="A Practical Approach" />

	<p>
		While decentralization isn't suitable for every use case, we've collectively done an incredible amount of work to
		use it in ways that empower individuals. It's important to recognize the tremendous progress we've collectively made
		in reducing reliance on centralized authorities.
	</p>

	<p>
		With self-custody support, blockchain users have full unilateral control over their assets via a private key they
		can generate themselves. This gives blockchain users the <strong>exclusive</strong> right to claim and manage their
		assets without needing permission from anyone. There's still a long way to go before self-custody becomes a
		practical alternative to holding assets on centralized exchanges or custodians, especially when it comes to
		accessing centralized liquidity<sup
			><a
				class="scroll-mt-20 focus:outline focus:outline-2 focus:outline-current"
				id="footnote-1"
				href="#footnote-1-content">1</a
			></sup
		>.
	</p>

	<p>
		With the networks we're building, the barrier for asset issuers to onboard and seamlessly interoperate is
		continuously getting lower:
	</p>

	<ul>
		<li>
			<strong>Solana</strong>: A permissionless single chain with high bandwidth and low latency, designed to support
			all users with native interoperability
		</li>
		<li>
			<strong>Avalanche</strong>: A permissionless network of networks that allows anyone to create their own network,
			with the ability to interoperate with other networks (as long as both networks agree)
		</li>
		<li><strong>Canton</strong>: A permissioned network of networks laser-focused on an institutional approach</li>
	</ul>

	<p>
		These different models show that there isn't a single way to decentralize finance. Instead, we can adjust various
		dimensions of decentralization to suit the needs of different use cases and users. This flexible, practical approach
		is what will drive real distribution of power.
	</p>

	<Heading type="h3" text="Conclusion" />

	<blockquote>
		<p>
			Decentralization measures are like some potent drugs, however: when prescribed for the relevant illness, at the
			appropriate moment and in the correct dose, they can have the desired salutary effect; but in the wrong
			circumstances, they can harm rather than heal.
		</p>

		&mdash; Rémy Prud'homme in&nbsp;<ExternalLink
			href="https://documents1.worldbank.org/curated/en/602551468154155279/pdf/770740JRN0WBRO0Box0377291B00PUBLIC0.pdf"
			>The Dangers of Decentralization</ExternalLink
		> (1995)
	</blockquote>

	<p>
		As we continuously experiment in the blockchain and crypto space, we must remain focused on the goal of
		decentralization: the <strong>distribution</strong> of <strong>power</strong>. We don't use smart contracts to build
		an app for the sake of using smart contracts; we use them because they <em>enable</em> trustless interactions. In the
		same way, decentralization should be applied deliberately when it can contribute to a more open and equitable system.
		Without this focus, we risk getting hooked on decentralization itself.
	</p>

	<hr />

	<section>
		<sup
			><a
				class="scroll-mt-20 focus:outline focus:outline-2 focus:outline-current"
				id="footnote-1-content"
				href="#footnote-1">1</a
			></sup
		>&nbsp;I am actively working on this at <ExternalLink href="https://x.com/VigilMarkets">Vigil Markets</ExternalLink
		>, <ExternalLink href="https://jobs.ashbyhq.com/vigil-markets">join</ExternalLink> us&excl;
	</section>
</Writing>
