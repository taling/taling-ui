interface InputLabelProps {
  label?: string;
  option?: string;
}

export default function InputLabel({
  label = "label",
  option,
}: InputLabelProps) {
  return (
    <div className="inline-flex gap-0.5 items-center">
      <span className="inline-block text-label1normal-regular text-neutral">
        {label}
      </span>
      {option && (
        <span className="inline-block text-caption1-regular text-danger">
          {`(${option})`}
        </span>
      )}
    </div>
  );
}
