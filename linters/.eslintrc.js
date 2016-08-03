module.exports = {
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	globals: {
		riot: true,
	},
	extends: 'eslint:recommended',
	rules: {
		'no-unused-vars': ['error', { argsIgnorePattern: '_$' }],
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'max-len': ['error', 120],
		'comma-dangle': ['error', 'always-multiline'],
		'curly': ['error'],
		'object-curly-newline': ['error', { multiline: true, minProperties: 3 }],
		'require-path-exists/notEmpty': 2,
		'require-path-exists/tooManyArguments': 2,
		'require-path-exists/exists': 2,
	},
	plugins: [
		'require-path-exists'
	],
}
