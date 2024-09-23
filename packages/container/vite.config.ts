import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["app1", "app2"],
    },
  },
  resolve: {
    alias: {
      app1: "/packages/app1/src/main.tsx",
      app2: "/packages/app2/src/main.tsx",
    },
  },
});
