import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "styles/index.scss";
import App from "./App.tsx";
import "./locales/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
