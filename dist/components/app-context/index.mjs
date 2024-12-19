"use client";

// src/components/app-context/index.tsx
import { createContext } from "react";
var TalingAppContext = createContext(false);
function appPrefix(path) {
  return `/app${path}`;
}
export {
  TalingAppContext,
  appPrefix
};
//# sourceMappingURL=index.mjs.map