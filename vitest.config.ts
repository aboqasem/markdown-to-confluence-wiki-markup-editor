import type { Plugin } from "vite";
import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), solid() as unknown as Plugin],
  test: {
    deps: {
      optimizer: {
        web: {
          enabled: true,
        },
      },
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setup-vitest.ts"],
    testTransformMode: { web: ["/.[jt]sx?$/"] },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
