interface ErrorMessageProps {
  errorMessage?: string;
  option?: string;
}

export default function ErrorMessage({
  errorMessage = "error",
  option,
}: ErrorMessageProps) {
  return (
    <div className="inline-flex items-center gap-1 text-caption1-regular text-danger">
      {option && <span>{option}</span>}
      <span className="inline-block">{errorMessage}</span>
    </div>
  );
}
