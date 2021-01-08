module.exports = {
	purge: {
		content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
		options: {
			safelist: [
				"bg-gray-900",
				"bg-red-900",
				"bg-yellow-900",
				"bg-green-900",
				"bg-blue-900",
				"bg-indigo-900",
				"bg-purple-900",
				"bg-pink-900",
			],
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
