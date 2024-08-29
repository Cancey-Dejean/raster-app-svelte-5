import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		fontFamily: {
			raster: 'var(--font-raster)'
		},
		colors: {
			black: 'hsl(var(--color-black) / <alpha-value>)',
			white: 'hsl(var(--color-white) / <alpha-value>)',
			border: 'hsl(var(--border) / <alpha-value>)',
			input: 'hsl(var(--input) / <alpha-value>)',
			ring: 'hsl(var(--ring) / <alpha-value>)',
			background: 'hsl(var(--background) / <alpha-value>)',
			foreground: 'hsl(var(--foreground) / <alpha-value>)',

			gray: {
				DEFAULT: 'hsl(var(--color-gray-500) / <alpha-value>)',
				300: 'hsl(var(--color-gray-300) / <alpha-value>)'
			},
			green: {
				400: 'hsl(var(--color-green-400) / <alpha-value>)',
				500: 'hsl(var(--color-green-500) / <alpha-value>)'
			},
			yellow: {
				500: 'hsl(var(--color-yellow-500) / <alpha-value>)'
			},
			purple: {
				500: 'hsl(var(--color-purple-500) / <alpha-value>)'
			},
			red: {
				DEFAULT: 'hsl(var(--color-red-500) / <alpha-value>)'
			},
			primary: {
				DEFAULT: 'hsl(var(--color-red-500) / <alpha-value>)'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
				foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
				foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
				foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
				foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
				foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
			},
			card: {
				DEFAULT: 'hsl(var(--card) / <alpha-value>)',
				foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
			}
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
