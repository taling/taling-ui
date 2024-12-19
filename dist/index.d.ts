import * as react from 'react';
import react__default from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ResizablePrimitive from 'react-resizable-panels';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';
import { ClassValue } from 'clsx';

declare const TalingAppContext: react.Context<boolean>;
declare function appPrefix(path: string): string;

interface IAutocompleteItem {
    id: number;
    name: string;
    children?: IAutocompleteChild[];
    isAvailable: boolean;
}
interface IAutocompleteChild {
    id: number;
    name: string;
    parentId: number;
    [key: string]: any;
}
interface ParsedItemType {
    id: string;
    name: string;
    children?: ParsedItemType[] | null;
    parentId?: number;
    isAvailable?: boolean;
}
interface AutoCompleteProps {
    defaultSelection: IAutocompleteItem | IAutocompleteChild | null;
    list: IAutocompleteItem[];
    onSelected: (item: ParsedItemType | null) => void;
    rounded?: "sm" | "md" | "lg";
    enabled?: boolean;
}
declare function Autocomplete({ defaultSelection, list, onSelected, rounded, enabled, }: AutoCompleteProps): react.JSX.Element;

interface AnimatedToggleButtonComponentRenderProps {
    on: React.ReactNode;
    off: React.ReactNode;
    loading: React.ReactNode;
    error?: React.ReactNode;
}
declare function AnimatedToggleButtonComponent({ isOn, render, onToggle, }: {
    isOn: boolean;
    render: AnimatedToggleButtonComponentRenderProps;
    onToggle: () => Promise<{
        toggleSuccess: boolean;
    }>;
}): react.JSX.Element;

declare function WaitingButton({ render: { normal, waiting, failed }, passData, className, onClick, }: {
    render: {
        normal: React.ReactNode;
        waiting: React.ReactNode;
        failed?: React.ReactNode;
    };
    passData?: any;
    className?: string;
    onClick: (passData?: any) => Promise<boolean>;
}): react.ReactElement<any, string | react.JSXElementConstructor<any>>;

declare const PrimaryButton: ({ children, size, showLoadingState, isEnabled, }: {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    showLoadingState?: boolean;
    isEnabled?: boolean;
}) => JSX.Element;

type CalendarEventType = {
    id: string | number;
    title: string;
    date: Date;
    startTime: string;
    endTime: string;
    description?: string;
    location?: string;
    option?: any;
};
type CalendarDayType = {
    dateObject: Date;
    year: number;
    month: number;
    day: number;
    isToday: boolean;
    isCurrentMonth: boolean;
    dayOfWeek: number;
    weekIndex?: number;
    dateString?: string;
    events: CalendarEventType[];
    optionColor?: string;
};
type CalendarRenderersType = {
    header?: React.ReactElement;
    monthView?: {
        day?: (day: CalendarDayType) => React.ReactElement;
        event?: (event: CalendarEventType) => React.ReactElement;
    };
};
type SelectableColorType = "pink" | "purple";

declare const CalendarDayComponent: ({ day, renderers, onEventClick, onHover, }: {
    day: CalendarDayType;
    renderers?: CalendarRenderersType;
    onEventClick?: (event: CalendarEventType) => void;
    onHover?: ({ status, event, }: {
        status: boolean;
        event: CalendarEventType;
    }) => void;
}) => react.JSX.Element;

declare const CalendarEventComponent: ({ event, renderers, }: {
    event: CalendarEventType;
    renderers?: CalendarRenderersType;
}) => react.JSX.Element;

declare enum StartOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
declare enum CalendarViewMode {
    Year = "year",
    Month = "month",
    Week = "week"
}

declare const CalendarHeader: ({ selectedYear, selectedMonth, viewMode, useViewMode, onPrev, onNext, onToday, onAction, }: {
    selectedYear: number;
    selectedMonth: number;
    viewMode: CalendarViewMode;
    useViewMode?: boolean;
    onPrev: () => void;
    onNext: () => void;
    onToday: () => void;
    onAction?: () => void;
}) => react.JSX.Element;

