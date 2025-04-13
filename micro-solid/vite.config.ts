import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    solid(),
    federation({
      name: "microSolid",
      filename: "microSolid.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
  },
  server: {
    port: 3002,
  },
});
