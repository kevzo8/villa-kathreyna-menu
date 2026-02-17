import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { vegetables, sandwiches, desserts } from "@/lib/menu-data"

export function PageVeggiesSandwichesDesserts() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Food banner header */}
      <PageBanner imageSrc="/images/banners/veggies-sandwiches-desserts.jpg" alt="Vegetables, Sandwiches and Desserts" />

      <div className="px-7 flex-1 flex flex-col pt-2">
        {/* Vegetables */}
        <SectionHeader title="Vegetables" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-2">
          {vegetables.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="xl" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Sandwiches */}
        <SectionHeader title="Sandwiches" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-2">
          {sandwiches.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="xl" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Desserts */}
        <SectionHeader title="Desserts" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-3">
          {desserts.items.map((item) => (
            <MenuItemCard key={item.name} item={item} layout="vertical" imageSize="xl" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={4} />
    </div>
  )
}