declare const CalendarInterface: ({ days, renderers, onEventClick, onDayClick, onHover, }: {
    days: CalendarDayType[];
    renderers?: CalendarRenderersType;
    onEventClick?: (event: CalendarEventType) => void;
    onDayClick?: (day: CalendarDayType) => void;
    onHover?: ({ status, event, }: {
        status: boolean;
        event: CalendarEventType;
    }) => void;
}) => react.JSX.Element;

type ColorPresetsType<T> = {
    [key in SelectableColorType]: T;
};
declare const colorPresets: ColorPresetsType<any>;

interface DateSourceDaysInMonth {
    days: CalendarDayType[];
    isSixWeeks: boolean;
}
declare const DateSource: {
    getDaysInMonth: (year: number, month: number) => DateSourceDaysInMonth;
    getWeekInYear(date: Date): number;
};

declare const MainColorContext: react.Context<SelectableColorType>;

type CalendarOptionsType = {
    startOfWeek: StartOfWeek;
};
interface CalendarEventSource {
    year?: number;
    month?: number;
    weekInYear?: number;
}
declare const TailwindCalendarComponent: react.ForwardRefExoticComponent<Omit<{
    eventSource: (source: CalendarEventSource) => Promise<CalendarEventType[]> | CalendarEventType[];
    option: CalendarOptionsType;
    renderers?: CalendarRenderersType;
    onEventClick?: (event: CalendarEventType) => void;
    onDayClick?: (day: CalendarDayType) => void;
    onHover?: ({ status, event, }: {
        status: boolean;
        event: CalendarEventType;
    }) => void;
    viewMode?: CalendarViewMode;
    onViewModeChange?: (mode: CalendarViewMode) => void;
    onMonthChange?: (source: CalendarEventSource) => void;
    onAction?: () => void;
    ref?: any;
    mainColor?: SelectableColorType;
    useViewMode?: boolean;
    useHeaderDecoration?: boolean;
    defaultSelectedYear?: number;
    defaultSelectedMonth?: number;
}, "ref"> & react.RefAttributes<unknown>>;

declare function CheckBox({ label, checked, onChange, }: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}): react.JSX.Element;

type ChipColorType = "blue" | "violet" | "red" | "gray";
interface ChipProps {
    className?: string;
    color: ChipColorType;
    caption: string;
    icon?: JSX.Element;
}
declare function Chip({ className, caption, color, icon }: ChipProps): react.JSX.Element;

declare const DevMarker$1: () => react.JSX.Element | null;

interface DynamicLineHeightTextProps {
    text: string;
    singleLineHeight?: number;
    multiLineHeight?: number;
    className?: string;
}
declare const DynamicLineHeightText: ({ text, singleLineHeight, multiLineHeight, className, ...props }: DynamicLineHeightTextProps) => react.JSX.Element;

declare function AppleIcon(props: any): react.JSX.Element;

declare function BlogIcon(props: any): react.JSX.Element;

declare function ClipboardListIconOutline(props: any): react.JSX.Element;
declare function ClipboardListIconSolid(props: any): react.JSX.Element;

declare function FacebookIcon(props: any): react.JSX.Element;

declare function InstagramIcon(props: any): react.JSX.Element;

declare function KakaoIcon(props: any): react.JSX.Element;
declare function KakaoTalkIcon(props: any): react.JSX.Element;

declare function NaverIcon(props: any): react.JSX.Element;

declare function TemplateIconOutline(props: any): react.JSX.Element;
declare function TemplateIconSolid(props: any): react.JSX.Element;

declare function YoutubeIcon(props: any): react.JSX.Element;

