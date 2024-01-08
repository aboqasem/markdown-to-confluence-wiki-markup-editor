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
          enabled: false,
        },
      },
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    testTransformMode: { web: ["/.[jt]sx?$/"] },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
