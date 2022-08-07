import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { darkTheme, globalCss } from '@twidge/config/stitches.config';
import { ThemeProvider } from 'next-themes';

const globalStyles = globalCss({
	body: {
		background: '$backgroundColor',
		color: '$textColor',
		padding: '0px',
		margin: '0px',

		'::selection': {
			background: '$selectionColor',
			color: '$textColor',
		},

		'::moz-selection': {
			background: '$selectionColor',
			color: '$textColor',
		},
	},
});

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			value={{
				light: 'light',
				dark: darkTheme.className,
			}}
		>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
