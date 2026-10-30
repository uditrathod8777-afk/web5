interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#A66C45]"></span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A66C45]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#A66C45]"></span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F3F0] mb-5 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-[#A66C45] via-[#C58B55] to-[#D69A69] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-[#A5A5AA] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
