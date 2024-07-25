"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@taling-ui/ui/toast";
import { useToast } from "@taling-ui/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
      <ToastProvider>
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
              <Toast className="" key={id} {...props}>
                <div className="grid w-full gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                      <ToastDescription>{description}</ToastDescription>
                  )}
                </div>
                {action}
                <ToastClose />
              </Toast>
          );
        })}
        <ToastViewport position={toasts[0].position} />;
      </ToastProvider>
  );
}
