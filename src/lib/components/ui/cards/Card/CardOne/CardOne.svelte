<script lang="ts">
	import { cn } from '$lib/utils';

	const { title, description, reverse = false, className = '', children } = $props();
</script>

<div class={cn('flex py-16 px-12 gap-4 h-full', className, reverse ? 'flex-col-reverse' : 'flex-col')}>
	{#if title}
		<h3>{title}</h3>
	{/if}

	{@render children()}

	<p class="{reverse ? 'order-3' : 'order-1'}">
		{description}
	</p>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="83"
		height="92"
		class="justify-self-end {reverse ? 'mb-auto' : 'mt-auto'} "
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
</div>
