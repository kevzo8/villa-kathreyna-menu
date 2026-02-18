import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { filipinoBreakfast, saversMeal, rice } from "@/lib/menu-data"

export function PageBreakfastAndSavers() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Logo header */}
      <MenuPageHeader />

      {/* Food banner below header */}
      <PageBanner imageSrc="/images/banners/breakfast-savers.jpg" alt="Filipino Breakfast and Savers Meals" />

      <div className="px-7 flex-1 flex flex-col pt-2">
        {/* Filipino Breakfast */}
        <SectionHeader
          title="Filipino Breakfast"
          subtitle={filipinoBreakfast.subtitle}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-1">
          {filipinoBreakfast.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="xl" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-1.5">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Savers Meal */}
        <SectionHeader title="Savers Meal" />
        <div className="flex gap-5 items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
            <Image
              src="/images/food/savers-meal.jpg"
              alt="Savers Meal"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              {saversMeal.items.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-1">
                  <span className="font-sans text-[12px] text-[#0e7c6b] font-medium">{item.name}</span>
                  <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
                  <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
                    {"P"}{item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-1.5">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Rice */}
        <SectionHeader title="Rice" />
        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-2.5">
              {rice.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-serif text-[13px] font-bold text-[#0e7c6b]">{item.name}</span>
                    <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
                    <span className="font-sans text-[13px] font-bold text-[#d4af37] whitespace-nowrap">
                      {"P"}{item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="font-sans text-[10px] text-[#5a7a6e] leading-snug mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
            <Image
              src="/images/food/yang-chow.jpg"
              alt="Yang Chow Rice"
              width={140}
              height={140}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <MenuPageFooter pageNumber={3} />
    </div>
  )
}
