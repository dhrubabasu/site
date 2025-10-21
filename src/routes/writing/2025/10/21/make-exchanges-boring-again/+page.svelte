<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import Writing from '$lib/Writing.svelte';
	import ExternalLink from '$lib/ExternalLink.svelte';

	let { data }: { data: { date: Date } } = $props();
</script>

<Writing title="Make Exchanges Boring Again" readingTime={9} date={data.date}>
	<p>
		<em
			>Special thanks to <ExternalLink href="https://x.com/soumyab8">Soumya Basu</ExternalLink>,
			<ExternalLink href="https://x.com/stephenbuttolph">Stephen Buttolph</ExternalLink>,
			<ExternalLink href="https://x.com/chadfowler">Chad Fowler</ExternalLink>, and
			<ExternalLink href="https://x.com/NickPreszler">Nick Preszler</ExternalLink> for feedback and review.</em
		>
	</p>

	<p>
		<em>The opinions expressed in this post are my own and do not necessarily reflect the views of the reviewers.</em>
	</p>

	<Heading type="h3" text="Introduction" />

	<p>
		Crypto markets are no stranger to catastrophic deleveraging, but the October 10 crash was different. "Crypto Black
		Friday" vaporized $19 billion in leveraged positions and erased $800 billion in market capitalization as Bitcoin
		printed an unprecedented $20,000 daily red candle.
	</p>

	<p>
		The crash was sparked by a shock U.S. tariff announcement, but that trigger isn't the real story. The real story is
		the accelerant.
	</p>

	<p>
		We witnessed a complete breakdown of market infrastructure. The very systems designed to manage risk—from automated
		liquidation engines to loss-socialization backstops—became the primary fuel for the crash.
	</p>

	<p>
		<strong
			>This was the predictable detonation of a systemic time bomb at the heart of crypto infrastructure: the
			conflicted, all-in-one exchange.</strong
		>
	</p>

	<p>
		The modern crypto "exchange" is not a neutral venue. It is a deeply conflicted entity juggling multiple, distinct
		roles at once:
	</p>

	<ul>
		<li><strong>Bank</strong> (holding custody)</li>
		<li><strong>Broker</strong> (executing trades)</li>
		<li><strong>Lender</strong> (providing margin)</li>
	</ul>

	<p>
		This post argues that this all-in-one model is the core architectural flaw. When the exchange is also the lender, it
		is on the hook for every dollar of margin it extends. This creates an <strong>unresolvable conflict</strong>: the
		platform's survival suddenly depends not on market stability, but on its ability to liquidate user positions before
		its own loan book implodes. This core conflict forces exchanges to adopt destabilizing mechanisms like
		Auto-Deleveraging (ADL) and proves that the only viable path forward is unbundling these services into neutral,
		non-conflicted infrastructure.
	</p>

	<Heading type="h3" text="Incentivized Against Stability" />

	<p>
		In a mature financial market, a sudden flash crash triggers a market-wide circuit breaker. This is a fundamental,
		<em>counter-cyclical</em> tool that halts trading, breaks the panic cycle, and allows liquidity to return. Its sole objective
		is market integrity.
	</p>

	<p><strong>In crypto's bundled model, this is impossible.</strong></p>

	<p>
		A circuit breaker is a luxury only a neutral venue can afford. But a modern crypto exchange isn't neutral; it's the
		chief risk-holder. It's a direct counterparty to the very debt that's imploding.
	</p>

	<p>
		Pausing the market might seem logical. But for the exchange, that would mean sitting passively and absorbing
		accelerating losses, just praying the market doesn't gap down further on the re-open. A platform on the hook for
		billions in bad debt can't afford to "wait and see."
	</p>

	<p>
		The incentive isn't to stabilize the market. The incentive is to liquidate users faster than the market can crash.
	</p>

	<p>
		The exchange must keep the market open to run its liquidator. This creates the exact destabilizing, <em
			>pro-cyclical</em
		> feedback loop we saw on 10/10: liquidations add massive sell pressure, which causes prices to fall further, which triggers
		more liquidations. The system designed to manage risk becomes the primary accelerant for the crash.
	</p>

	<p>
		This cascade is the first failure. The second, Auto-Deleveraging (ADL), is what happens when the exchange loses this
		race.
	</p>

	<Heading type="h3" text="Anatomy of a Crash: The &quot;Enshrined Trader&quot;" />

	<p>
		This structural conflict played out in real-time on all-in-one platforms like Hyperliquid, Lighter, Binance, and any
		other system built on this same conflicted architecture.
	</p>

	<p>
		The conflict is more subtle than just the "house" taking the other side of your trade. Even while you trade
		peer-to-peer on an order book, the platform acts as your lender. It provides the margin, and as the lender, it is on
		the hook for all credit risk.
	</p>

	<p>Here is the step-by-step anatomy of how this system fails during a crash:</p>

	<ol>
		<li>
			<p><strong>Mass Liquidations (First Wave)</strong></p>

			<p>
				The crash begins. Billions in leveraged positions become undercollateralized. The exchange's automated
				"liquidation engine" (its first line of defense) tries to force-sell these positions on the open market to
				recover the margin it loaned out.
			</p>
		</li>

		<li>
			<p><strong>Order Book Failure (Second Wave)</strong></p>

			<p>
				In a panic, buyers vanish. The order book becomes paper-thin. The massive, cascading liquidation orders blast
				through the available bids, pushing the price down even faster and failing to close the positions before they
				are deep in the red.
			</p>
		</li>

		<li>
			<p><strong>Insurance Fund Breaks (Backstop Failure)</strong></p>

			<p>
				When a position is so underwater that it can't be closed on the market, the loss (the "bad debt") is passed to
				the exchange's "insurance fund" or "backstop" (on Hyperliquid, this is the HLP). This fund is supposed to absorb
				the losses. But in a systemic crash, the sheer volume of bad debt overwhelms the fund.
			</p>
		</li>

		<li>
			<p><strong>System Insolvency</strong></p>

			<p>
				The platform is now insolvent, with its liabilities (the bad debt it's on the hook for) exceeding its assets
				(the insurance fund).
			</p>
		</li>

		<li>
			<p><strong>Last Resort: Auto-Deleveraging (ADL)</strong></p>

			<p>
				With its core solvency threatened, the system triggers its last resort: <strong>Auto-Deleveraging (ADL)</strong
				>. This is a "loss socialization" mechanism. It automatically finds the most profitable "winning" traders on the
				other side of the market and forcibly closes their positions—not at a price they agree to, but at the bankruptcy
				price of the losing traders whose debt is sinking the platform. (For a more detailed breakdown of how exactly
				ADL works, see <ExternalLink href="https://x.com/0xdoug/status/1976850615621107743"
					>@0xdoug's thread</ExternalLink
				>.)
			</p>
		</li>
	</ol>

	<p>ADL, therefore, functions as an "enshrined trader".</p>

	<p>
		It is a privileged, automated agent operating outside the rules of the order book. Defenses of this system claim it
		"saved the protocol." <strong>This admission reveals the entire conflict.</strong> The system's primary survival mechanism—in
		a crisis caused by its own credit extension—was to forcibly close users' winning positions to protect the platform's
		balance sheet.
	</p>

	<p>
		During the crash, you might have been trying to submit an order, locked out by system lag. The ADL is never locked
		out. As part of the core engine, this privileged agent is designed to stop out your profitable position to socialize
		the platform's losses.
	</p>

	<p>
		When the lender, liquidator, and exchange are one, it is not a fair market. <strong
			>It is a conflicted system where the platform retains the final, decisive move.</strong
		>
	</p>

	<Heading type="h3" text="The Bundled Model is the Flaw" />

	<p>
		This was not an isolated incident. This is the inevitable, architectural outcome of every bundled exchange that also
		acts as the central lender and clearer.
	</p>

	<p>
		This all-in-one model was adopted for understandable reasons: it's a seamless user experience, minimizes friction,
		and maximizes capital efficiency. But 10/10 proves this is a dangerous trade-off—sacrificing systemic stability for
		a streamlined interface. The model's convenience is the conflict.
	</p>

	<p>
		The "enshrined trader"—the ADL system—is the most obvious symptom of this conflict, a system designed to sacrifice
		its winning users to save its own balance sheet. But this isn't even the final, most dangerous lever of control.
	</p>

	<p>The ultimate, unresolvable conflict is <strong>custody</strong>.</p>

	<p>
		If ADL fails to socialize the losses fast enough, the platform holds the ultimate trump card: your money. A platform
		that can freeze withdrawals to protect its own loan book is no longer an exchange. It's a desperate debtor holding
		your funds hostage.
	</p>

	<p>
		This toxic combination of "decentralized" risk (where users bear the full brunt of losses) with hyper-centralized
		control (the ADL and the withdrawal freeze) is precisely why serious institutional capital is hesitant to use these
		platforms. A "better" or "more transparent" version of this conflicted model isn't the answer. The entire model is
		the flaw.
	</p>

	<Heading type="h3" text="Unbundling the Exchange" />

	<p>
		The 10/10 cascade demonstrated, painfully, that the old way is fundamentally broken. The future of finance lies not
		in a polished version of the all-in-one casino, but in the <strong>unbundling of services</strong>. This separation
		of powers is a core principle of traditional finance. While that system is far from flawless—with its own clearing
		failures—its architecture is designed to isolate conflicts, not guarantee them.
	</p>

	<p>This is the power of neutral infrastructure, broken into discrete, specialized, and non-conflicted layers:</p>

	<ol>
		<li>
			<strong>Execution (The "Boring" Exchange):</strong> A neutral venue that does only one thing: match orders. It holds
			no funds, provides no margin, and has no insurance fund. Its only incentive is uptime and volume.
		</li>

		<li>
			<p>
				<strong>Clearing (The Risk Engine):</strong> A separate system that manages risk, collateral, and margin. This layer
				is what enables a real circuit breaker. Its sole purpose is to prevent systemic failure, not profit from liquidations.
			</p>

			<p>
				Critically, this layer reveals the limits of pure automation. A smart contract cannot make a discretionary
				margin call. It knows only one all-or-nothing move: forced liquidation. It cannot distinguish between a solvent
				institution that is temporarily illiquid and a truly insolvent degen. As we saw on 10/10, this automated,
				brutalist model is precisely what amplifies cascades, turning a bad situation into a systemic failure.
			</p>

			<p>
				A mature clearing layer, by contrast, understands where "code is law" is appropriate (atomic settlement) and
				where it must be <strong>augmented with human discretion</strong> (complex risk management). This layer has a process—a
				system external to the code—for contacting a major participant and saying, "You have two hours to post more collateral."
			</p>

			<p>
				This element of discretion is not a bug; it is the primary feature of a resilient anti-cascade system. It
				provides the flexibility to distinguish illiquidity from insolvency—a distinction a purely algorithmic system is
				blind to. This flexibility is what separates a mature market from a brittle one, preventing one portfolio's bad
				day from turning into a market-wide collapse.
			</p>

			<p>
				Most importantly, because this neutral clearing layer is not the lender, its discretion is exercised <em
					>only</em
				> for systemic stability, not to protect its own balance sheet. It is an impartial arbiter, not a conflicted debtor.
			</p>
		</li>

		<li>
			<strong>Custody (The Bank):</strong> Separate, self-custodial smart contracts or third-party, regulated custodians.
			This removes the asset control problem entirely because the exchange cannot freeze assets it does not control.
		</li>
	</ol>

	<p>
		This unbundled structure is the definitive solution because it systematically dismantles the conflicts of interest
		amplifying crypto cascades today.
	</p>

	<p>
		The all-in-one model failed because all risk (credit, operational, and custody) was concentrated in one conflicted
		entity. Your collateral was trapped, illiquid, and effectively an IOU from the very counterparty you were trading
		against.
	</p>

	<p>
		In a neutral model, risk is segregated. The exchange's only job is matching orders—it has no loan book to protect,
		no incentive to liquidate. The clearer's only job is maintaining systemic solvency, not its own P&L. The custodian's
		only job is safekeeping.
	</p>

	<p>
		This is what creates institutional credibility. It is what enables a circuit breaker. Perhaps most significantly, it
		eliminates the "enshrined trader." The embedded ADL mechanism simply does not exist in an exchange that has no bad
		debt to socialize.
	</p>

	<p>
		This replaces the fragile, opaque trust in a single "house" with robust, transparent trust in a system of checks and
		balances.
	</p>

	<Heading type="h3" text="Conclusion" />

	<blockquote>
		<p>
			We do not make changes for the sake of making them, but we never fail to make a change when once it is
			demonstrated that the new way is better than the old way
		</p>

		&mdash; Henry Ford
	</blockquote>

	<p>
		For crypto to fulfill its promise, exchanges must be made boring again. The future isn't a flashier casino. The goal
		is a reliable, neutral system where the rules are the same for everyone, and the platform isn't also a participant.
	</p>
</Writing>
