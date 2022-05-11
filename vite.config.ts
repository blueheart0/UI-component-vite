import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from '@emotion/react'`
  },
  plugins: [react(), checker({ typescript: true })]
});
