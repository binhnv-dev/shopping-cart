module.exports = {
	extends: [
		'airbnb',
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime'
	],
	plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto'
			}
		],
		'no-control-regex': 0,
		'no-undef': 0,
		'no-unused-vars': 'off',
		'react/prop-types': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/no-unused-vars': 2,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/function-component-definition': 0,
		'no-param-reassign': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] }
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
