import React from "react";
import { createRoot } from "react-dom/client";
import { start } from "vike/client";
import "./index.css";

// This is the client-side entry point for the Vike application.
// It initializes the Vike client and starts the rendering process.
async function main() {
  await start();
}

main();
