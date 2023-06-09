"use client";

import { useEffect, useState } from "react";
import { devMarkerStore } from "../../store/devMarkerStore";

const DevMarker = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isDev, setIsDev] = useState<boolean>(false);
  const [devMsag, setDevMsg] = useState<string>("개발/테스트 모드에용");
  const { hideSession, setHideSession } = devMarkerStore();
  useEffect(() => {
    if (!window) return;
    const devDomains = ["local", "dev", "test", "vercel.app"];
    const domain = window.location.hostname;
    if (domain.match(new RegExp(devDomains.join("|")))) {
      setIsDev(true);
      setIsShowing(true);
    }
  }, []);

  if (isDev && !hideSession) {
    return (
      <div className="flex h-6 w-full items-center bg-taling-pink-50 border-b-2 border-b-taling-pink-400">
        <div className="mx-auto text-xs font-bold">🤖 {devMsag}</div>
        <div
          className="absolute right-0 text-xs px-2 sm:px-8"
          onClick={() => {
            setHideSession(true);
          }}
        >
          이 세션에서 그만 보기
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default DevMarker;
