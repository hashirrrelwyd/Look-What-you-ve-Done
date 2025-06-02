import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CursorProvider } from "./context/CursorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </StrictMode>
);
