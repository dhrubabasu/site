<script>
	import turtles from './turtles.jpg';
</script>

<svelte:head>
	<title>Dhruba Basu</title>
</svelte:head>

<div class="mx-auto prose">
	<h2>👋🏾</h2>

	<p>
		I'm Dhruba. I'm based in NYC and work in fintech. After falling down a BGP rabbit hole in 2019 (<a
			target="_blank"
			href="https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today"
			>June 24</a
		> to be exact), I dedicate my engineering efforts to reducing trust in centralized systems. I have an affinity for distributed
		systems, networking, and applied cryptography.
	</p>

	<ul>
		<li><a target="_blank" href="https://github.com/dhrubabasu">GitHub</a></li>
		<li><a target="_blank" href="https://twitter.com/dhrubabasu_">Twitter</a></li>
	</ul>

	<figure>
		<img src={turtles} alt="Wait, it's turtles all the way down? Always has been." />
		<figcaption class="text-center">🐢🐢🐢🐢🐢🐢🐢</figcaption>
	</figure>
</div>
