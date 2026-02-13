import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { appetizers, soups } from "@/lib/menu-data"

export function PageAppetizersAndSoups() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden">
      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-10 pt-2">
        {/* Appetizers */}
        <SectionHeader title="Appetizers" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
          {appetizers.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="sm" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-50" />
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
        </div>

        {/* Soups */}
        <SectionHeader title="Soups" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {soups.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="sm" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={1} />
    </div>
  )
}
