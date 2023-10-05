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
    <div className="flex items-center cursor-pointer" onClick={toggleChecked}>
      <label>
        <input
          type="radio"
          className="form-radio h-5 w-5 text-taling-pink-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
          checked={checked}
          onChange={toggleChecked}
        />

        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
}
