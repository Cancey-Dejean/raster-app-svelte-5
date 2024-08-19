<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ContentVideoImage from '$lib/components/ContentVideoImage/ContentVideoImage.svelte';

	const methodSteps = [
		{
			name: 'Organize',
			title: 'AI-driven organization',
			description:
				"Folders are so 1993. Raster's out of the box, class-leading AI organizes your images with smart tags and makes it easier to store and find your digital assets. Customize your tags and create the ultimate organization system and workflow.",
			video: '/videos/raster_organize.mp4'
		},
		{
			name: 'Edit',
			title: 'Nondestructive, collaborative editing',
			description:
				'Was "IMG_3612_final.jpg" the approved version? Or was it "IMG_3612_final2.jpg"? Where\'s the original? File-based image storage solutions like Dropbox or Google Drive are not suited for photo workflows. Stop downloading, editing, and uploading infinite versions, and edit them in Raster.',
			video: '/videos/raster_edit.mp4'
		},
		{
			name: 'Ship',
			title: 'Set up once. Ship forever.',
			description:
				"Shipping Raster may be more than just a DAM, but it's also a very good DAM. Powered by our in-house CDN built on AWS and Vercel, Raster is backed by technology that serves billions of images a day. Nothing is faster than Raster.",
			video: '/videos/raster_ship.mp4'
		}
	];
</script>

<section>
	<Container className="flex items-start gap-6">
		<div class="w-1/3 md:sticky md:top-24 md:pr-1">
			<h2 class="mb-6 max-w-[300px] text-4xl font-semibold text-white md:text-5xl">
				Meet the Raster Method.
			</h2>

			<p class="max-w-[280px]">
				The Raster method reduces time to ship photography and removes friction across marketing,
				design, and engineering teams, distilling a 25-minute process into a 30-second one.
			</p>

			<span
				class="mt-8 inline-block self-start rounded-md border border-white/20 px-3 py-1 text-sm font-medium text-white"
				>Guide coming soon
			</span>
		</div>

		<div class="flex flex-col gap-8 space-y-12 divide-y divide-white/20 md:w-2/3">
			{#each methodSteps as { name, title, description, video }, index}
				<ContentVideoImage number={index + 1} {name} {title} {description} {video} />
			{/each}
		</div>
	</Container>
</section>
