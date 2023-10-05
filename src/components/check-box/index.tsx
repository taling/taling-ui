import { CheckIcon } from "@heroicons/react/20/solid";

export default function CheckBox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const toggleChecked = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleChecked}>
      <div
        className={`w-5 h-5 border rounded mr-2 ${
          checked
            ? "bg-taling-pink-400 border-taling-pink-400 "
            : "bg-white border-gray-300"
        }`}
      >
        {checked && <CheckIcon className="h-4 w-4 text-white " />}
      </div>
      <div>{label}</div>
    </div>
  );
}
