module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
	},
	variants: {},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
