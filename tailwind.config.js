/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
	// Important: This prevents Tailwind from conflicting with Chakra UI
	corePlugins: {
		preflight: false, // Disable Tailwind's CSS reset to avoid conflicts with Chakra UI
	},
};
