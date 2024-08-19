<script lang="ts">
	import { cn } from '$lib/utils';
	const { children, className = '' } = $props();
</script>

<div
	class={cn(
		'flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gray-500/10 px-12 py-16',
		className
	)}
>
	{@render children()}
</div>