interface ImageFallbackProps {
    src: string;
    alt: string;
    className?: string;
    fallback?: React.ReactNode | string;
    loading?: "eager" | "lazy" | undefined;
    nextImageOption?: {
        width?: number;
        height?: number;
        fill?: boolean;
    };
    useDefaultImg?: boolean;
    onClick?: () => void;
}
/**
 * 이미지 로드에 실패하면 fallback 컴포넌트를 표시합니다.
 * @param param0
 * @returns
 */
declare function ImageFallback({ src, alt, className, fallback, loading, nextImageOption, useDefaultImg, onClick }: ImageFallbackProps): react.JSX.Element;

declare function LoadingBannerComponent({ title }: {
    title: string;
}): react.JSX.Element;

/**
 * add
 * @returns
 */
declare function LoadingSpinner({ className }: {
    className?: string;
}): react.JSX.Element;

/**
 * 탈잉 Biz 로고 컴포넌트
 */
declare const LogoComponent: ({ size, color }: {
    size?: "xs" | "sm" | "md" | "lg";
    color?: "black" | "white";
}) => react.JSX.Element;

declare function StudioLogo(props: any): react.JSX.Element;

declare function TalingLogoWithOutTM(props: any): react.JSX.Element;

declare const widthMap: {
    sm: string;
    md: string;
    lg: string;
};
type ModalWidthType = keyof typeof widthMap;
interface ModalHeaderProps extends React.ComponentPropsWithoutRef<"h3"> {
    children: React.ReactNode;
    setIsOpen?: (arg: boolean) => void;
}
declare function ModalHeader({ children, setIsOpen, className, ...props }: ModalHeaderProps): react.JSX.Element;
interface ModalBodyProps extends React.ComponentPropsWithoutRef<"section"> {
    children: React.ReactNode;
}
declare function ModalBody({ children, className, ...props }: ModalBodyProps): react.JSX.Element;
declare const modalFooterAlignMap: {
    between: string;
    end: string;
    column: string;
};
type ModalFooterAlignType = keyof typeof modalFooterAlignMap;
interface ModalFooterProps extends React.ComponentPropsWithoutRef<"footer"> {
    children: React.ReactNode;
    align?: ModalFooterAlignType;
}
declare function ModalFooter({ children, align, className, ...props }: ModalFooterProps): react.JSX.Element;

declare function NotFoundComponent(): react.JSX.Element;

declare function DefaultProgressBarComponent({ percent }: {
    percent: number;
}): react.JSX.Element;

declare function RadioButton$1({ label, checked, onChange, }: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}): react.JSX.Element;

interface ISelectBoxItem {
    id: number;
    name: string;
    display?: boolean;
}
declare function SelectBox({ list, enabled, onSelected, defaultSelection, isToday, placeholder, width, optionHight, optionWidth, optionAlign, }: {
    list: ISelectBoxItem[];
    enabled: boolean;
    onSelected: (item: ISelectBoxItem | null) => void;
    defaultSelection: ISelectBoxItem | null;
    isToday?: boolean;
    placeholder?: string;
    width?: string;
    optionHight?: string;
    optionWidth?: string;
    optionAlign?: string;
}): react.JSX.Element;

type SkeletonHeightType = "h-44" | "h-28" | "h-20" | "h-16" | "h-12" | "h-8" | "h-6" | "h-4" | "h-3" | "h-2" | "h-1" | "h-0.5";
declare function BasicSkeletonComponent({ height, }: {
    height?: SkeletonHeightType;
}): react.JSX.Element;

declare function ImageSkeletonComponent({ isLoading, className, imageUrl, imageAlt, placeholder, }: {
    isLoading: boolean;
    className?: string;
    imageUrl?: string;
    imageAlt?: string;
    placeholder: any;
}): react.JSX.Element;

declare function TextSkeletonComponent({ isLoading, expectedWidth, className, text, isOverflowMode, }: {
    isLoading: boolean;
    expectedWidth?: string;
    className?: string;
    text?: string;
    isOverflowMode?: boolean;
}): react.JSX.Element;

