import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app1: path.resolve(__dirname, "../app1/src/main.tsx"),
      app2: path.resolve(__dirname, "../app2/src/main.tsx"),
    },
  },
});
