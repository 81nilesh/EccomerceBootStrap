/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Indie: ["Indie Flower", "cursive"],
				QuickSand: ["Quicksand", "sans-serif"],
				Raleway: ["Raleway", "sans-serif"],
				Varela: ["Varela Round", "sans-serif"],
			},
		},
	},
	plugins: [],
};
