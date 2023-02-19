import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "Modern newspapers",
    short_name: "Newspapers",
    description:
      "Newspaper app with user-friendly interface and interaction and update features",
    theme_color: "#ffffff",
    icons: [
      {
        src: "images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "images/android-chrome-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  },
});

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    vitePWA,
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    tsconfigPaths(),
  ],
  server: { port: 3001 },
});