declare const NAVER_PIXEL_ID: string;
declare const NAVER_INFLOW_DOMAIN = "taling.me";
declare function NaverTrackingLoader(): react.JSX.Element;

/**
 * @description 앱의 심사들을 위해 다르게 정보를 표시해야 하는 경우를 위해 사용합니다.
 */
declare const TalingAppIsPreviewVersionContext: react.Context<{
    isPreviewVersion: boolean;
}>;

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "underline" | "solidPrimary" | "solidSecondary" | "outlinedPrimary" | "outlinedSecondary" | "secondary" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | "default" | "xs" | "xl" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends react.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leftIcon?: react.ReactNode;
    rightIcon?: react.ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const sizeMap$2: {
    normal: {
        checkbox: string;
        label: string;
    };
    small: {
        checkbox: string;
        label: string;
    };
};
type sizeMapType$2 = keyof typeof sizeMap$2;
interface CheckboxProps {
    size?: sizeMapType$2;
    disabled?: boolean;
    className?: string;
    checked?: boolean;
    label?: string;
    onChange?: (isChecked: boolean) => void;
}
declare function Checkbox({ size, disabled, className, checked, label, onChange, }: CheckboxProps): react.JSX.Element;

interface DialogButtonsProps {
    cancelLabel: string;
    confirmLabel: string;
    onCancel?: (arg?: any) => void;
    onConfirm?: (arg?: any) => void;
    onPromiseCancel?: (arg?: any) => Promise<boolean>;
    onPromiseConfirm?: (arg?: any) => Promise<boolean>;
    setIsOpen?: (arg: boolean) => void;
}
declare function DialogButtons({ cancelLabel, confirmLabel, onCancel, onConfirm, onPromiseCancel, onPromiseConfirm, setIsOpen, }: DialogButtonsProps): react.JSX.Element;

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
declare function Dialog({ title, subTitle, children, cancelLabel, confirmLabel, isBackDropClickable, isOpen, onPromiseCancel, onPromiseConfirm, onCancel, onConfirm, setIsOpen, }: DialogProps): react.JSX.Element;

interface InputDescriptionProps {
    description?: string;
    option?: string;
    className?: string;
}
declare function InputDescription({ description, option, className, }: InputDescriptionProps): react.JSX.Element;

interface InputErrorMessageProps {
    errorMessage?: string;
    option?: string;
    className?: string;
}
declare function InputErrorMessage({ errorMessage, option, className, }: InputErrorMessageProps): react.JSX.Element;

interface InputProps {
    value?: string | number;
    valueType?: "string" | "int" | "float";
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    disabled?: boolean;
    type?: string;
    className?: string;
    displayModifier?: {
        wrap: (value: string) => string;
        unwrap: (value: string) => string;
    };
    charFilter?: string | RegExp | ((value: string) => string);
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onValueLength?: (length: number) => void;
}
declare function Input({ value, valueType, placeholder, minLength, maxLength, disabled, type, className, displayModifier, charFilter, onChange, onValueLength, }: InputProps): react.JSX.Element;

interface InputLabelProps {
    label?: string;
    option?: "필수" | "선택";
    className?: string;
}
declare function InputLabel({ label, option, className, }: InputLabelProps): react.JSX.Element;

interface InputFieldProps extends Omit<InputProps, "onValueLength">, Partial<Pick<InputLabelProps, "label"> & Pick<InputDescriptionProps, "description"> & Pick<InputErrorMessageProps, "errorMessage">> {
    labelOption?: InputLabelProps["option"];
    inputClassName?: string;
}
declare function InputField({ label, labelOption, type, value, valueType, placeholder, minLength, maxLength, disabled, description, errorMessage, displayModifier, className, inputClassName, charFilter, onChange, }: InputFieldProps): react.JSX.Element;

