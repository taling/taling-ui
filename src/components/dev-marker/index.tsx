"use client";

import { useContext, useEffect, useState } from "react";
import { devMarkerStore } from "../../store/devMarkerStore";
import { TalingAppContext } from "../app-context";

const DevMarker = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const appContext = useContext(TalingAppContext);
  const [isDev, setIsDev] = useState<boolean>(false);
  const [devMsag, setDevMsg] = useState<string>(
    `개발/테스트 모드에용 - ${appContext ? "APP" : "WEB"}`,
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
    return (
      <div className="w-full bg-taling-pink-50 border-b-2 border-b-taling-pink">
        <div className="flex h-6 items-center relative mx-auto max-w-7xl w-full">
          <div className="mx-auto text-xs font-bold">🤖 {devMsag}</div>
          <div
            className="absolute right-0 text-xs px-2 sm:px-8 cursor-pointer underline"
            onClick={() => {
              setHideSession(true);
            }}
          >
            이 세션에서 그만 보기
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default DevMarker;
