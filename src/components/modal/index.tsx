import { Dialog, Transition } from "@headlessui/react";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { Fragment, useRef } from "react";

const widthMap = {
  sm: "max-w-[360px]",
  md: "max-w-[520px]",
  lg: "max-w-[800px]",
};
export type ModalWidthType = keyof typeof widthMap;

const backdropOpacityMap = {
  normal: "opacity-15",
  darker: "opacity-70",
};
export type BackdropOpacityType = keyof typeof backdropOpacityMap;

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  isBackdropClickable?: boolean;
  width?: ModalWidthType;
  backdropOpacity?: BackdropOpacityType;
  children: React.ReactNode;
}

function Modal({
  isOpen,
  setIsOpen,
  isBackdropClickable = true,
  width = "md",
  backdropOpacity = "normal",
  children,
}: ModalProps) {
  const initRef = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        initialFocus={initRef}
        as="div"
        className="relative z-50"
        onClose={() => {
          isBackdropClickable && setIsOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={classNames(
              "fixed inset-0 bg-taling-gray-900",
              backdropOpacityMap[backdropOpacity],
            )}
          />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full text-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                ref={initRef}
                className={classNames(
                  "relative w-full overflow-y-auto align-middle transition-all transform bg-white shadow-modal rounded-2xl",
                  widthMap[width],
                )}
              >
                <div className="flex flex-col">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

interface ModalHeaderProps extends React.ComponentPropsWithoutRef<"h3"> {
  children: React.ReactNode;
  setIsOpen?: (arg: boolean) => void;
}

function ModalHeader({
  children,
  setIsOpen,
  className,
  ...props
}: ModalHeaderProps) {
  return (
    <header className="flex justify-between px-8 pt-8 pb-4">
      <Dialog.Title
        as="h3"
        className={classNames(
          "w-full font-bold text-2xl leading-9 text-left text-taling-gray-900 ",
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Title>
      {/* <button
        type="button"
        className="text-taling-gray-300 hover:text-taling-gray-500"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <XMarkIcon className="w-6 h-6" />
      </button> */}
    </header>
  );
}
interface ModalBodyProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}

function ModalBody({ children, className, ...props }: ModalBodyProps) {
  return (
    <section
      className={classNames(
        "flex flex-col flex-1 px-8 pb-8 text-start font-normal text-base leading-7 text-taling-gray-900",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

const modalFooterAlignMap = {
  between: "justify-between gap-3",
  end: "justify-end gap-3",
  column: "flex-col gap-2",
};
export type ModalFooterAlignType = keyof typeof modalFooterAlignMap;

interface ModalFooterProps extends React.ComponentPropsWithoutRef<"footer"> {
  children: React.ReactNode;
  align?: ModalFooterAlignType;
}

function ModalFooter({
  children,
  align = "between",
  className,
  ...props
}: ModalFooterProps) {
  return (
    <footer
      className={classNames(
        "flex px-5 py-4",
        modalFooterAlignMap[align],
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
}

export { Modal, ModalBody, ModalFooter, ModalHeader };
