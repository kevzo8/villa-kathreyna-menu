import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { alaCarte, nilagaSinigang } from "@/lib/menu-data"

export function PageAlaCarte() {
  const allItems = [...(alaCarte?.items || []), ...(nilagaSinigang?.items || [])]

  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="ala-carte">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Logo header */}
      <MenuPageHeader />

      {/* Food banner below header */}
      <PageBanner imageSrc="/images/banners/ala-carte-nilaga.jpg" alt="Ala Carte dishes featuring crispy pata, fried chicken, sinigang, and bulalo" />

      <div className="px-7 flex-1 flex flex-col pt-2">
        <SectionHeader title="Ala Carte" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {allItems.map((item) => (
            <MenuItemCard key={item?.name} item={item} imageSize="lg" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={2} />
    </div>
  )
}
