import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  target: "es2019",
  external: [
    "react",
    "react-dom",
    "next",
    "@heroicons/react",
    "framer-motion",
    "dayjs",
    "zustand",
    "@radix-ui/*",
    "@headlessui/*",
  ],
  treeshake: true,
});
