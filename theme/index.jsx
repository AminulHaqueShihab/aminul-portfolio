import {  extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

export const colors = {
	primary: {
		light: '#DCDEDD',
		dark: '#252934',
	},
	primaryDark: {
		light: '#4b4643',
		dark: '#DCDEDD',
	},
	secondary: {
		light: '#74483F',
		dark: '#A77267',
	},
	tertiary: {
		light: '#736CED',
		dark: '#0056b3',
	},
	subtle: {
		light: 'gray.400',
		dark: '#FFFFFF',
	},
	background: {
		light: '#f9f9f9',
		dark: '#red',
	},
	bg: {
		light: '',
		dark: '#343a40',
	},
};

export default extendTheme({
	config,
	colors,
});
