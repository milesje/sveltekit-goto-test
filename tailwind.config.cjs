const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')

const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				nunito: ['nunito']
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			blues: colors.blue,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			violet: colors.violet,
			primary: {
				light: '#1D345D',
				dark: '#17202A',
				DEFAULT: '#1D345D'
			},
			surface: {
				light: '#FBFCFC',
				dark: '#CACFD2',
				DEFAULT: '#FBFCFC',
				alt: '#E0E0E0'
			},
			'me-contact': {
				light: '#a4d5e2',
				dark: '#3b8194',
				DEFAULT: '#a4d5e2'
			},
			'me-mga': {
				light: '#e6edd7',
				dark: '#385723',
				DEFAULT: '#a9d18e'
			},
			'me-orange': {
				light: '#fff176',
				dark: '#e65100',
				DEFAULT: '#fb8c00'
			},
			'me-ic': {
				light: '#ebdef0',
				dark: '#5B2C6F',
				DEFAULT: '#bb8fce'
			}
		}
	},
	plugins: [forms]
}

module.exports = config
