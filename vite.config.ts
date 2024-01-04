import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), solid()],
  optimizeDeps: {
    // To fix:
    // Error: Unrecognized extension value in extension set ([object Object]).
    // This sometimes happens because multipleinstances of @codemirror / state are loaded, breaking instanceof checks.
    include: ["@codemirror/state", "@codemirror/view"],
  },
});
