import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./routes/Dashboard/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>
);
