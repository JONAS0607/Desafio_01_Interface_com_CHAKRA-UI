import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		dark: {
			black: '#000000',
			headings_text: '#47585b',
			info: '#999999',
			info_50: '#cccccc',
		},
		light: {
			white: '#ffffff',
			headings_text: '#f5f8fa',
			info: '#dadada',
		},
		highlight: '#ffba08',
		highlight_50: '#ffdc83',
	},
	fonts: {
		heading: 'Poppins',
		body: 'Poppins',
	},
	styles: {
		global: {
			body: {
				bg: 'gray.100',
				color: 'gray.900',
			},
		},
	},
});