interface TextareaProps {
    value?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    disabled?: boolean;
    className?: string;
    charFilter?: string | RegExp | ((value: string) => string);
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onValueLength?: (length: number) => void;
}
declare function Textarea({ value, placeholder, minLength, maxLength, disabled, className, charFilter, onChange, onValueLength, }: TextareaProps): react.JSX.Element;

interface TextareaFieldProps extends Omit<TextareaProps, "onValueLength">, Partial<Pick<InputLabelProps, "label"> & Pick<InputDescriptionProps, "description"> & Pick<InputErrorMessageProps, "errorMessage">> {
    labelOption?: InputLabelProps["option"];
}
declare function TextareaField({ label, labelOption, value, placeholder, minLength, maxLength, disabled, description, errorMessage, className, onChange, }: TextareaFieldProps): react.JSX.Element;

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
declare const modalType: {
    twoButton: string;
    oneButton: string;
    secondary: string;
};
type ModalType = keyof typeof modalType;
declare function Modal({ title, subTitle, children, cancelLabel, confirmLabel, leftIcon, rightIcon, isBackDropClickable, isOpen, modalType, maxWidth, onPromiseCancel, onPromiseConfirm, onCancel, onConfirm, setIsOpen, }: ModalProps): react.JSX.Element;

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
declare function ModalButtons({ cancelLabel, confirmLabel, modalType, leftIcon, rightIcon, onCancel, onConfirm, onPromiseCancel, onPromiseConfirm, }: ModalButtonsProps): react.JSX.Element;

declare const Popover: react__default.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: react__default.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & react__default.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: react__default.ForwardRefExoticComponent<Omit<{
    children: react__default.ReactNode;
} & PopoverPrimitive.PopoverContentProps & react__default.RefAttributes<HTMLDivElement>, "ref"> & react__default.RefAttributes<unknown>>;

declare const sizeMap$1: {
    normal: {
        radio: string;
        label: string;
    };
    small: {
        radio: string;
        label: string;
    };
};
type sizeMapType$1 = keyof typeof sizeMap$1;
interface RadioButtonProps {
    size?: sizeMapType$1;
    name?: string;
    className?: string;
    checked?: boolean;
    value?: string | number;
    disabled?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
}
declare function RadioButton({ size, name, className, checked, value, disabled, label, onChange, }: RadioButtonProps): react.JSX.Element;

declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => react.JSX.Element;
declare const ResizablePanel: react.ForwardRefExoticComponent<Omit<react.HTMLAttributes<HTMLObjectElement | HTMLElement | HTMLParagraphElement | HTMLMapElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLPreElement | HTMLProgressElement | HTMLSlotElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | HTMLTableCaptionElement | HTMLMenuElement | HTMLPictureElement>, "id" | "onResize"> & {
    className?: string | undefined;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: ResizablePrimitive.PanelOnCollapse | undefined;
    onExpand?: ResizablePrimitive.PanelOnExpand | undefined;
    onResize?: ResizablePrimitive.PanelOnResize | undefined;
    order?: number | undefined;
    style?: object | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => react.JSX.Element;

declare const sizeMap: {
    normal: {
        wrapper: string;
        thumb: {
            size: string;
            spacing: string;
            translation: string;
        };
    };
    small: {
        wrapper: string;
        thumb: {
            size: string;
            spacing: string;
            translation: string;
        };
    };
};
type sizeMapType = keyof typeof sizeMap;
interface SwitchProps {
    size?: sizeMapType;
    disabled?: boolean;
    checked?: boolean;
    className?: string;
    onChange?: (checked: boolean) => void;
}
declare function Switch({ size, disabled, className, onChange, }: SwitchProps): react.JSX.Element;

declare const textButtonVariants: (props?: ({
    variant?: "secondary" | "primary" | "underlined" | null | undefined;
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface TextButtonProps extends react.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof textButtonVariants> {
    asChild?: boolean;
    leftIcon?: react.ReactNode;
    rightIcon?: react.ReactNode;
}
declare const TextButton: react.ForwardRefExoticComponent<TextButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const ToastProvider: react.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: react.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & react.RefAttributes<HTMLOListElement>, "ref"> & {
    position?: string;
} & react.RefAttributes<HTMLOListElement>>;
declare const Toast$1: react.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & react.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & react.RefAttributes<HTMLLIElement>>;
declare const ToastAction: react.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: react.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: react.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: react.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type ToastProps = react.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = react.ReactElement<typeof ToastAction>;

type ToasterToast = ToastProps & {
    id: string;
    title?: react.ReactNode;
    description?: react.ReactNode;
    action?: ToastActionElement;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "default";
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: ToasterToast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: ToasterToast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
declare const reducer: (state: State, action: Action) => State;
type Toast = Omit<ToasterToast, "id">;
declare function toast$1({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast$1;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

declare const toastStyles: {
    default: {
        icon: string;
    };
    warning: {
        icon: string;
    };
    error: {
        icon: string;
    };
};
type ToastType = keyof typeof toastStyles;
interface ToastOptions {
    title?: string;
    description?: string;
    duration?: number;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
    type?: ToastType;
}
declare const toast: {
    show: ({ description, duration, position, type, }: ToastOptions) => string;
    warning: (options: Omit<ToastOptions, "type">) => string;
    error: (options: Omit<ToastOptions, "type">) => string;
};

declare const Toaster: () => react.JSX.Element;

interface SnackbarOptions {
    description: string;
    duration?: number;
    label?: string;
    onClick?: () => void;
}
declare const snackbar: {
    show: ({ description, duration, label, onClick }: SnackbarOptions) => string;
};

declare const AppCookieConstants: {
    isApp: string;
    appVersion: string;
    appBuildNum: string;
    appPlatform: string;
    appUserAuth: string;
    crossDomainUserAuth: string;
    crossDomainTalingPixelSessionId: string;
};

declare const APP_DOWNLOAD_URLS: {
    Android: string;
    iOS: string;
};

declare enum ApplicationPaymentType {
    CARD = 1,
    VIRTUAL_ACCOUNT = 2
}

declare enum ApplicationRefundStatus {
    REQUESTED = 0,
    REFUNDED = 1
}

declare enum ApplicationStatus {
    REQUESTED = 0,
    PAYMENT_COMPLETED = 1,
    BOOKING_SUCCESS = 2,
    BOOKING_CANCELED = 3,
    EXPIRED = 5,
    REFUND = 6,
    REFUND_1HOUR = 7,
    PARTIAL_REFUND = 10
}

declare enum ApplicationTutorStatus {
    REQUESTED = 0,
    APPROVED = 1,
    REJECTED = 2
}

declare enum TalentCategory {
    P2P_OFFLINE = 1,
    P2P_ONLINE = 2,
    P2P_VIDEO = 3,// 녹화영상
    P2P_EBOOK = 4,
    VOD = 5,
    SUBSCRIPTION = 6
}
declare enum TalentSpecialRegion {
    ONLINE = 64,// 온라인 라이브의 경우 region = 64의 특수값을 가짐
    OFFLINE = 65
}

declare enum TalentStatusEnum {
    DELETED = -1,
    DRAFT = 0,
    REJECTED = 1,
    OPENED = 2,
    SUSPENDED = 3,
    WAITING_FOR_TERMS_AGREEMENT = 8,
    WAITING_FOR_REVIEW = 9
}

declare const ONE_ON_ONE_CLASS: number[];
declare const GROUP_CLASS: number[];
declare const ONE_DAY_CLASS: number[];
declare const MULTI_DAY_CLASS: number[];

declare enum VodPaymentIsRefund {
    REQUESTED = 0,
    REFUNDED = 1
}

declare enum VodPaymentPaymentType {
    VIRTUAL_ACCOUNT = 0,
    CARD = 1
}

declare enum VodPaymentStatus {
    REQUESTED = 0,
    PAYMENT_COMPLETED = 1
}

declare function useCrossDomainCookies(): {
    /**
     * 크로스 도메인 인증 용 쿠키 설정
     * @param accessToken
     */
    setCrossDomainAuthCookie: (accessToken: string) => void;
    /**
     * 크로스 도메인 인증 용 쿠키 삭제
     */
    clearCrossDomainAuthCookie: () => void;
    /**
     * 크로스 도메인 인증 용 쿠키 조회
     */
    getCrossDomainAuthCookie: () => string | null;
    /**
     * 탈잉 픽셀용 세션 쿠키 가져오기. 없다면 생성합니다.
     * @returns string
     */
    getOrCreateTalingPixelSessionId: () => string;
};

declare enum NaverPixelConversionType {
    PURCHASE = "1",
    SIGNUP = "2",
    ADD_TO_CART = "3",
    APPLY = "4",
    OTHER = "5"
}
declare function useNaverPixel(): {
    sendConversion: (value: string | number) => void;
    sendSignUpFinished: () => void;
    sendPageView: () => void;
};

type TalingPixelEventNameType = "onsite:pv" | "mkt:pv" | "mkt:cart";
interface ITalingPixelTrack {
    eventName: TalingPixelEventNameType;
    talentId: number;
    userId: number;
    pathname: string;
    mktUtm?: string;
}
declare function useTalingPixel(): {
    /**
     * 탈잉 픽셀 이벤트 트래킹
     */
    track: ({ eventName, talentId, userId, pathname, mktUtm, }: ITalingPixelTrack) => void;
};

declare function useIsVisible(ref: any): {
    isIntersecting: boolean | null;
    isIntersectingStart: boolean | null;
};

interface DevMarker {
    hideSession: boolean;
    setHideSession: (state: boolean) => void;
}
declare const devMarkerStore: zustand.UseBoundStore<Omit<zustand.StoreApi<DevMarker>, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<DevMarker, DevMarker>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: DevMarker) => void) => () => void;
        onFinishHydration: (fn: (state: DevMarker) => void) => () => void;
        getOptions: () => Partial<zustand_middleware.PersistOptions<DevMarker, DevMarker>>;
    };
}>;

declare function formatBytes(argBytes: string | number, decimals?: number): string;

declare function assertRunningAsClient(): void;

declare const Numbers: {
    isInt: typeof isInt;
    isFloat: typeof isFloat;
};
declare function isInt(n: any): boolean;
declare function isFloat(n: any): boolean;

declare function kebabCaseToCamelCase(input: string): string;
/**
 * Kspay 불가능 문자 필터링
 * @param input
 * @returns
 */
declare function filterKspayForbiddenChar(input: string): string;

declare function classNames(...classes: (string | undefined)[]): string;

declare function cn(...inputs: ClassValue[]): string;

declare const TalentSchedule: {
    /**
     * 클래스가 오프라인 지역인지 검사
     * @param talent
     * @returns
     */
    isOfflineRegion: (schedule: any) => boolean;
};

declare const TalentType: {
    /**
     * Talent가 전자책 클래스인지 검사
     * @param talent
     * @returns boolean
     */
    isEbook: (talent: any) => boolean;
    /**
     * Talent가 p2p 인지 검사
     * @param talent
     * @returns boolean
     */
    isP2p: (talent: any) => boolean;
    /**
     * Talent가 VOD인지 검사
     * @param talent
     * @returns boolean
     */
    isVod: (talent: any) => boolean;
    /**
     * Talent가 멤버십 클래스인지 검사
     * @param talent
     * @returns boolean
     */
    isSubscription: (talent: any) => boolean;
    /**
     * Talent가 원데이 클래스인지 검사
     * @param talent
     * @returns
     */
    isOneDayClass: (talent: any) => boolean;
    /**
     * Talent가 그룹 클래스인지 검사
     * @param talent
     * @returns
     */
    isGroupClass: (talent: any) => boolean;
    getTalentType: (talent: any) => "VOD" | "EBOOK" | "SUBSCRIPTION" | "P2P";
    getTalentTypeString: (talent: any) => "VOD" | "전자책" | "멤버십" | "온/오프라인";
};
declare const TalentStatus: {
    isDraft: (talent: any) => boolean;
    isRejected: (talent: any) => boolean;
    isSuspended: (talent: any) => boolean;
    isSoldOut: (talent: any) => boolean;
    isOpened: (talent: any) => boolean;
    isPublicClass: (talent: any) => boolean;
    isReviewComplete: (talent: any) => boolean;
};

export { APP_DOWNLOAD_URLS, AnimatedToggleButtonComponent, type AnimatedToggleButtonComponentRenderProps, AppCookieConstants, AppleIcon, ApplicationPaymentType, ApplicationRefundStatus, ApplicationStatus, ApplicationTutorStatus, Autocomplete, BasicSkeletonComponent, BlogIcon, Button, type ButtonProps, CalendarDayComponent as CalendarDay, type CalendarDayType, CalendarEventComponent as CalendarEvent, type CalendarEventType, CalendarHeader, CalendarInterface, type CalendarRenderersType, CalendarViewMode, CheckBox, Checkbox, Chip, ClipboardListIconOutline, ClipboardListIconSolid, DateSource, type DateSourceDaysInMonth, DefaultProgressBarComponent, DevMarker$1 as DevMarker, Dialog, DialogButtons, DynamicLineHeightText as DynamicLineHeight, FacebookIcon, GROUP_CLASS, type IAutocompleteChild, type IAutocompleteItem, type ISelectBoxItem, ImageFallback, ImageSkeletonComponent, Input, InputDescription, type InputDescriptionProps, InputErrorMessage, type InputErrorMessageProps, InputField, InputLabel, type InputLabelProps, type InputProps, InstagramIcon, KakaoIcon, KakaoTalkIcon, LoadingBannerComponent, LoadingSpinner, LogoComponent, MULTI_DAY_CLASS, MainColorContext, Modal, ModalBody, ModalButtons, ModalFooter, type ModalFooterAlignType, ModalHeader, type ModalType, type ModalWidthType, NAVER_INFLOW_DOMAIN, NAVER_PIXEL_ID, NaverIcon, NaverPixelConversionType, NaverTrackingLoader, NotFoundComponent, Numbers, ONE_DAY_CLASS, ONE_ON_ONE_CLASS, type ParsedItemType, Popover, PopoverContent, PopoverTrigger, PrimaryButton, RadioButton as Radio, RadioButton$1 as RadioButton, ResizableHandle, ResizablePanel, ResizablePanelGroup, SelectBox, type SelectableColorType, StartOfWeek, StudioLogo, Switch, TailwindCalendarComponent, TalentCategory, TalentSchedule, TalentSpecialRegion, TalentStatus, TalentStatusEnum, TalentType, TalingAppContext, TalingAppIsPreviewVersionContext, TalingLogoWithOutTM, type TalingPixelEventNameType, TemplateIconOutline, TemplateIconSolid, TextButton, type TextButtonProps, TextSkeletonComponent, Textarea, TextareaField, type TextareaProps, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, VodPaymentIsRefund, VodPaymentPaymentType, VodPaymentStatus, WaitingButton, YoutubeIcon, appPrefix, assertRunningAsClient, buttonVariants, classNames, cn, colorPresets, devMarkerStore, filterKspayForbiddenChar, formatBytes, kebabCaseToCamelCase, reducer, snackbar, textButtonVariants, toast, useCrossDomainCookies, useIsVisible, useNaverPixel, useTalingPixel, useToast };
