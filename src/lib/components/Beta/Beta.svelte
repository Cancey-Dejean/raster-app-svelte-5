<script>
	import Container from '../Container.svelte';
	import Button from '../ui/button/button.svelte';
</script>

<section>
	<Container className="flex items-center gap-12">
		<div class="grow">
			<a
				class="bg-red/10 border-red/20 hover:bg-red/20 mb-4 inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium text-white transition-colors duration-200 ease-in-out md:mb-6 lg:mb-8"
				href="/"
				rel="noopener noreferrer"
				target="_blank"
				title="Visit Raster on Product Hunt"
			>
				<span class="relative flex size-2"
					><span class="bg-red/90 absolute inline-flex h-full w-full animate-ping rounded-full"
					></span>
					<span class="bg-red/50 border-red/70 relative inline-flex size-2 rounded-full border"
					></span></span
				>
				Now in Public Beta
			</a>

			<h2 class="mb-8 text-4xl font-semibold text-white sm:text-6xl md:text-7xl">
				Ready to give Raster a try?
			</h2>

			<p>
				Raster is a digital asset manager for modern teams, saving time organizing, editing, and
				hosting photography.
			</p>

			<Button variant="secondary" href="/" class="mt-12">Register</Button>
		</div>

		<div class="mx-auto w-full max-w-[711px]">
			<enhanced:img
				src="/static/images/beta-image.png?w=711"
				alt="Thumbnails of four photographs as depicted in Raster"
			/>
		</div>
	</Container>
</section>

<style>
	@keyframes ping {
		75%,
		to {
			transform: scale(2);
			opacity: 0;
		}
	}

	.animate-ping {
		animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>
