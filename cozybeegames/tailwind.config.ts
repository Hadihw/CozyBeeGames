import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		borderColor: {
			DEFAULT: 'transparent',
		},
  		colors: {
			background: '#FFE8B5', // Main background color
			textPrimary: '#6D3A25', // Main text color
			primaryButton: '#D57A32', // Primary button and link color
			primaryButtonHover: '#E98A46', // Hover state for primary elements
			accent: '#FFD69B', // Accent color for cards and other elements
			muted: '#FFE6C1', // Light background sections
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			fontFamily: {
				serif: ['var(--font-sour-gummy)', 'serif']	,
				dongle: ['var(--font-dongle)', 'serif'],
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
