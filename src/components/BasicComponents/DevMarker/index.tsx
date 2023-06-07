import { useEffect, useState } from "react";

const DevMarker = () => {
  const [isDev, setIsDev] = useState<boolean>(false);
  const [devMsag, setDevMsg] = useState<string>("개발/테스트 모드에용");

  useEffect(() => {
    if (!window) return;
    const devDomains = ["local", "dev", "test", "vercel.app"];
    const domain = window.location.hostname;
    if (domain.match(new RegExp(devDomains.join("|")))) {
      setIsDev(true);
    }
  }, []);

  if (isDev) {
    return (
      <div className="flex h-6 w-full items-center bg-taling-pink-50 border-b-2 border-b-taling-pink-400">
        <div className="mx-auto text-xs">🤖 {devMsag}</div>
      </div>
    );
  } else {
    return null;
  }
};
export default DevMarker;
