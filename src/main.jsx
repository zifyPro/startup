import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'es',
	resources: {
		es: {
			global: global_es,
		},
		en: {
			global: global_en,
		},
	},
});
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</I18nextProvider>
	</React.StrictMode>
);
