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
    <div
      className="flex items-center cursor-pointer text-taling-gray-800 gap-2 py-2 focus:bg-taling-gray-100"
      onClick={(e) => {
        toggleChecked();
      }}
    >
      <input
        id={label}
        name={label}
        type="checkbox"
        checked={checked}
        readOnly
        className="h-4 w-4 rounded border-gray-300 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none "
      />
      <label className="min-w-fit cursor-pointer">{label}</label>
    </div>
  );
}
