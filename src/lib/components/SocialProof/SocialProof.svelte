<script>
	import Container from '$lib/components/Container.svelte';

	const images = [
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		},
		{
			image: '/images/vercel.svg',
			alt: 'Vercel',
			url: 'https://vercel.com'
		}
	];
</script>

<section class="border-y border-y-white/10">
	<Container className="flex flex-col gap-16">
		<h2 class="text-3xl font-semibold text-white">Trusted by growing teams around the globe</h2>

		<ul class="grid grid-cols-5 gap-8 gap-x-24 gap-y-16">
			{#each images as { image, alt, url }}
				<li>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer external nofollow"
						class="opacity-50 transition-opacity duration-300 hover:opacity-70"
					>
						<img src={image} height="75" width="250" {alt} />
					</a>
				</li>
			{/each}
		</ul>
	</Container>
</section>
