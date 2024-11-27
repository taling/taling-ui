import WaitingButton from "@taling-ui/buttons/waiting-button";
import LoadingSpinner from "@taling-ui/loading/spinner";
import { Button } from "../button";

interface DialogButtonsProps {
  cancelLabel: string;
  confirmLabel: string;
  onCancel?: (arg?: any) => void;
  onConfirm?: (arg?: any) => void;
  onPromiseCancel?: (arg?: any) => Promise<boolean>;
  onPromiseConfirm?: (arg?: any) => Promise<boolean>;
  setIsOpen?: (arg: boolean) => void;
}

export default function DialogButtons({
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm,
  setIsOpen,
}: DialogButtonsProps) {
  return (
    <div className="flex gap-2">
      {!onPromiseCancel && (
        <Button
          size={"md"}
          variant={"outlinedSecondary"}
          className="w-full"
          onClick={() => {
            onCancel?.();
            setIsOpen?.(false);
          }}
        >
          {cancelLabel}
        </Button>
      )}
      {onPromiseCancel && (
        <WaitingButton
          className="w-full"
          render={{
            normal: (
              <Button
                size={"md"}
                variant={"outlinedSecondary"}
                className="w-full"
              >
                {cancelLabel}
              </Button>
            ),
            waiting: (
              <Button
                size={"md"}
                variant={"outlinedSecondary"}
                className="w-full"
              >
                <LoadingSpinner className="w-4 h-4 animate-spin" />
              </Button>
            ),
          }}
          onClick={async () => {
            await onPromiseCancel();
            setIsOpen?.(false);
            return false;
          }}
        />
      )}
      {!onPromiseConfirm && (
        <Button
          size={"md"}
          variant={"solidPrimary"}
          className="w-full"
          onClick={() => {
            onConfirm?.();
            setIsOpen?.(false);
          }}
        >
          {confirmLabel}
        </Button>
      )}
      {onPromiseConfirm && (
        <WaitingButton
          className="w-full"
          render={{
            normal: (
              <Button size={"md"} variant={"solidPrimary"} className="w-full">
                {confirmLabel}
              </Button>
            ),
            waiting: (
              <Button size={"md"} variant={"solidPrimary"} className="w-full">
                <LoadingSpinner className="w-4 h-4 animate-spin" />
              </Button>
            ),
          }}
          onClick={async () => {
            await onPromiseConfirm();
            setIsOpen?.(false);
            return false;
          }}
        />
      )}
    </div>
  );
}
