import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { Fragment, useCallback, useEffect, useState } from "react";

export interface ISelectBoxItem {
  id: number;
  name: string;
}

export default function SelectBox({
  list,
  enabled,
  onSelected,
  defaultSelection,
}: {
  list: ISelectBoxItem[];
  enabled: boolean;
  onSelected: (item: ISelectBoxItem | null) => void;
  defaultSelection: ISelectBoxItem | null;
}) {
  const [_internaList, setInternalList] = useState<ISelectBoxItem[]>(list);
  const [selected, setSelected] = useState<ISelectBoxItem | null>(null);

  /**
   * 리스트가 업데이트 되고, 이미 선택된 값이 리스트에 없으면 선택을 초기화 합니다.
   */
  const onListChanged = useCallback(
    (newList: ISelectBoxItem[]) => {
      if (newList === _internaList) return;
      setInternalList(newList);
      if (
        !newList.find(
          (item) =>
            item?.id === selected?.id || item?.id === defaultSelection?.id,
        )
      ) {
        setSelected(null);
        return;
      }

      if (!selected) {
        setSelected(defaultSelection);
      }
    },
    [_internaList, defaultSelection, selected],
  );

  useEffect(() => {
    console.log(`onSelected`, selected?.name);
    onSelected(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    onListChanged(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelection, list]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-taling-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-taling-pink-400 sm:text-sm sm:leading-6">
              <span className="block truncate">
                {selected?.name ?? "선택해주세요"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-taling-gray-400"
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
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((item) => {
                  const internalSelected = selected?.id === item.id;
                  return (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active || internalSelected
                            ? "bg-taling-pink-400 text-white"
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
                                  ? "text-white"
                                  : "text-taling-pink-400",
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
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
