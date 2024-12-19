"use client";

// src/components/dev-marker/index.tsx
import { useContext, useEffect, useState } from "react";

// src/store/devMarkerStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var devMarkerStore = create()(
  persist(
    (set) => ({
      hideSession: false,
      setHideSession: (state) => set({ hideSession: state })
    }),
    {
      name: "dev-marker-storage",
      getStorage: () => sessionStorage
    }
  )
);

// src/components/app-context/index.tsx
import { createContext } from "react";
var TalingAppContext = createContext(false);

// src/components/dev-marker/index.tsx
var DevMarker = () => {
  const [isShowing, setIsShowing] = useState(false);
  const appContext = useContext(TalingAppContext);
  const [isDev, setIsDev] = useState(false);
  const [devMsag, setDevMsg] = useState(
    `\uAC1C\uBC1C/\uD14C\uC2A4\uD2B8 \uBAA8\uB4DC\uC5D0\uC6A9 - ${appContext ? "APP" : "WEB"}`
  );
  const { hideSession, setHideSession } = devMarkerStore();
  useEffect(() => {
    if (!window) return;
    const devDomains = ["local", "dev", "test", "vercel.app", "172."];
    const domain = window.location.hostname;
    if (domain.match(new RegExp(devDomains.join("|")))) {
      setIsDev(true);
      setIsShowing(true);
    }
  }, []);
  if (isDev && !hideSession) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full bg-taling-pink-50 border-b-2 border-b-taling-pink" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-6 items-center relative mx-auto max-w-7xl w-full" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto text-xs font-bold" }, "\u{1F916} ", devMsag), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute right-0 text-xs px-2 sm:px-8 cursor-pointer underline",
        onClick: () => {
          setHideSession(true);
        }
      },
      "\uC774 \uC138\uC158\uC5D0\uC11C \uADF8\uB9CC \uBCF4\uAE30"
    )));
  } else {
    return null;
  }
};
var dev_marker_default = DevMarker;
export {
  dev_marker_default as default
};
//# sourceMappingURL=index.mjs.map