/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config } */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'selector',
};
