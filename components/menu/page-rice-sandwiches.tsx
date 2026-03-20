import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { rice, sandwiches } from "@/lib/menu-data"

export function PageRiceAndSandwiches() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="rice-sandwiches">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Logo header */}
      <MenuPageHeader />

      {/* Food banner below header */}
      <PageBanner imageSrc="/images/banners/breakfast-savers.jpg" alt="Rice & Sandwiches" />

      <div className="px-7 flex-1 flex flex-col pt-2 gap-2">
        {/* Rice */}
        <SectionHeader title="Rice" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {rice?.items?.map((item) => (
            <div key={item?.name}>
              <div className="flex items-baseline justify-between gap-1">
                <span className="font-serif text-[12px] font-bold text-[#0e7c6b]">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
                <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
                  {"₱"}{item.price}
                </span>
              </div>
              {item.description && (
                <p className="font-sans text-[9px] text-[#5a7a6e] leading-tight">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Sandwiches */}
        <SectionHeader title="Sandwiches" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {sandwiches?.items?.map((item) => (
            <MenuItemCard key={item?.name} item={item} imageSize="md" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={5} />
    </div>
  )
}

