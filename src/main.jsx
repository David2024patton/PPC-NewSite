import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <I18nextProvider i18n={i18n}>
          <App pageProps={{}} />
        </I18nextProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
