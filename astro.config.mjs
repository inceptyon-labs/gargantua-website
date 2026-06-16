import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gargantua.inceptyon.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
