<script lang="ts">
	import Talk from '$lib/Talk.svelte';
	import audio from './audio.m4a';

	let time = $state(0);
	let paused = $state(true);

	let { data }: { data: { date: Date } } = $props();

	const numSecondsInMinute = 60;

	function setTime(newTime: number) {
		time = newTime;
		paused = false;
	}
</script>

<div class="fixed inset-x-0 bottom-2">
	<audio bind:paused bind:currentTime={time} class="mx-auto w-full max-w-2xl" controls>
		<source src={audio} type="audio/aac" />
	</audio>
</div>

<Talk title="bips & sips live: ep 1" date={data.date}>
	<p>
		I join <a href="https://x.com/eshita">Eshita</a> and <a href="https://x.com/khushii_w">Khushi</a> on bips & sips to discuss
		why decentralization isn't the goal. They get into tradeoffs, power, and when inclusion latency > execution latency.
	</p>

	<p class="my-16 text-center font-bold uppercase tracking-widest">Transcript</p>

	<h3>
		<button
			onclick={() => {
				setTime(0);
			}}>[00:00] Eshita</button
		>
	</h3>

	<p>Welcome everyone to the very first episode of Bips and Sips Live.</p>
	<p>
		So before we get into it, I wanted to give a little bit of context on why we started this. A couple months back,
		Khushi and I were talking about how we've stopped listening to crypto podcasts and found that a high percentage of
		content that we see on our timelines that we end up consuming were not very high quality and often more noise than
		signal. This has just made it difficult over time to keep up with new and unique perspectives in the space.
	</p>
	<p>
		So, this series is our answer to that question. These spaces will be where we will talk with writers we admire about
		pieces that they've written and about how those ideas are shaping what they're building in crypto. We wanted to keep
		these spaces short and sweet so you can hop in, listen to a few ideas that we've personally been interested in, and
		hop off. So, we're optimizing more for signal as much as we can.
	</p>
	<p>
		We're kicking things off with Dhruba, who wrote a piece we both loved called <a
			href="/writing/2025/01/06/decentralization-is-not-the-goal">"Decentralization is not the goal"</a
		>. We'll get into it in a second, but at a high level, the piece challenges the way we talk about decentralization
		in crypto. And then it gets into examples of when we should actually tolerate centralization because it leads to a
		better distribution of power, which might be a little bit controversial.
	</p>
	<p>
		So, Dhruba is the co-founder, President, and CTO of Vigil Markets. I'll hand it over to you, Dhruba, to tell us a
		little bit more about Vigil Markets and your background.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(1 * numSecondsInMinute + 46);
			}}>[01:46] Dhruba</button
		>
	</h3>

	<p>Yeah, thanks so much Eshita and Khushi for having me.</p>
	<p>
		Vigil Markets is essentially a secure trading venue that has a unique focus on order privacy. Right now, a big
		problem in crypto is the market infrastructure isn't as solidified as it is in TradFi. For example, in TradFi, you
		have dark pools, you have the lit pools in NASDAQ, you have very strong market makers and very liquid markets.
		Crypto is pretty fragmented in a bad way, in my opinion. So, I've been working on that for the past year.
	</p>
	<p>
		Prior to Vigil, I spent about four years as a key platform engineer at Ava Labs where I worked on the core
		infrastructure for the Avalanche network. The main project I headed up there was the development of the public API,
		which currently I think still does billions of requests per day and is still amongst the top APIs for blockchains
		according to Atlas by 1kx.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(2 * numSecondsInMinute + 49);
			}}>[02:49] Eshita</button
		>
	</h3>

	<p>
		That's awesome. Thank you. I think that gives a bit of context and we can dig into some of what you've worked on
		throughout the conversation.
	</p>
	<p>
		But we can start off with the piece. So in the piece you touched on this idea of the decentralized NASDAQ and
		specifically how Solana has positioned themselves. And then you dig into how centralization decreases transaction
		latency, which is obviously desirable for an exchange. But Solana technically optimizes for censorship resistance,
		which means that there is an emphasis on decentralization and the validator set, and therefore this limits how low
		latency can go.
	</p>
	<p>
		You mentioned that this setup makes Solana a poor choice for price discovery but at the same time makes it a better
		choice for something like asset issuance. Do you think that that was kind of the right trade-off for Solana, or do
		you think that kind of hinders its growth long term given that they've historically positioned themselves as the
		decentralized NASDAQ?
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(3 * numSecondsInMinute + 59);
			}}>[03:59] Dhruba</button
		>
	</h3>
	<p>
		I think it was absolutely the right choice for them. If blockchains don't have censorship resistance, there isn't
		really much point to using them over something like a centralized database. You're kind of giving up latency for no
		gain then, if you're still relying on somebody being able to censor the transactions going in and out.
	</p>
	<p>
		So, as I covered in the piece, price discovery engines thrive on lower execution latency. And the problem is with
		censorship resistance, you add latency just by virtue of being censorship resistant, which kind of makes Solana
		incapable of competing with a centralized service like NASDAQ. You're essentially trying to fit a square peg through
		a round hole. It doesn't work unless it's a square hole.
	</p>
	<p>
		So, asset issuance, in my view, is blockchain's bread and butter. Proving provenance of an asset in a trustless,
		tamper-resistant way is incredibly valuable. And this is clearly being played out with more and more players
		constantly issuing assets on-chain. You see BlackRock issuing natively on Ethereum, and I think they're also
		natively issued on Solana. Superstate is also natively issuing securities on Solana. And it's very clear that this
		is a huge use case for blockchains.
	</p>
	<p>
		So, I don't think it'll hinder growth in the long term, but I think we need to probably focus a bit more carefully
		on which parts and products blockchains are actually good for, and which ones maybe we shouldn't try to really go
		after.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(5 * numSecondsInMinute + 39);
			}}>[05:39] Khushi</button
		>
	</h3>

	<p>
		That's awesome. Jumping in here real quick. I think it's a really great point that some products are built really
		well for blockchain systems, but for other products they're not as well built. And I feel the way we've tried to
		solve for that as blockchain application developers has largely been to just build products of different levels of
		decentralization. A product will sit on the super centralized side of the spectrum or the hyper-decentralized side
		of the spectrum.
	</p>
	<p>
		And so, thinking about that spectrum of decentralization, do you think that is sufficient for achieving product
		differentiation—having a centralized product allows you to differentiate from a super decentralized product onchain?
		And is there a perfect balance, or do you think there will always be successful products on either end of the
		decentralization spectrum?
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(6 * numSecondsInMinute + 30);
			}}>[06:30] Dhruba</button
		>
	</h3>
	<p>
		That's a great question. I think it really touches on the identity crisis that crypto is going through. Essentially,
		right now, we're copying a lot of the existing products and just slapping decentralization on it. I remember
		Coinbase's tagline for a lot of their ads on the Super Bowl is "update the system." I think that's particularly apt
		here because the most successful products in crypto are really just updated versions of existing products. Take
		Uniswap for example, it's trying to be an update for NASDAQ, or take Aave trying to be an update for traditional
		lending protocols that you get from a bank.
	</p>
	<p>
		But the thing is, with all updates, they're not all good. Windows 8 sucks, and some of the more recent Apple
		software releases, in my opinion, are also not super great. And the problem is each product has benefits and
		drawbacks. So with decentralization and crypto, you can't just say that, "Oh, there's decentralization in it," or
		"Oh, there's crypto in it," so it's obviously going to be a better product. A better product really needs to do two
		things over the existing product: It either needs to increase the benefits or it needs to remove some of the
		drawbacks. Otherwise, there's no reason for people to switch off what they currently use.
	</p>
	<p>
		Now, the problem, I think, is people use decentralization as a selling point. But product differentiation only
		really comes in from how product developers are using decentralization to increase benefits or remove drawbacks for
		their users. So to your point of there being successful products on either end, I think it's guaranteed that there
		will be.
	</p>
	<p>
		Not a crypto example, but I think it's useful framing here. If you take AI, companies used to really have to track
		your website visits, they'd have to track your search patterns to develop a profile on how you think and how you
		interact with products, and then they sell it to advertisers because now they have a profile on how you think. Well,
		now with AI chatbots, you kind of willingly tell them how you think. You're literally inputting all of your
		information into these things. Now, the problem is, even though this could be seen as a drawback, these chatbots
		have seen an explosion in popularity because the massive benefits outweigh this added drawback.
	</p>
	<p>
		So, it's literally just a trade-off between benefits and drawbacks. Decentralization is a spectrum in and of itself,
		but in terms of how people view products that they want to use, decentralization really isn't a concern for them.
		It's, "What are the features that I'm getting out of this? What pain points is it solving for me?"
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(9 * numSecondsInMinute + 18);
			}}>[09:18] Khushi</button
		>
	</h3>
	<p>
		That is such a good point. And I think it is so common that in this industry, we conflate decentralization with
		features or with selling points of a product. But realistically, decentralization is just the way the product was
		built, the technology, and it shouldn't be the anchor point for any product or any company.
	</p>
	<p>
		But one of the products that has achieved a lot of PMF in crypto recently has been stablecoins. And I know you
		touched upon this in your piece as well, where you talk about decentralized stablecoins like DAI and then you also
		talk about centralized stablecoins like USDC, and how they compare and how the different issuers have approached the
		creation of those stablecoins and the value of those stablecoins.
	</p>
	<p>
		So, I wanted to ask you if you could just give a couple sentences of how you compare these two approaches and what
		you think about DAI versus USDC.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(10 * numSecondsInMinute + 10);
			}}>[10:10] Dhruba</button
		>
	</h3>
	<p>
		I think DAI has really proven out a censorship-resistant model. You can have a USD-denominated asset with censorship
		resistance baked into the DNA.
	</p>
	<p>
		USDC, on the other hand, is still USD-denominated, which is kind of where the similarities start and end with DAI.
		But USDC is effectively a bank. It embraces regulation. It has to comply with legal requests. And many people can
		desire the comfort of a bank, right? If your USDC gets stolen, Circle could theoretically recover it since the
		actual US dollar lives under Circle's control. The problem with DAI is if you fat-finger a send or something, it's
		on you. It's as if you lost cash, right? Not recoverable at all.
	</p>
	<p>
		So, there are also valid reasons for why people may not trust banks or even can't use them. So, I think we saw this
		in crypto. Nic Carter really did a good job with this where we had full documentation of Operation Chokepoint where
		many people were debanked for crypto ties. And if we're trying to operate in a trustless ecosystem, a
		censorship-resistant USD-denominated asset like MakerDAO and DAI is a key component of that.
	</p>
	<p>
		But I think it's a little bit of a stretch to say people must use DAI because it's a decentralized version while
		also neglecting to mention there are benefits of centralized stablecoins like USDC because I'm not the one solely
		responsible for maintaining the safety of my asset.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(11 * numSecondsInMinute + 52);
			}}>[11:52] Khushi</button
		>
	</h3>
	<p>
		That makes sense, and I think it's a constant problem that we face in crypto as well, where users love to have
		self-custodied wallets where they have control of their assets, and they own everything, and they don't have to
		trust any centralized counterparty. But at the same time, there's a very high risk of you clicking a wrong link or
		losing your seed phrase and potentially losing access to all of those funds.
	</p>
	<p>
		So, it's true for stablecoins, it's true for wallets, it's true for a lot of things in crypto where having things
		decentralized or self-custodied is really nice up until it isn't, and then you really wish that there was some
		centralized counterparty that you could blame.
	</p>
	<p>
		And so just going a little bit deeper into the stablecoin topic, it's really interesting that you talk about trust
		and trust as a necessity for success, and that's how USDC has really gained so much success over a decentralized
		stablecoin like DAI.
	</p>
	<p>
		But what's interesting is DAI is actually very transparent in terms of the capital that is being used to back the
		stablecoin and the asset. So why doesn't that transparency itself make it more trustworthy than something like
		Circle as an asset issuer for USDC?
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(13 * numSecondsInMinute + 10);
			}}>[13:10] Dhruba</button
		>
	</h3>
	<p>
		Yeah, it's definitely a conundrum. I think it kind of violates the crypto thesis of "if it's decentralized, it's
		better," right? With DAI, you can track how it's being minted. You can vet the smart contract. You can see that it's
		behaving as expected. But the problem is, it's still relying on the user to be fully in control of their asset. And
		I think for wide-scale adoption, that isn't exactly a property that people desire.
	</p>
	<p>
		So if you take the Stripe announcement recently with their corporate accounts where they're using USDC and USDB,
		both of those are centralized counterparties. USDB is issued by Bridge, which Stripe just acquired, and USDC is
		issued by Circle. So if there are any issues with the stablecoins now that Stripe is providing this facility to its
		corporate clients, Stripe's now on the hook. If they lose the money, it's on Stripe. It's not on a bank or anything.
	</p>
	<p>
		So if Stripe is trying to provide that guarantee to users or their users, they will probably also have insurances
		from Bridge and Circle that far outweighs their business needs of censorship resistance. They probably aren't really
		looking for censorship resistance at all. They're looking for the security of "if Circle or Tether or Bridge don't
		pay me, I can just sue them." And that's a failsafe option.
	</p>
	<p>
		I think another component of this is insurance. I'm positive that Stripe has insurance around their corporate
		accounts. If they have $100 million in stablecoins, they'll be able to insure it at a much lower premium if they're
		using USDC or USDB because it's issued by Bridge or Circle, versus if they tried to use something like DAI, which
		has other risks that are harder to underwrite. For example, if the Ethereum blockchain goes through another fork, as
		it did during the DAO hack, well then that is a concern that insurance companies will have, and Stripe will probably
		have to pay a higher premium.
	</p>
	<p>
		So this is probably why you see less adoption of DAI amongst more serious players who are trying to dip their toes
		into crypto. But as I mentioned before, censorship resistance is important, and as you rightly pointed out, it
		doesn't matter until it really matters. But I think assuming that that is enough for widespread adoption is not the
		right way to go about it.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(15 * numSecondsInMinute + 42);
			}}>[15:42] Khushi</button
		>
	</h3>
	<p>Yeah, that makes sense.</p>
	<p>
		And it's really funny that you talk about insurance because it's something that practically and logically makes a
		lot of sense. But I remember a year or two ago there were all kinds of on-chain insurance options that were offered
		for protecting you against stablecoin depegs or your assets being lost. And I feel a lot of those companies actually
		didn't take off.
	</p>
	<p>
		So, it's really funny that now we're ending up in a place where insurance is again one of the things that makes a
		company or a stablecoin more trusted than something that's on-chain, decentralized, and fully transparent.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(16 * numSecondsInMinute + 20);
			}}>[16:20] Dhruba</button
		>
	</h3>

	<p>How do you have a decentralized insurance platform? Who do I file the claim against if they just disappear?</p>

	<h3>
		<button
			onclick={() => {
				setTime(16 * numSecondsInMinute + 26);
			}}>[16:26] Khushi</button
		>
	</h3>
	<p>
		Yeah, exactly. You can have some kind of programmatic depeg assurance, but it's hard to trust that when you can't
		physically go to them and say, "Hey, something happened. I need my money."
	</p>
	<p>
		Cool. So, there's one other thing I did want to talk about. I feel decentralization is one of those things that's
		been a part of this industry for a long time. And nowadays, any company or team that considers themselves
		crypto-native also touts the importance of decentralization.
	</p>
	<p>
		And so I wonder what you think about how decentralization relates to the concept of being crypto-native and whether
		companies are only crypto-native if they're actually decentralized in their technology.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(17 * numSecondsInMinute + 12);
			}}>[17:12] Dhruba</button
		>
	</h3>

	<p>
		Yeah, it's a great question. I think "crypto-native" is a tricky phrase because it's kind of been, for lack of a
		better word, bastardized by the industry. It's really just a marketing term at this point.
	</p>
	<p>
		I would personally take crypto-native institutions to be those who prioritize and empower self-custody. But if I
		look around at some of the companies in the space, I see phrases like "crypto-native bank," and it sounds great, but
		it feels antithetical to what crypto stands for. It doesn't feel crypto-native at all that I have to give up custody
		of my assets to a bank.
	</p>
	<p>
		So using that as a jumping off point, I would say somebody like Coinbase is not crypto-native, whereas somebody like
		Hyperliquid is crypto-native, since I don't have to give up custody of my assets to actually use it.
	</p>
	<p>
		Decentralization and the dimensions along which you can decentralize, I would say, is a good framework to understand
		who or what you're trusting. But in terms of "crypto-native," it's really up to us to decide what is crypto-native
		and what values do we look for in a crypto-native institution.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(18 * numSecondsInMinute + 31);
			}}>[18:31] Eshita</button
		>
	</h3>

	<p>
		Do you think that the origin of that term "crypto-native" arose in the early days, when the founding principles of
		crypto really drove people to join it? And that became the marketing term, and companies—centralized or not—use that
		term. It's the thing that brings people in. What do you think it would take to discard this term and still be honest
		about what you're offering, even if you're not?
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(19 * numSecondsInMinute + 16);
			}}>[19:16] Dhruba</button
		>
	</h3>

	<p>
		I mean, I think the biggest problem there is people aren't typically honest about what they're offering. So I think
		that would be the first step.
	</p>
	<p>
		I think for "crypto-native" in general, it's been so misused that it really doesn't matter who uses it now. If I see
		somebody say they're crypto-native, I'm already skeptical. It doesn't alleviate a lot of my concerns around, "Am I
		trusting them with too much stuff? Am I trusting them with my coins? Am I approving a smart contract that I have no
		idea what it's going to do?"
	</p>
	<p>
		So a lot of that stuff is tricky to figure out. And even from a blockchain perspective, I've worked on blockchains
		for four years now, and even I don't really understand how a lot of these smart contracts work. You need to go
		through the source code, and even though the source code is available, going through each and every line and
		understanding exactly what it's doing is possible, but it's not realistic to expect users to be able to do that.
	</p>
	<p>
		I remember there was a time where people used to trust audits for these smart contracts, and I mean, I don't know if
		we should pull up <a href="https://rekt.news">rekt.news</a>, but I feel a lot of those guys were audited before they
		got rekt. So I think it's tricky that we have this marketing problem in crypto where people aren't honest.
	</p>
	<p>
		And I think a step towards the right direction is kind of holding companies accountable to, "Hey, you're not
		actually crypto-native. This is the value we believe in." And the only way you can really do that is voting with
		your dollar. If you don't support a centralized exchange like Binance, then you should be voting with your dollar
		and moving it off of that.
	</p>
	<p>
		But I think one of the biggest problems with that approach is [that] crypto is unique in a sense where where you
		keep your money determines how you can use it. If I wanted to rent an apartment, no one really cares where my money
		is. It could be with Fidelity, could be with JPMorgan, could be with Bank of America. They're fundamentally the same
		building block when I go to rent an apartment. But if I have my money on Ethereum, I can't interact with the
		ecosystem on Solana or frankly even the liquidity on Coinbase unless I move off of Ethereum and go to Coinbase or
		move off of Ethereum and go to Solana.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(21 * numSecondsInMinute + 47);
			}}>[21:47] Khushi</button
		>
	</h3>
	<p>Yeah, that totally makes sense.</p>
	<p>
		And related to the last question, as we wrap up here, I want to bring it back to what you're building now. So the
		big theme of your piece that we dug into was this idea of pragmatic decentralization.
	</p>
	<p>
		So I'm curious about how you are applying this lens of pragmatic decentralization at Vigil and specifically how
		you're thinking about balancing this power distribution against real-world constraints, whether that be latency or
		dealing with regulation or just maybe overall UX.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(22 * numSecondsInMinute + 30);
			}}>[22:30] Dhruba</button
		>
	</h3>
	<p>
		Yeah, it's a great question, and it's something we've talked about a lot internally. Part of the genesis of the
		piece was me and my co-founder Soumya were talking a lot about what are we really building here? What are the value
		propositions we stand for? And what are some of the—what's the bill of rights that we want to provide our users?
	</p>
	<p>
		So we started with the observation that crypto now is more centralized than it's ever been. Just take Coinbase for
		example. Coinbase by itself holds over 12% of all Bitcoin. And if you—that may not sound super alarming to some
		people, but to me, that indicates a trend. If one person controls all of the assets on a chain, I don't really see
		how this corresponds to some of the core values of crypto.
	</p>
	<p>
		So, in my view, and this might be a little controversial, is that the core values of crypto are being eroded by the
		people who got rich off of it. Coinbase spent so much money and made billions of dollars, frankly, off of bringing
		crypto to the masses, which is great, and I applaud them for it. They've done a lot of work in the regulatory space
		to make crypto where it is now.
	</p>
	<p>
		But the problem is the core value of self-custody is still unattractive. And Coinbase does not do any favors to
		self-custody users by saying you cannot access Coinbase liquidity unless you give your coins to us. So UX issues
		aside, we really wanted to start by just looking at what chain people are on.
	</p>
	<p>
		So as I mentioned, if you want exposure to ETH while keeping your coins on Solana, you'll have to rely on a bridged
		asset. So if you're on Solana, you'll probably be using something wrapped Ethereum that's bridged over somewhere.
		But the problem is individual users have to vet each bridge that they use.
	</p>
	<p>
		So in the case of Solana, it was very public that the Wormhole bridge was exploited for over $300 million. And every
		single user who had a Wormhole asset, they were de-pegged, and they didn't get their money back. I think eventually
		the hole got fixed and it re-pegged, but for that brief period of time, users were shit out of luck.
	</p>
	<p>
		And I know we were talking about this offline, but this just doesn't happen in TradFi. If a bank collapses, FDIC
		steps in and protects depositors to prevent a widespread financial crisis. Crypto just doesn't have anything like
		this, and pushes that burden onto users.
	</p>
	<p>
		So for us at Vigil, a key value proposition for us is user choice. Users should be able to choose whichever
		custodian they want and not have to lose access to liquidity. If you want to keep your Ethereum on Solana, you
		should still be able to interact with the entire Ethereum market regardless of where other people are holding their
		Ethereum.
	</p>
	<p>
		The example I like to use with folks who are joining is imagine if I kept Apple stock at JPMorgan and I was only
		allowed to trade with other people who held Apple stock at JPMorgan. That just wouldn't work. I would want to be
		able to trade with people who keep it at Morgan Stanley. I would want to be able to trade with people who keep it at
		Goldman Sachs. Being restricted to the bank you use is not an open financial market that I think we're all trying to
		build here.
	</p>
	<p>
		So, we think that this is the single biggest existential threat to crypto, frankly. If a few players end up
		controlling the asset class and they have put up these walled gardens for liquidity, we've reinvented TradFi without
		any of the consumer protections. And I think, as I mentioned before, we could pull up <a href="https://rekt.news"
			>rekt.news</a
		>. The idea that users have to be the sole bearers of their fate is probably not the right path to keep going down.
	</p>
	<p>
		So, we hope to make a change here. That's how we're balancing power distribution with real-world constraints. We
		really want to make sure that users can feel they can experiment with other chains. They can move their assets
		elsewhere with some of the safety guarantees that TradFi provides. Frankly, the fact that we haven't updated the
		system in a good way here is not good.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(27 * numSecondsInMinute + 12);
			}}>[27:12] Eshita</button
		>
	</h3>

	<p>
		I love that. For all of us building in crypto, it's important that we think about user safety first, but also still
		preserve their choice in that. So, we're at time here. Thank you Dhruba again for kicking off Bips and Sips live
		with us, and for everyone who tuned in. We know it's a Friday afternoon for some, so we appreciate you coming and
		listening. We'll be back soon with more short and sharp conversations with the folks behind our favorite ideas.
		Appreciate everyone hopping in.
	</p>

	<h3>
		<button
			onclick={() => {
				setTime(27 * numSecondsInMinute + 46);
			}}>[27:46] Dhruba</button
		>
	</h3>

	<p>Thanks so much guys.</p>

	<h3>
		<button
			onclick={() => {
				setTime(27 * numSecondsInMinute + 47);
			}}>[27:47] Eshita</button
		>
	</h3>

	<p>Thank you. Bye.</p>
</Talk>
