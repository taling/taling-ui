import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Toaster as SonnerToaster } from "sonner";

export function CustomToaster() {
  return (
    <SonnerToaster
      expand={true}
      visibleToasts={2}
      icons={{ success: <CheckCircleIcon className="w-4 h-4" /> }}
      toastOptions={{
        unstyled: true,
        classNames: {
          // toast: "!bg-transparent !border-0 !p-0 !shadow-none",
          // title: "!m-0",
          // description: "!m-0",
        },
      }}
    />
  );
}
