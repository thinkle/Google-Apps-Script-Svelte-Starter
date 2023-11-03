import { defineConfig } from "vite";

export default defineConfig({
  root: "./src/gas", // Set the root directory to src/gas
  build: {
    outDir: "../../dist", // Output directory
    assetsDir: "", // No assets directory for this build
    rollupOptions: {
      input: "./src/gas/main.ts",
      output: {
        entryFileNames: "code.js", // Output to index.js
      },
      treeshake: false,
    },
    minify: false,
    target: "es2020",
  },
});
