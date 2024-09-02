/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
