import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { Fragment, useCallback, useEffect, useState } from "react";

export interface ISelectBoxItem {
  id: number;
  name: string;
  display?: boolean;
}

export default function SelectBox({
  list,
  enabled,
  onSelected,
  defaultSelection,
  isToday,
}: {
  list: ISelectBoxItem[];
  enabled: boolean;
  onSelected: (item: ISelectBoxItem | null) => void;
  defaultSelection: ISelectBoxItem | null;
  isToday?: boolean;
}) {
  const [_internaList, setInternalList] = useState<ISelectBoxItem[]>();
  const [selected, setSelected] = useState<ISelectBoxItem | null>(null);
  const [_hydrated, setHydrated] = useState<boolean>(false); // glitch 제거

  /**
   * 리스트가 업데이트 되고, 이미 선택된 값이 리스트에 없으면 선택을 초기화 합니다.
   */
  const onListChanged = useCallback(
    (newList: ISelectBoxItem[]) => {
      // 먼저 선택상황을 편집하고,
      const found = newList.find(
        (item) =>
          item?.id === selected?.id || item?.id === defaultSelection?.id,
      );

      if (!found) {
        setSelected(null);
        return;
      }

      if (!selected) {
        setSelected(defaultSelection);
      }

      // 리스트를 초기화
      if (newList === _internaList) return;
      setInternalList(newList);
    },
    [_internaList, defaultSelection, selected],
  );

  // useEffect(() => {
  //   console.log(`onSelected`, selected?.name);
  //   onSelected(selected);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selected]);

  useEffect(() => {
    setHydrated(true);
    onListChanged(list);
    return () => {
      setHydrated(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelection, list]);

  useEffect(() => {
    setSelected(defaultSelection);
  }, [defaultSelection]);

  if (list.length === 0 && defaultSelection === null) return;
  if (!_hydrated) return;

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        onSelected(value);
      }}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className={classNames(
                "relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-taling-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6",
                enabled
                  ? "focus:outline-none focus:ring-2 focus:ring-taling-pink "
                  : "!bg-taling-gray-300 !cursor-not-allowed !text-taling-gray-800 opacity-50 ",
              )}
            >
              <span className="block truncate">
                {selected?.name ?? "선택해 주세요"}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-taling-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open && enabled}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg no-scrollbar max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((item) => {
                  const internalSelected = selected?.id === item.id;
                  const excludeToday = isToday && !item.display;
                  return (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          excludeToday ? "hidden" : "",
                          active || internalSelected
                            ? "bg-taling-gray-100"
                            : "text-taling-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected || internalSelected
                                ? "font-semibold"
                                : "font-normal",
                              "block truncate",
                            )}
                          >
                            {item.name}
                          </span>

                          {selected || internalSelected ? (
                            <span
                              className={classNames(
                                active || internalSelected
                                  ? "text-taling-black"
                                  : "text-taling-pink",
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  );
                })}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
