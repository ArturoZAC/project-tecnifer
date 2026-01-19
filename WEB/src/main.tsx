import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";

import "yet-another-react-lightbox/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />

    <Toaster richColors position="top-right" />
  </StrictMode>,
);
