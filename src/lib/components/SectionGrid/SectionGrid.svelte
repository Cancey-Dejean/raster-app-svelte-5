<script>
	import Container from '$lib/components/Container.svelte';
	import Card from '$lib/components/ui/cards/Card/Card.svelte';
	import CardImageOnly from '$lib/components/ui/cards/Card/CardImageOnly/CardImageOnly.svelte';
</script>

<section>
	<Container>
		<h2 class="text-3xl font-semibold text-white">A photo manager unlike any other.</h2>

		<div class="grid grid-cols-3 gap-6">
			<!-- three columns -->
			<div class="col-span-1 col-start-1">
				<Card>Item 1</Card>
			</div>
			<div class="col-span-1 col-start-2">
				<Card>Item 1</Card>
			</div>
			<div class="col-span-1 col-start-3">
				<Card>
					<CardImageOnly />
				</Card>
			</div>

			<!-- Two Thirds columns -->
			<div class="col-span-1 col-start-1">
				<Card>
					<CardImageOnly />
				</Card>
			</div>
			<div class="col-span-2 col-start-2">
				<Card>Item 1</Card>
			</div>
		</div>
	</Container>
</section>
