import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";

// PageShell component wraps the entire application with necessary providers.
// It provides routing, helmet context, and internationalization context.
function PageShell({ children, pageContext }) {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <I18nextProvider i18n={i18n}>
            {children}
          </I18nextProvider>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export { PageShell };