import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useContext } from "react";

import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { colorPresets } from "../constants";
import { MainColorContext } from "../content";
import { CalendarViewMode } from "../enums";

const CalendarHeader = ({
  selectedYear,
  selectedMonth,
  viewMode,
  useViewMode,
  onPrev,
  onNext,
  onToday,
  onAction,
}: {
  selectedYear: number;
  selectedMonth: number;
  viewMode: CalendarViewMode;
  useViewMode?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onAction?: () => void;
}) => {
  const mainColor = useContext(MainColorContext);
  const color = colorPresets[mainColor];
  return (
    <header className="flex items-center justify-between border-b border-gray-200 py-2 sm:py-2 lg:flex-none 2xl:py-4 ">
      <h1 className="text-xl font-medium leading-6 text-gray-900 sm:text-xl 2xl:text-2xl">
        <time dateTime={`${selectedYear}-${selectedMonth}`}>
          {selectedYear}년 {selectedMonth}월
        </time>
      </h1>
      <div className="flex items-center">
        <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
          <div
            className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
            aria-hidden="true"
          />
          <button
            type="button"
            className="flex items-center justify-center rounded-l-md py-2 pl-1.5 pr-2 text-gray-400 hover:text-gray-500 sm:pr-4 md:w-9 md:px-2 md:hover:bg-gray-50"
            onClick={() => {
              onPrev();
            }}
          >
            <ChevronLeftIcon
              className=" h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className=" shrink-0 px-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:px-1 2xl:px-3.5"
            onClick={() => {
              onToday();
            }}
          >
            오늘
          </button>
          <span className="relative -mx-px hidden h-5 w-px bg-gray-300" />
          <button
            type="button"
            className="flex items-center justify-center rounded-r-md py-2 pl-1.5 pr-2 text-gray-400 hover:text-gray-500 sm:pl-4 md:w-9 md:px-2 md:hover:bg-gray-50"
            onClick={() => {
              onNext();
            }}
          >
            <ChevronRightIcon
              className=" h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:items-center">
          {useViewMode && (
            <Menu as="div" className="relative md:ml-4 ">
              <Menu.Button
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                월간
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          주간
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          월간
                        </a>
                      )}
                    </Menu.Item>
                    {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}

          {onAction && (
            <>
              <div className="ml-6 h-6 w-px bg-gray-300" />
              <button
                type="button"
                className={`ml-6 rounded-md ${color?.bg} ${color?.hoverBg} ${color?.focusVisible}  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
                onClick={() => {
                  onAction && onAction();
                }}
              >
                일정 추가
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default CalendarHeader;
