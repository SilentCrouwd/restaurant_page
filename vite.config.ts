import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/restaurant_page",
  plugins: [tailwindcss()],
});
