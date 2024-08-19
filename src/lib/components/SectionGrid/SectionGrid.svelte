<script>
	import Container from '$lib/components/Container.svelte';
	import Card from '$lib/components/ui/cards/Card/Card.svelte';
</script>

<section>
	<Container>
		<h2 class="mb-20 max-w-[500px] text-2xl font-semibold text-white md:text-6xl">
			A photo manager unlike any other.
		</h2>

		<div class="grid grid-cols-3 gap-6">
			<!-- Three columns -->
			<div class="col-span-1 col-start-1">
				<Card>
					<div class="flex flex-col gap-4">
						<h3 class="text-3xl font-semibold text-white">
							Raster is <span class="text-yellow-500">faster.</span>
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
							class="dash-strokes stroke-yellow-500"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M46 1 1 55h40.5L37 91l45-54H41.5L46 1Z"
						></path>
					</svg>
				</Card>
			</div>

			<div class="col-span-1 col-start-2">
				<Card className="p-0 gap-6">
					<div class="flex flex-col gap-4 px-12 pt-16">
						<h3 class="text-3xl font-semibold text-white">
							Beautiful design inspires our best work.
						</h3>

						<p>
							Raster's user experience is built for teams that ship. No other DAM even comes close.
						</p>

						<a href="/" class="hover:text-primary">Raster Design System <span>→</span></a>
					</div>

					<div
						class="ml-12 mt-auto aspect-[4/3] bg-contain bg-right-bottom bg-no-repeat"
						style="background-image: url('/images/screenshare.png');"
					></div>
				</Card>
			</div>

			<div class="col-span-1 col-start-3">
				<Card className="p-0">
					<div
						class="aspect-[3/4] h-full bg-cover bg-center"
						style="background-image: url('/images/sky.jpeg');"
					></div>
				</Card>
			</div>

			<!-- Two Thirds columns -->
			<div class="col-span-1 col-start-1">
				<Card className="p-0">
					<div
						class="aspect-[3/4] h-full bg-cover bg-center"
						style="background-image: url('/images/card-img.jpeg');"
					></div>
				</Card>
			</div>

			<div class="col-span-2 col-start-2">
				<Card className="gap-12">
					<h3 class="text-3xl font-semibold text-white">Powerful features to get ship done</h3>

					<div class="grid h-full grid-cols-3 gap-6">
						<!-- Item 1 -->
						<div
							class="flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center"
						>
							<div class="flex h-10 items-center justify-center">
								<span
									class="rounded-md border border-white/20 px-3 py-1 text-xs font-medium text-white"
									>Coming soon</span
								>
							</div>

							<h4 class="flex gap-2 text-sm font-medium text-white">AI-powered Editor</h4>
						</div>

						<!-- Item 2 -->
						<div
							class="flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center"
						>
							<div>
								<svg
									class="h-10 rounded-md bg-yellow-500/10 p-2 text-yellow-500"
									fill="none"
									shape-rendering="geometricPrecision"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
								>
									<path d="m4 4 16 5.333L12 12l-2.667 8L4 4Z"></path>
								</svg>
							</div>

							<h4 class="flex gap-2 text-sm font-medium text-white">AI-powered Editor</h4>
						</div>

						<!-- Item 3 -->
						<div
							class="flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center"
						>
							<div>
								<span
									aria-hidden="true"
									class="flex h-10 items-center justify-center rounded-md bg-purple-500/10 px-3 font-medium text-purple-500"
									>⌘ + K</span
								>
							</div>

							<h4 class="flex gap-2 text-sm font-medium text-white">Command palette</h4>
						</div>

						<!-- Item 4 -->
						<div
							class="relative flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center transition-all duration-300 ease-in-out hover:bg-white/10"
						>
							<a href="/" class="after:absolute after:inset-0">
								<svg
									class="mb-2 h-10 rounded-md bg-red-500/10 p-2 text-red-500"
									fill="none"
									shape-rendering="geometricPrecision"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
								>
									<path
										d="M9.12132 14.8787L14.8787 9.12132M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17ZM20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"
									></path>
								</svg>
							</a>

							<h4 class="flex gap-2 text-sm font-medium text-white">
								Growing API <span
									class=" opacity-40 transition-opacity duration-300 group-hover:opacity-100"
									>→</span
								>
							</h4>
						</div>

						<!-- Item 5 -->
						<div
							class="relative flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center transition-all duration-300 ease-in-out hover:bg-white/10"
						>
							<a href="/" class="after:absolute after:inset-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									id="Layer_1"
									viewBox="0 0 200 300"
									class="h-6"
								>
									<style type="text/css">
										.st0 {
											fill: #0acf83;
										}

										.st1 {
											fill: #a259ff;
										}

										.st2 {
											fill: #f24e1e;
										}

										.st3 {
											fill: #ff7262;
										}

										.st4 {
											fill: #1abcfe;
										}
									</style>
									<title>Figma logo</title>
									<path
										id="path0_fill"
										class="st0"
										d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
									></path>
									<path
										id="path1_fill"
										class="st1"
										d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
									></path>
									<path
										id="path1_fill_1_"
										class="st2"
										d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
									></path>
									<path
										id="path2_fill"
										class="st3"
										d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
									></path>
									<path
										id="path3_fill"
										class="st4"
										d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
									></path>
								</svg>
							</a>

							<h4 class="flex gap-2 text-sm font-medium text-white">
								Figma Plugin <span
									class=" opacity-40 transition-opacity duration-300 group-hover:opacity-100"
									>→</span
								>
							</h4>
						</div>

						<!-- Item 6 -->
						<div
							class="flex flex-col items-center justify-center gap-2 rounded-md bg-white/5 p-4 text-center"
						>
							<div class="flex h-10 items-center justify-center">
								<span
									class="rounded-md border border-white/20 px-3 py-1 text-xs font-medium text-white"
									>Coming soon
								</span>
							</div>

							<h4 class="flex gap-2 text-sm font-medium text-white">
								<span
									><svg
										class="w-3.5"
										fill="currentColor"
										shape-rendering="geometricPrecision"
										viewBox="0 0 24 24"
										><path
											d="M18.914 8.182c-.139.108-2.597 1.492-2.597 4.572 0 3.561 3.128 4.821 3.221 4.852-.014.077-.497 1.726-1.649 3.406-1.027 1.478-2.1 2.954-3.731 2.954-1.633 0-2.053-.948-3.936-.948-1.836 0-2.49.98-3.982.98-1.493 0-2.534-1.369-3.732-3.049C1.121 18.977 0 15.912 0 13.003c0-4.665 3.034-7.14 6.02-7.14 1.586 0 2.908 1.042 3.904 1.042.948 0 2.426-1.104 4.231-1.104.684 0 3.142.062 4.76 2.38Zm-5.616-4.356c.747-.886 1.275-2.115 1.275-3.344 0-.17-.015-.343-.046-.482-1.214.046-2.66.809-3.53 1.82-.684.777-1.323 2.006-1.323 3.251 0 .187.032.375.046.435.077.014.202.03.326.03 1.09 0 2.46-.729 3.252-1.71Z"
										></path></svg
									></span
								>
								Mac App
							</h4>
						</div>
					</div>
				</Card>
			</div>

			<!-- Three columns-->
			<div class="col-span-1 col-start-1">
				<Card>
					<span
						class="mb-auto self-start rounded-md border border-white/20 px-3 py-1 text-sm font-medium text-white"
						>Shipping August 2023
					</span>

					<div class="flex flex-col gap-4">
						<h3 class="text-3xl font-semibold text-white">
							Deploy once.
							<br />
							Ship forever.
						</h3>

						<p>
							Deploy a unique Raster image URL and edit the image in post — even after it’s been
							shipped.
						</p>
					</div>
				</Card>
			</div>

			<div class="col-span-1 col-start-2">
				<Card className="p-0">
					<!-- <enhanced:img src="/static/images/cave.jpeg?w=389" alt="Hello" class="aspect-[3/4]" /> -->
					<div
						class="aspect-[3/4] h-full bg-cover bg-center"
						style="background-image: url('/images/cave.jpeg');"
					></div>
				</Card>
			</div>

			<div class="col-span-1 col-start-3">
				<Card>
					<div class="mb-auto flex flex-col gap-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="101"
							height="103"
							fill="none"
							class="mb-auto text-purple-500"
						>
							<path
								fill="currentColor"
								d="M1.54 22.5a1 1 0 1 0 0 2v-2ZM24.79 1.25a1 1 0 1 0-2 0h2Zm-2 44.5a1 1 0 0 0 2 0h-2ZM46.04 24.5a1 1 0 1 0 0-2v2Zm-44.5 0c12.84 0 23.25-10.41 23.25-23.25h-2c0 11.736-9.514 21.25-21.25 21.25v2Zm23.25 21.25c0-12.84-10.41-23.25-23.25-23.25v2c11.736 0 21.25 9.514 21.25 21.25h2Zm0 0c0-11.736 9.514-21.25 21.25-21.25v-2c-12.84 0-23.25 10.41-23.25 23.25h2Zm-2-44.5c0 12.84 10.41 23.25 23.25 23.25v-2c-11.736 0-21.25-9.514-21.25-21.25h-2ZM20.79 61.75a1 1 0 0 0 0 2v-2ZM61.04 23.5a1 1 0 1 0-2 0h2Zm-2 78.5a1 1 0 0 0 2 0h-2Zm40.25-38.25a1 1 0 1 0 0-2v2Zm-78.5 0c22.23 0 40.25-18.02 40.25-40.25h-2c0 21.125-17.125 38.25-38.25 38.25v2ZM61.04 102c0-22.23-18.02-40.25-40.25-40.25v2c21.125 0 38.25 17.125 38.25 38.25h2Zm0 0c0-21.125 17.125-38.25 38.25-38.25v-2c-22.23 0-40.25 18.02-40.25 40.25h2Zm-2-78.5c0 22.23 18.02 40.25 40.25 40.25v-2c-21.125 0-38.25-17.125-38.25-38.25h-2Z"
							></path>
						</svg>
					</div>

					<div class="flex flex-col gap-4">
						<h3 class="text-3xl font-semibold text-white">
							Powered by <span class="text-purple-500">AI</span>
						</h3>

						<p>
							Not only is Raster the fastest DAM on the planet, it has smart features so your team
							performs faster too.
						</p>
					</div>
				</Card>
			</div>
		</div>
	</Container>
</section>

<style>
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
</style>
