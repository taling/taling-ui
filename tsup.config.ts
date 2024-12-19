import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    // 메인 entry point
    "src/index.ts",

    // components
    "src/components/**/*.{ts,tsx}",

    // constants
    "src/constants/**/*.{ts,tsx}",

    // hooks
    "src/hooks/**/*.{ts,tsx}",

    // utils
    "src/utils/**/*.{ts,tsx}",

    // store
    "src/store/**/*.{ts,tsx}",
  ],
  format: ["esm", "cjs"],
  dts: {
    // dts 생성을 병렬로 처리하지 않음
    entry: {
      index: "src/index.ts",
    },
    resolve: true,
  },
  sourcemap: true,
  clean: true,
  target: "es2019",
  splitting: false,
  outDir: "dist",
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".js" : ".mjs",
    };
  },
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
});
