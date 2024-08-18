<script>
	import Container from '$lib/components/Container.svelte';
	import Card from '$lib/components/ui/cards/Card/Card.svelte';
	import CardImage from '$lib/components/ui/cards/Card/CardImage/CardImage.svelte';
	import CardOne from '$lib/components/ui/cards/Card/CardOne/CardOne.svelte';
</script>

<section>
	<Container>
		<h2 class="text-3xl font-semibold text-white">A photo manager unlike any other.</h2>

		<div class="grid grid-cols-3 gap-6">
			<!-- Three columns-->
			<div class="col-span-1 col-start-1">
				<Card>
					<div class="flex flex-col gap-4">
						<h3 class="text-3xl font-semibold text-white">
							Raster is <span class="text-[var(--color-daisy-yellow)]">faster.</span>
						</h3>

						<p>
							Not only is Raster the fastest DAM on the planet, it has smart features so your team
							performs faster too.
						</p>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="83"
						height="92"
						class="mt-auto"
						fill="none"
					>
						<path
							class="dash-strokes stroke-daisy-yellow"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M46 1 1 55h40.5L37 91l45-54H41.5L46 1Z"
						></path>
					</svg>
				</Card>
			</div>

			<div class="col-span-1 col-start-2">
				<Card>Item 1</Card>
			</div>

			<div class="col-span-1 col-start-3">
				<Card className="p-0">
					<CardImage />
				</Card>
			</div>

			<!-- Two Thirds columns -->
			<div class="col-span-1 col-start-1">
				<Card className="p-0">
					<CardImage />
				</Card>
			</div>
			<div class="col-span-2 col-start-2">
				<Card>Item 1</Card>
			</div>

			<!-- Three columns-->
			<div class="col-span-1 col-start-1">
				<Card>
					<svg xmlns="http://www.w3.org/2000/svg" width="83" height="92" fill="none">
						<path
							class="dash-strokes stroke-daisy-yellow"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M46 1 1 55h40.5L37 91l45-54H41.5L46 1Z"
						></path>
					</svg>

					<div class="mt-auto flex flex-col gap-4">
						<h3 class="text-3xl font-semibold text-white">
							Raster is <span class="text-[var(--color-daisy-yellow)]">faster.</span>
						</h3>

						<p>
							Not only is Raster the fastest DAM on the planet, it has smart features so your team
							performs faster too.
						</p>
					</div>
				</Card>
			</div>

			<div class="col-span-1 col-start-2">
				<Card className="p-0">
					<CardImage />
				</Card>
			</div>

			<div class="col-span-1 col-start-3">
				<Card>Item 1</Card>
			</div>
		</div>
	</Container>
</section>

<style>
	:root {
		--color-daisy-yellow: #ffb800;
	}

	@keyframes dash {
		100% {
			stroke-dashoffset: 100;
		}
	}

	.dash-strokes {
		stroke-dasharray: 5;
		stroke-dashoffset: 0;
		animation: dash 5s linear infinite;
	}

	.stroke-daisy-yellow {
		stroke: var(--color-daisy-yellow);
	}
</style>
