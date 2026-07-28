import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://abdul-rafeh.github.io",
  output: "static",
  vite: {
    optimizeDeps: {
      noDiscovery: true,
    },
  },
});
