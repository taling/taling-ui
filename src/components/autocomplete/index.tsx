import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { Fragment, useState } from "react";

export type IAutocompleteItem = {
  id: number | string;
  name: string;
  type?: "header" | "child";
  headerId?: number;
};

interface AutoCompleteProps {
  list: IAutocompleteItem[];
  onSelected: (item: IAutocompleteItem | null) => void;
  rounded?: "sm" | "md" | "lg";
}

export default function Autocomplete({
  list,
  onSelected,
  rounded = "md",
}: AutoCompleteProps) {
  const [selected, setSelected] = useState<IAutocompleteItem | null>(null);
  const [search, setSearch] = useState("");

  const filteredList =
    search === ""
      ? list
      : list.filter((item) => {
          if (item.type === "header") return;
          return item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(search.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <Combobox
      value={selected}
      by="id"
      onChange={(value: IAutocompleteItem) => {
        setSelected(value);
        onSelected(value);
      }}
    >
      <div className="relative">
        <div className="relative w-full cursor-default bg-white text-left shadow-sm">
          <Combobox.Input
            className={classNames(
              "w-full border-none py-1.5 pl-3 pr-10 text-sm leading-5 text-taling-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-taling-pink-400",
              round(rounded),
            )}
            displayValue={(category: IAutocompleteItem | null) =>
              category?.name || ""
            }
            onChange={(e) => setSearch(e.target.value)}
            placeholder="항목을 검색해주세요."
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
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
              "absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
              round(rounded),
            )}
          >
            {filteredList.length === 0 && search !== "" ? (
              <div className="relative cursor-default select-none px-4 py-2 taling-gray-900">
                검색 결과가 없습니다.
              </div>
            ) : (
              filteredList.map((category) => (
                <Combobox.Option
                  key={category.id}
                  className={({ selected, active }) =>
                    classNames(
                      "relative cursor-default select-none pr-4 text-taling-gray-900",
                      category.type === "header" ? "pl-4 py-1" : "pl-10 py-2",
                      active || selected ? "bg-taling-gray-150" : "",
                    )
                  }
                  disabled={category.type === "header"}
                  value={category}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={classNames(
                          "block truncate",
                          category.type === "header"
                            ? "font-bold text-taling-gray-700"
                            : "font-normal",
                        )}
                      >
                        {category.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 text-taling-pink-400`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
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
