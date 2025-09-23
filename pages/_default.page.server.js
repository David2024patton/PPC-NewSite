import React from "react";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageShell } from "./PageShell";
import i18n from "../src/i18n";
import App from "../src/App";

// This function is responsible for server-side rendering of the React application.
// It takes pageContext as input and returns an object with document HTML, title, and description.
async function onRenderHtml(pageContext) {
  const { Page, pageProps, documentProps } = pageContext;
  const lang = pageContext.routeParams.lang || "en";

  // Set the language for i18n on the server side
  await i18n.changeLanguage(lang);

  // Render the React component to a string
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <App {...pageProps} />
    </PageShell>
  );

  // Get title and description from documentProps or i18n translations
  const title = documentProps.title || i18n.t("document.title");
  const description = documentProps.description || i18n.t("document.description");

  // Construct the full HTML document
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="${lang}">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return { documentHtml };
}

// This function runs before rendering and extracts the language from the URL.
// It sets the language in pageContext, which can then be used by the application.
async function onBeforeRender(pageContext) {
  const lang = pageContext.routeParams.lang || "en";
  return { pageContext: { pageProps: { lang } } };
}

export { onBeforeRender, onRenderHtml };