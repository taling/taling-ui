"use client";
import { useEffect, useState } from "react";
import { Toaster as SonnerToaster } from "sonner";

const MOBILE_BREAKPOINT = 768;

type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

const getDefaultPosition = (): ToastPosition => {
  return window.innerWidth < MOBILE_BREAKPOINT ? "bottom-center" : "top-right";
};

const getAnimationClass = (position: ToastPosition) => {
  if (position.startsWith("top")) {
    return "animate-in fade-in slide-in-from-top duration-300";
  }
  return "animate-in fade-in slide-in-from-bottom duration-300";
};

export function CustomToaster() {
  const [position, setPosition] = useState<ToastPosition>(getDefaultPosition());

  useEffect(() => {
    const handleResize = () => {
      setPosition(getDefaultPosition());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SonnerToaster
      expand={true}
      visibleToasts={2}
      position={position}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: `${
            position === "bottom-center" ? "mb-12" : ""
          } ${getAnimationClass(position)}`,
        },
      }}
    />
  );
}
