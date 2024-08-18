<script lang="ts">
	import { cn } from '$lib/utils';

	const { children, className = '' } = $props();
</script>

<div class={cn('h-full py-16 px-12 flex flex-col overflow-hidden rounded-lg border border-white/10', className)}>
	{@render children()}
</div>
