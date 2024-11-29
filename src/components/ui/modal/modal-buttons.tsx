import WaitingButton from "@taling-ui/buttons/waiting-button";
import LoadingSpinner from "@taling-ui/loading/spinner";
import { ModalType } from ".";
import { Button } from "../button";
import { TextButton } from "../text-button";

interface ModalButtonsProps {
  cancelLabel: string;
  confirmLabel: string;
  modalType: ModalType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onCancel?: (arg?: any) => void;
  onConfirm?: (arg?: any) => void;
  onPromiseCancel?: (arg?: any) => Promise<boolean>;
  onPromiseConfirm?: (arg?: any) => Promise<boolean>;
}

export default function ModalButtons({
  cancelLabel,
  confirmLabel,
  modalType,
  leftIcon,
  rightIcon,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm,
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
              return false;
            }}
          />
        )}
      </>
    );
  }

  if (modalType === "secondary") {
    return (
      <div className="flex gap-2 self-end">
        {!onPromiseCancel && (
          <TextButton
            size={"lg"}
            variant={"secondary"}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onClick={() => {
              onCancel?.();
            }}
          >
            {cancelLabel}
          </TextButton>
        )}
        {onPromiseCancel && (
          <WaitingButton
            render={{
              normal: (
                <TextButton
                  size={"lg"}
                  variant={"secondary"}
                  leftIcon={leftIcon}
                  rightIcon={rightIcon}
                >
                  {cancelLabel}
                </TextButton>
              ),
              waiting: (
                <TextButton size={"lg"} variant={"secondary"}>
                  <LoadingSpinner className="w-4 h-4 animate-spin" />
                </TextButton>
              ),
            }}
            onClick={async () => {
              await onPromiseCancel();
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
            return false;
          }}
        />
      )}
    </div>
  );
}
