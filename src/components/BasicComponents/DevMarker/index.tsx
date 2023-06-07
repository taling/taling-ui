import { useEffect, useState } from "react";

const DevMarker = () => {
  const [isDev, setIsDev] = useState<boolean>(false);
  useEffect(() => {
    setIsDev(process.env.NODE_ENV === "development");
  }, []);

  if (isDev) {
    return (
      <div className="flex h-6 w-full items-center bg-taling-purple-50">
        <div className="mx-auto text-xs">🤖 개발모드에용</div>
        {/* <div
          className="ml-1 mt-1 h-4 w-4 cursor-grab rounded-full bg-white text-center
        text-xs text-taling-purple-400 ring-2 ring-taling-purple-400"
        >
          d
        </div> */}
      </div>
    );
  } else {
    return null;
  }
};
export default DevMarker;
