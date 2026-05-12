import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const nextTypeScript = require("eslint-config-next/typescript");

const config = [
	{
		linterOptions: {
			reportUnusedDisableDirectives: false,
		},
		ignores: [
			"**/node_modules/**",
			".next/**",
			".next*/**",
			".next-*/**",
			"**/.next/**",
			"**/.next*/**",
			"**/.next-*/**",
			"**/dist/**",
			"**/out/**",
			"**/coverage/**",
		],
	},
	...nextCoreWebVitals,
	...nextTypeScript,
	{
		rules: {
			"react-hooks/set-state-in-effect": "off",
			"@next/next/no-img-element": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
			"prefer-rest-params": "off",
			"@next/next/no-html-link-for-pages": "off",
		},
	},
	{
		files: [
			"src/scrapers/**/*.{ts,tsx}",
			"src/**/__tests__/**/*.{ts,tsx}",
			"src/**/*.{test,spec}.{ts,tsx}",
		],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"no-unused-vars": "off",
		},
	},
	{
		files: ["cypress/**/*.{ts,tsx}"],
		rules: {
			"@typescript-eslint/no-unused-expressions": "off",
			"@typescript-eslint/no-namespace": "off",
		},
	},
];

export default config;
