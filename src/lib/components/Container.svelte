<script lang="ts">
	import { cn } from '$lib/utils.js';

	const containerSizes = {
		base: 'max-w-[1280px]',
		contained: 'max-w-[1170px]',
		compact: 'max-w-[900px]'
	};

	type ContainerSize = keyof typeof containerSizes;

	type $$Props = {
		size?: 'base' | 'contained' | 'compact';
		className?: string;
	};

	export let size: ContainerSize = 'base';
	export let className = '';
</script>

<div class={cn('mx-auto w-full', containerSizes[size], className)}>
	<slot />
</div>
