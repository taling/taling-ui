"use client";

import { createContext } from "react";


/**
 * @description 앱의 심사들을 위해 다르게 정보를 표시해야 하는 경우를 위해 사용합니다.
 */
export const TalingAppIsPreviewVersionContext = createContext({
  isPreviewVersion: false, 
});

