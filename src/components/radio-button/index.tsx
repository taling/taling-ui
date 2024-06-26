export default function RadioButton({
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
    <div
      className="flex items-center cursor-pointer gap-1 py-2 md:py-0 focus:bg-taling-gray-100 "
      onClick={(e) => {
        toggleChecked();
      }}
    >
      <input
        id={label}
        name={label}
        type="radio"
        className="form-radio h-3 w-3 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-transparent"
        checked={checked}
        readOnly
      />
      <label className="text-taling-gray-800 cursor-pointer ">{label}</label>
    </div>
  );
}
