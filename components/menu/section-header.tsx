interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#d4af37] opacity-30" />
        <h2 className="font-serif text-2xl font-bold text-[#0e7c6b] tracking-wide">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[#d4af37] opacity-30" />
      </div>
      {subtitle && (
        <p className="text-center text-[10px] text-[#5a7a6e] mt-1 font-sans italic px-8">
          {subtitle}
        </p>
      )}
    </div>
  )
}
