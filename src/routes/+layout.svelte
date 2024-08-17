<script lang="ts">
	import '../globals.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<title>Home</title>

<div class="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
