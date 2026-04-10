interface SectionHeaderProps {
  title: string
  subtitle?: string
  size?: "sm" | "md" | "lg"
}

export function SectionHeader({ title, subtitle, size = "md" }: SectionHeaderProps) {
  const titleSizeClass = size === "sm" ? "text-[15px]" : size === "lg" ? "text-3xl" : "text-2xl"

  return (
    <div className="mb-2">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#d4af37] opacity-40" />
        <div className="flex flex-col items-center">
          <h2 className={`font-display ${titleSizeClass} font-bold text-[#0e7c6b] tracking-wider capitalize`}>
            {title}
          </h2>
          {/* Small decorative line-diamond-line under the title */}
          <div className="flex items-center gap-2 mt-1">
            <div className="w-8 h-px bg-[#d4af37] opacity-60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-80" />
            <div className="w-8 h-px bg-[#d4af37] opacity-60" />
          </div>
        </div>
        <div className="flex-1 h-px bg-[#d4af37] opacity-40" />
      </div>
      {subtitle && (
        <p className="text-center text-[12px] text-[#5a7a6e] mt-1 font-sans italic px-8">
          {subtitle}
        </p>
      )}
    </div>
  )
}
