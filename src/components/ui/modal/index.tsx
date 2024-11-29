import {
  Dialog as HeadlessUiModal,
  DialogPanel as ModalPanel,
  DialogTitle as ModalTitle,
} from "@headlessui/react";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import ModalButtons from "./modal-buttons";

interface ModalProps {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  isBackDropClickable?: boolean;
  isOpen?: boolean;
  modalType?: ModalType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onCancel?: (arg?: any) => void;
  onConfirm?: (arg?: any) => void;
  onPromiseCancel?: (arg?: any) => Promise<boolean>;
  onPromiseConfirm?: (arg?: any) => Promise<boolean>;
  setIsOpen?: (arg: boolean) => void;
}

const modalType = {
  twoButton: "twoButton",
  oneButton: "oneButton",
  secondary: "secondary",
};
export type ModalType = keyof typeof modalType;

export default function Modal({
  title,
  subTitle,
  children,
  cancelLabel = "취소",
  confirmLabel = "확인",
  leftIcon,
  rightIcon,
  isBackDropClickable = true,
  isOpen,
  modalType = "twoButton",
  onPromiseCancel,
  onPromiseConfirm,
  onCancel,
  onConfirm,
  setIsOpen,
}: ModalProps) {
  return (
    <HeadlessUiModal
      open={isOpen}
      onClose={() => {
        isBackDropClickable && setIsOpen?.(false);
      }}
      transition
      className={classNames(
        "z-[999] fixed inset-0 flex w-screen items-center justify-center bg-taling-gray-900/70",
        "transition duration-300 ease-out",
        "data-[closed]:opacity-0",
      )}
    >
      <ModalPanel className="flex flex-col gap-5 min-w-[18.4375rem] bg-taling-white px-8 py-7 rounded-2xl shadow-strong">
        <ModalTitle className="flex flex-col gap-1">
          <span className="text-heading3-semibold text-neutral">{title}</span>
          <span className="text-label1reading-regular text-neutral">
            {subTitle}
          </span>
        </ModalTitle>
        {children && <section>{children}</section>}
        <ModalButtons
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          modalType={modalType}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onCancel={onCancel}
          onConfirm={onConfirm}
          onPromiseCancel={onPromiseCancel}
          onPromiseConfirm={onPromiseConfirm}
        />
      </ModalPanel>
    </HeadlessUiModal>
  );
}
