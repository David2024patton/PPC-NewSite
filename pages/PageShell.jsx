import React from "react";
import { BrowserRouter, StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";

// This helper function determines if the code is running on the server.
const isServer = typeof window === "undefined";

// PageShell component wraps the entire application with necessary providers.
// It provides routing, helmet context, and internationalization context.
function PageShell({ children, pageContext }) {
  const Router = isServer ? StaticRouter : BrowserRouter;
  const routerProps = isServer ? { location: pageContext.urlOriginal } : {};

  return (
    <React.StrictMode>
      <Router {...routerProps}>
        <HelmetProvider>
          <I18nextProvider i18n={i18n}>
            {children}
          </I18nextProvider>
        </HelmetProvider>
      </Router>
    </React.StrictMode>
  );
}

export { PageShell };