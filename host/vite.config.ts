import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        microReact: "http://localhost:3001/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
