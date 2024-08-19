<script>
	import Container from '../Container.svelte';
	import Button from '../ui/button/button.svelte';
</script>

<section
	class="bg-cover bg-center py-[84px] text-center"
	style="background-image: url('/images/cta-bg.webp');"
>
	<Container>
		<div class="mb-12 flex flex-col gap-5">
			<h2 class="text-4xl text-white sm:text-5xl md:text-6xl">One place for all your photos</h2>
			<p class="mx-auto max-w-md text-center text-gray-300 mix-blend-color-dodge">
				Finally, a photo management solution that developers, designers, and marketing teams can
				agree on.
			</p>
		</div>
		<Button href="/" variant="ghost">Get started for free</Button>
	</Container>
</section>
