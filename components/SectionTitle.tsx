interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`section-title ${centered ? "centered" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}