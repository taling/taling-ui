import {
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessUiDialog,
} from "@headlessui/react";
import DialogButtons from "./dialog-buttons";
interface DialogProps {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  isBackDropClickable?: boolean;
  isOpen?: boolean;
  onCancel?: (arg?: any) => void;
  onConfirm?: (arg?: any) => void;
  onPromiseCancel?: (arg?: any) => Promise<boolean>;
  onPromiseConfirm?: (arg?: any) => Promise<boolean>;
  setIsOpen?: (arg: boolean) => void;
}

export default function Dialog({
  title,
  subTitle,
  children,
  cancelLabel = "취소",
  confirmLabel = "확인",
  isBackDropClickable = true,
  isOpen,
  onPromiseCancel,
  onPromiseConfirm,
  onCancel,
  onConfirm,
  setIsOpen,
}: DialogProps) {
  return (
    <HeadlessUiDialog
      open={isOpen}
      onClose={() => {
        isBackDropClickable && setIsOpen?.(false);
      }}
      transition
      className="z-[999] fixed inset-0 flex w-screen items-center justify-center bg-taling-gray-900/70 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <DialogPanel className="flex flex-col gap-6 w-[18.4375rem] bg-taling-white p-5 rounded-xl">
        <div className="flex flex-col gap-5">
          <DialogTitle className="flex flex-col gap-1.5">
            <span className="text-body1normal-bold text-strong">{title}</span>
            <span className="text-label1reading-regular text-neutral">
              {subTitle}
            </span>
          </DialogTitle>
          <section>{children}</section>
        </div>
        <DialogButtons
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          onCancel={onCancel}
          onConfirm={onConfirm}
          onPromiseCancel={onPromiseCancel}
          onPromiseConfirm={onPromiseConfirm}
          setIsOpen={setIsOpen}
        />
      </DialogPanel>
    </HeadlessUiDialog>
  );
}
