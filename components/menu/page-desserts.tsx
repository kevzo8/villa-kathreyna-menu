import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { desserts } from "@/lib/menu-data"

export function PageDesserts() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="desserts">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Logo header */}
      <MenuPageHeader />

      {/* Food banner below header */}
      <PageBanner imageSrc="/images/banners/veggies-sandwiches-desserts.jpg" alt="Desserts" />

      <div className="px-7 flex-1 flex flex-col pt-2">
        {/* Desserts */}
        <SectionHeader title="Desserts" />
        <div className="grid grid-cols-3 gap-x-3 gap-y-1 [&_h3]:text-[15px] [&_span.font-sans]:text-[14px] [&_p]:text-[11px]">
          {desserts?.items?.map((item) => (
            <MenuItemCard key={item?.name} item={item} layout="vertical" imageSize="xxs" />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={6} />
    </div>
  )
}
