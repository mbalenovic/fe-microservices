import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microReact",
      filename: "microReact.js",
      exposes: {
        "./Dashboard": "./src/routes/Dashboard/Dashboard.tsx",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
  },
});
