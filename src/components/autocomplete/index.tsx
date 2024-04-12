import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { Fragment, useEffect, useState } from "react";

export interface IAutocompleteItem {
  id: number;
  name: string;
  children?: IAutocompleteChild[];
  isAvailable: boolean;
}

export interface IAutocompleteChild {
  id: number;
  name: string;
  parentId: number;
  [key: string]: any;
}

export interface ParsedItemType {
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

export default function Autocomplete({
  defaultSelection,
  list,
  onSelected,
  rounded = "md",
  enabled = true,
}: AutoCompleteProps) {
  const [selected, setSelected] = useState<ParsedItemType | null>(null);
  const [search, setSearch] = useState("");

  const checkSearch = (item: string, searchVal: string) => {
    return item
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchVal.toLowerCase().replace(/\s+/g, ""));
  };

  const parsedList = list.map((item) => {
    return {
      id: "p" + item.id,
      name: item.name,
      children: item.children
        ? item.children.map((child) => ({
            id: "c" + child.id,
            name: child.name,
            parentId: child.parentId,
          }))
        : null,
      isAvailable: item.isAvailable,
    };
  });

  const filteredList =
    search === ""
      ? parsedList
      : parsedList.reduce(
          (searchResult: ParsedItemType[], parent: ParsedItemType) => {
            if (checkSearch(parent.name, search)) searchResult.push(parent);
            else {
              const childResult = parent.children?.filter((child) =>
                checkSearch(child.name, search),
              );
              if (childResult && childResult.length > 0) {
                searchResult.push(parent);
              }
            }
            return searchResult;
          },
          [],
        );

  useEffect(() => {
    const parsedDefaultSelection = {
      ...defaultSelection,
      id: defaultSelection?.children
        ? "p" + defaultSelection.id
        : "c" + defaultSelection?.id,
    } as ParsedItemType;
    setSelected(parsedDefaultSelection);
  }, [defaultSelection]);

  return (
    <Combobox
      value={selected}
      by="id"
      onChange={(value) => {
        if (value === null) return;
        if (Object.prototype.hasOwnProperty.call(value, "parentId")) {
          const parsedValue = {
            id: value.id.slice(1),
            name: value.name,
            parentId: value.parentId,
          };
          onSelected(parsedValue);
        } else {
          const parsedValue = {
            id: value.id.slice(1),
            name: value.name,
          };
          onSelected(parsedValue);
        }
        setSelected(value);
      }}
      disabled={!enabled}
    >
      <div className="relative">
        <div
          className={classNames(
            "relative w-full cursor-default bg-white text-left shadow-sm",
          )}
        >
          <Combobox.Input
            className={classNames(
              "w-full border-none py-1.5 pl-3 pr-10 text-sm leading-5 text-taling-gray-900 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300",
              enabled
                ? "focus:outline-none focus:ring-2 focus:ring-taling-pink-400"
                : "!bg-taling-gray-300 !cursor-not-allowed !text-taling-gray-800 opacity-50 ",
              round(rounded),
            )}
            displayValue={(item: ParsedItemType | null) => item?.name || ""}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="항목을 검색해주세요."
          />
          <Combobox.Button
            className={classNames(
              "absolute inset-y-0 right-0 flex items-center pr-2",
              enabled ? "" : "!cursor-not-allowed",
            )}
          >
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setSearch("")}
        >
          <Combobox.Options
            className={classNames(
              "absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
              round(rounded),
            )}
          >
            {filteredList.length === 0 && search !== "" ? (
              <div className="relative cursor-default select-none px-4 py-2 taling-gray-900">
                검색 결과가 없습니다.
              </div>
            ) : (
              filteredList.map((parent) => (
                <Combobox.Option
                  key={parent.id}
                  className={({ selected, active }) =>
                    classNames(
                      "relative cursor-default select-none text-taling-gray-900 pl-5",
                      active || selected ? "bg-taling-gray-150" : "",
                    )
                  }
                  disabled={!parent.isAvailable}
                  value={parent}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={classNames(
                          "pt-2 pb-1 block truncate",
                          parent.children
                            ? "font-bold text-taling-gray-700"
                            : "font-normal",
                        )}
                      >
                        {parent.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute top-1.5 left-0 flex items-center text-taling-pink-400`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                      {parent.children && (
                        <ul>
                          {parent.children.map((child) => (
                            <Combobox.Option
                              key={child.id}
                              className={({ selected, active }) =>
                                classNames(
                                  "relative cursor-pointer select-none pr-4 text-taling-gray-900 -ml-5 pl-8 py-2",
                                  active || selected
                                    ? "bg-taling-gray-150"
                                    : "",
                                )
                              }
                              value={child}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={"block truncate"}>
                                    {child.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-2 flex items-center text-taling-pink-400`}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

function round(rounded: "sm" | "md" | "lg") {
  switch (rounded) {
    case "sm":
      return "rounded";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
  }
}
