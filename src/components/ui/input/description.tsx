interface DescriptionProps {
  description?: string;
}

export default function Description({
  description = "description",
}: DescriptionProps) {
  return (
    <span className="inline-block text-caption1-regular text-neutral">
      {description}
    </span>
  );
}
