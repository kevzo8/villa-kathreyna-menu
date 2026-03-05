import Image from "next/image"

interface MaterialHeaderProps {
  title: string
  subtitle?: string
  titleClassName?: string
  logoSize?: number
}

export function MaterialHeader({ title, subtitle, titleClassName, logoSize = 70 }: MaterialHeaderProps) {
  return (
    <div className="bg-[#0e7c6b] px-8 py-4 flex items-center justify-between">
      <div>
        <p className="font-sans text-[10px] text-[#e8d5a3] tracking-[0.2em] uppercase opacity-70">
          Villa Kathreyna Event Place & Resort
        </p>
        <h1 className={`font-display text-2xl text-[#d4af37] mt-0.5 ${titleClassName ?? ''}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-[11px] text-[#e8d5a3] opacity-80 mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
      <Image
        src="/images/logo-transparent.png"
        alt="Villa Kathreyna"
        width={logoSize}
        height={logoSize}
        className="opacity-90"
      />
    </div>
  )
}
