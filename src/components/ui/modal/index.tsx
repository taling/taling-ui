import {
  Dialog as HeadlessUiModal,
  DialogPanel as ModalPanel,
  DialogTitle as ModalTitle,
} from "@headlessui/react";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import ModalButtons from "./modal-buttons";

type MaxWidthOption = "sm" | "md" | "lg" | "xl" | "2xl" | "full" | null;

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
  maxWidth?: MaxWidthOption;
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

const getMaxWidthClass = (maxWidth: MaxWidthOption): string => {
  switch (maxWidth) {
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-md";
    case "lg":
      return "max-w-lg";
    case "xl":
      return "max-w-xl";
    case "2xl":
      return "max-w-2xl";
    case "full":
      return "max-w-full";
    default:
      return "";
  }
};

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
  maxWidth = null,
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
        `fixed inset-0 z-[999] flex w-screen items-center justify-center
        bg-taling-gray-900/70`,
        "transition duration-300 ease-out",
        "data-[closed]:opacity-0",
      )}
    >
      <ModalPanel
        className={classNames(
          `flex min-w-[18.4375rem] flex-col gap-5 rounded-2xl bg-taling-white px-8 py-7
          shadow-strong`,
          getMaxWidthClass(maxWidth),
        )}
      >
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
