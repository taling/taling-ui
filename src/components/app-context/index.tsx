"use client";

import { createContext } from "react";

export const TalingAppContext = createContext(false);

export function appPrefix(path: string) {
  return `/app${path}`;
}
