import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			xs: '0.75rem',
			sm: '0.8rem',
			base: '1rem',
			lg: '1.188rem',
			xl: '1.438rem',
			'2xl': '1.750rem',
			'3xl': '2.062rem',
			'4xl': '2.500rem',
			'5xl': '3rem',
		},
		extend: {
			screens: {
				// Custom screen sizes based on your requirements
				'sm': '375px', // Small devices (e.g., iPhone 6/7/8)
				'md': '768px', // Tablets and small laptops
				'lg': '1024px', // Desktops and laptops
				'xl': '1440px', // Larger desktops
				'2xl': '1920px', // Extra large screens (e.g., Full HD monitors)
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				// custom
				"white-1": 'var(--white-1)',
				"white-2": 'var(--white-2)',
				"c-hover": 'var(--hover)',
				"c-contrast": 'var(--contrast)',
				"c-primary": 'hsl(var(--primary))',
				"c-border-stork": 'var(--border-stork)',
				"c-success": 'var(--c-success)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
