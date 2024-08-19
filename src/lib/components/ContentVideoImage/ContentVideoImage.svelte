<script lang="ts">
	type ContentVideoImageProps = {
		number?: number;
		name: string;
		title: string;
		description: string;
		video: string;
	};

	const { number, name, title, description, video = '' } = $props();
</script>

<div class="py-12">
	<div>
		<h3 class="mb-4 flex items-center gap-4 text-xl text-white">
			<span class="flex size-[46px] items-center justify-center rounded-full border border-red-500">
				{number}
			</span>
			<span>{name}</span>
		</h3>

		<h4 class="mb-4 text-2xl text-white md:text-4xl">{title}</h4>

		<p class="mb-12 max-w-[60ch] text-base">
			{description}
		</p>

		<video src={video ? video : '/videos/placeholder.mp4'} autoplay muted loop class="rounded-lg"
		></video>
	</div>
</div>
