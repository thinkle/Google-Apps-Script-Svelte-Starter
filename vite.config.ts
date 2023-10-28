import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  root: "./src/svelte/",
  build: {
    outDir: "../../dist",
    emptyOutDir: true, // Ensure the output directory is empty
    // Inline HTML and CSS
    rollupOptions: {},
  },
});
