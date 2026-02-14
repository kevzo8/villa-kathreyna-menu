import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { appetizers, soups } from "@/lib/menu-data"

export function PageAppetizersAndSoups() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-8 flex-1 flex flex-col">
        {/* Appetizers */}
        <SectionHeader title="Appetizers" />
        <div className="grid grid-cols-2 gap-x-5 gap-y-4 mb-4">
          {appetizers.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="md" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Soups */}
        <SectionHeader title="Soups" />
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          {soups.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="md" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={1} />
    </div>
  )
}
