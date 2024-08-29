<script lang="ts">
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import Container from '$lib/components/Container.svelte';
	import NewTabIcon from '$lib/components/ui/svgs/NewTabIcon.svelte';
	import type { CtaButton, LinkItem } from '../../types';
	import RasterLogo from '$lib/components/ui/svgs/RasterLogo.svelte';

	const linkStyles =
		'relative flex items-center gap-1 px-3 py-1 transition-all duration-300 ease-in-out rounded-[6px] hover:bg-white/10';

	const navItems: LinkItem[] = [
		{ label: 'Changelog', url: '/changelog', newTab: false },
		{ label: 'Pricing', url: '/pricing', newTab: false },
		{ label: 'Blog', url: '/blog', newTab: false },
		{ label: 'Docs', url: '/docs', newTab: true },
		{ label: 'Careers', url: '/careers', newTab: false }
	];

	const ctaButtons: CtaButton[] = [
		{ label: 'Register', url: '/register', newTab: false, cta: true },
		{ label: 'Sign in', url: '/sign-in', newTab: false, cta: false }
	];

	function menuOpen(): void {
		const hamburger = document.querySelector('.hamburger');
		const mobileMenu = document.querySelector('.mobile-menu');
		hamburger?.classList.toggle('hamburger-open');
		mobileMenu?.classList.toggle('menu-open');
		document.body.classList.toggle('overflow-hidden');
		// alert('Clicked');
	}
</script>

<header class="sticky top-0 z-50 bg-black/80 text-white">
	<Container
		className="flex items-stretch justify-between py-3 gap-5 relative border-b border-b-white/10"
	>
		<a href="/" class="relative z-50 flex items-center gap-2">
			<RasterLogo />
			<span class="hidden text-lg font-semibold md:inline-block">Raster</span>
		</a>

		<nav
			class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 md:flex"
		>
			<ul class="flex items-center gap-1">
				{#each navItems as { url, label, newTab }}
					<li>
						<a
							href={url}
							class={twMerge(
								linkStyles,
								'hover:text-primary',
								$page.url.pathname === url ? 'text-primary' : 'text-white'
							)}
							rel={newTab ? 'noopener noreferrer external nofollow' : 'noReferrer'}
						>
							{label}

							{#if newTab}
								<NewTabIcon />
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<ul class="hidden items-center gap-2 md:flex">
			{#each ctaButtons as { url, label, newTab, cta }}
				<li>
					<a
						href={url}
						rel={newTab ? 'noopener noreferrer' : 'noreferrer'}
						class={twMerge(linkStyles, cta ? 'bg-primary/20 text-primary' : 'text-white')}
					>
						{label}
						{#if newTab}
							<NewTabIcon />
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<button
			type="button"
			class="hamburger flex size-12 flex-col items-center justify-center gap-1.5 md:hidden"
			on:click={menuOpen}
		>
			<span class="sr-only">Open Mobile Menu</span>
			<span class="line-1"></span>
			<span class="line-2"></span>
		</button>
	</Container>

	<div class="mobile-menu backdrop-blur-[12px]">
		<ul class="flex w-full flex-col justify-center gap-4">
			{#each navItems as { url, label, newTab }}
				<li>
					<a
						href={url}
						class={twMerge(
							'flex items-center gap-1 px-8 py-2 text-2xl',
							$page.url.pathname === url ? 'text-primary' : 'text-white'
						)}
						rel={newTab ? 'noOpener noReferrer' : 'noReferrer'}
					>
						{label}

						{#if newTab}
							<NewTabIcon />
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style>
	header {
		&:after {
			-webkit-backdrop-filter: blur(12px);
			backdrop-filter: blur(12px);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: -10;
			height: calc(100% + 32px);
			transform: translateZ(0);
			content: '';
			-webkit-mask-image: -webkit-gradient(
				linear,
				left 70%,
				left 100%,
				from(rgb(0, 0, 0)),
				to(rgba(0, 0, 0, 0))
			);
			mask-image: -webkit-gradient(
				linear,
				left 70%,
				left 100%,
				from(rgb(0, 0, 0)),
				to(rgba(0, 0, 0, 0))
			);
		}
	}

	.hamburger {
		gap: 6px;
		z-index: 9999;

		span {
			position: absolute;
			width: 1.5rem;
			background-color: currentColor;
			height: 2px;
			top: 50%;
			transform-origin: center;
			transition:
				transform 0.7s cubic-bezier(0.86, 0, 0.07, 1),
				background-color 0.7s cubic-bezier(0.86, 0, 0.07, 1);
		}

		.line-1 {
			transform: translateY(-4px);
		}

		.line-2 {
			transform: translateY(4px);
		}

		&.hamburger-open {
			span {
				&.line-1 {
					transform: rotate(45deg);
				}

				&.line-2 {
					transform: rotate(-45deg);
				}
			}
		}
	}

	.mobile-menu {
		transform: translateY(-100%);
		transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
		position: fixed;
		inset: 0;
		display: flex;
		height: 100vh;
		width: 100vw;
		backdrop-filter: blur(12px);

		&.menu-open {
			transform: translateY(0);
		}
	}
</style>
