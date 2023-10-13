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
    <div className="flex items-center cursor-pointer text-taling-gray-800 gap-2 ">
      <input
        id={label}
        name={label}
        type="checkbox"
        
        checked={checked ?? false}
        onChange={toggleChecked}
        className="h-4 w-4 rounded border-gray-300 text-taling-pink-400 focus:ring-taling-pink-500"
      />
      <label
        htmlFor={label}
        className="min-w-fit cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
