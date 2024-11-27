import WaitingButton from "@taling-ui/buttons/waiting-button";
import LoadingSpinner from "@taling-ui/loading/spinner";
import { ModalType } from ".";
import { Button } from "../button";

interface ModalButtonsProps {
  cancelLabel: string;
  confirmLabel: string;
  modalType: ModalType;
  onCancel?: (arg?: any) => void;
  onConfirm?: (arg?: any) => void;
  onPromiseCancel?: (arg?: any) => Promise<boolean>;
  onPromiseConfirm?: (arg?: any) => Promise<boolean>;
  setIsOpen?: (arg: boolean) => void;
}

export default function ModalButtons({
  cancelLabel,
  confirmLabel,
  modalType,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm,
  setIsOpen,
}: ModalButtonsProps) {
  if (modalType === "oneButton") {
    return (
      <>
        {!onPromiseConfirm && (
          <Button
            size={"lg"}
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
                <Button size={"lg"} variant={"solidPrimary"} className="w-full">
                  {confirmLabel}
                </Button>
              ),
              waiting: (
                <Button size={"lg"} variant={"solidPrimary"} className="w-full">
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
      </>
    );
  }

  if (modalType === "secondary") {
    return (
      <div className="flex gap-4 self-end">
        {!onPromiseCancel && (
          <Button
            size={"sm"}
            variant={"outlinedSecondary"}
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
            render={{
              normal: (
                <Button size={"sm"} variant={"outlinedSecondary"}>
                  {cancelLabel}
                </Button>
              ),
              waiting: (
                <Button size={"sm"} variant={"outlinedSecondary"}>
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
            size={"sm"}
            variant={"solidPrimary"}
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
            render={{
              normal: (
                <Button size={"sm"} variant={"solidPrimary"}>
                  {confirmLabel}
                </Button>
              ),
              waiting: (
                <Button size={"sm"} variant={"solidPrimary"}>
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

  return (
    <div className="flex gap-2">
      {!onPromiseCancel && (
        <Button
          size={"lg"}
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
                size={"lg"}
                variant={"outlinedSecondary"}
                className="w-full"
              >
                {cancelLabel}
              </Button>
            ),
            waiting: (
              <Button
                size={"lg"}
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
          size={"lg"}
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
              <Button size={"lg"} variant={"solidPrimary"} className="w-full">
                {confirmLabel}
              </Button>
            ),
            waiting: (
              <Button size={"lg"} variant={"solidPrimary"} className="w-full">
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
