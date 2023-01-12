/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: "rgba(var(--accent-color))",
			},
			fontFamily: {
				secondary: ["Antonio", "sans-serif"]
			}
		},
	},
	plugins: [],
}
