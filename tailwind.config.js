module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
