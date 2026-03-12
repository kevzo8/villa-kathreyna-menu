import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { pasta, noodles } from "@/lib/menu-data"

function PastaNoodleTableRow({
  name,
  description,
  solo,
  platter,
}: {
  name: string
  description?: string
  solo: string
  platter?: string
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 items-start py-1.5 border-b border-[#d4af37] border-opacity-15 last:border-b-0">
      <div>
        <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b] leading-tight">{name}</h3>
        {description && (
          <p className="font-sans text-[10px] text-[#5a7a6e] leading-snug mt-0.5">{description}</p>
        )}
      </div>
      <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap text-right pt-0.5">P{solo}</span>
      <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap text-right pt-0.5">P{platter ?? "-"}</span>
    </div>
  )
}

function PastaNoodleSection({
  title,
  subtitle,
  image,
  imageAlt,
  items,
  imagePosition,
}: {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  items: { name: string; description?: string; price: string; price2?: string }[]
  imagePosition: "left" | "right"
}) {
  const imageBlock = (
    <div className="w-[170px] h-[170px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
      <Image src={image} alt={imageAlt} width={170} height={170} className="object-cover w-full h-full" />
    </div>
  )

  const tableBlock = (
    <div className="flex flex-col flex-1 min-w-0">
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 px-0.5 mb-1">
        <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e]">Item</span>
        <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e] text-right">Solo</span>
        <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e] text-right">Platter</span>
      </div>
      {items.map((item) => (
        <PastaNoodleTableRow
          key={item.name}
          name={item.name}
          description={item.description}
          solo={item.price}
          platter={item.price2}
        />
      ))}
    </div>
  )

  return (
    <div className="mb-2.5">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className={`grid ${imagePosition === "left" ? "grid-cols-[170px_1fr]" : "grid-cols-[1fr_170px]"} gap-3 items-start`}>
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {tableBlock}
          </>
        ) : (
          <>
            {tableBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  )
}

export function PagePastaNoodles() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="pasta-noodles">
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      <PageBanner imageSrc="/images/food/carbonara.jpg" alt="Pasta and Noodles" />

      <div className="px-7 flex-1 flex flex-col pt-2 gap-2">
        <PastaNoodleSection
          title="Pasta"
          subtitle="Solo / Platter (good for 2-3)"
          image="/images/food/spaghetti.jpg"
          imageAlt="Pasta"
          items={pasta?.items || []}
          imagePosition="left"
        />

        <PastaNoodleSection
          title="Noodles"
          subtitle="Solo / Platter (good for 2-3)"
          image="/images/food/pancit-guisado.jpg"
          imageAlt="Noodles"
          items={noodles?.items || []}
          imagePosition="right"
        />
      </div>

      <MenuPageFooter pageNumber={6} />
    </div>
  )
}
