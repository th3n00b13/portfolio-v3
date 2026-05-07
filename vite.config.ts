import { unplugin as stylexPlugin } from "@stylexjs/unplugin";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  build: {
    cssMinify: "lightningcss",
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    devtools(),
    nitro({ preset: "bun" }),
    tanstackStart(),
    stylexPlugin.vite({ useCSSLayers: true }),
    solidPlugin({ ssr: true }),
  ],
  resolve: { tsconfigPaths: true },
});
