import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { alaCarte, nilagaSinigang } from "@/lib/menu-data"

export function PageAlaCarte() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Food banner header */}
      <PageBanner imageSrc="/images/banners/ala-carte-nilaga.jpg" alt="Ala Carte and Nilaga Sinigang" />

      <div className="px-7 flex-1 flex flex-col pt-2">
        {/* Ala Carte */}
        <SectionHeader title="Ala Carte" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-2">
          {alaCarte.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="xl" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Nilaga & Sinigang */}
        <SectionHeader title="Nilaga & Sinigang" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {nilagaSinigang.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="xl" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={2} />
    </div>
  )
}
