<script>
	import Container from '$lib/components/Container.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<section class="py-24">
	<Container className="flex items-center gap-12">
		<div class="w-full max-w-[650px]">
			<img
				src="/images/product-hunt.svg"
				alt="Raster - Next-gen, AI-powered digital asset manager for modern teams | Product Hunt"
				width="200"
				height="44"
				class="mb-6"
			/>

			<div class="flex max-w-[550px] flex-col gap-8">
				<h1 class="text-8xl font-semibold text-white">
					Photography Management

					<a href="/" class="text-primary block">→ The Future</a>
				</h1>

				<p class="text-lg">
					Raster is a digital asset manager for modern teams, saving time organizing, editing, and
					hosting photography.
				</p>
			</div>

			<Button class="mt-12" href="/">Button</Button>
		</div>

		<enhanced:img src="/static/images/hero-img.png?w=516" alt="Hello" />
	</Container>
</section>
