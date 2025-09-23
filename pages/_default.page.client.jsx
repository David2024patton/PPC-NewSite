import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import App from "../src/App";

// This is the client-side entry point for Vike.
// It hydrates the React application, ensuring all necessary providers are available.
async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext;
  const container = document.getElementById("react-root");

  if (!container) {
    throw new Error("Root element #react-root not found");
  }

  hydrateRoot(
    container,
    <PageShell pageContext={pageContext}>
      <App {...pageProps} />
    </PageShell>
  );
}

export { onRenderClient };