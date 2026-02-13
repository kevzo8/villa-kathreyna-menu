import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { MenuItemCard } from "./menu-item"
import { filipinoBreakfast, saversMeal, rice } from "@/lib/menu-data"

export function PageBreakfastAndSavers() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden">
      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-10 pt-2">
        {/* Filipino Breakfast */}
        <SectionHeader
          title="Filipino Breakfast"
          subtitle={filipinoBreakfast.subtitle}
        />
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
          {filipinoBreakfast.items.map((item) => (
            <MenuItemCard key={item.name} item={item} imageSize="sm" />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-50" />
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
        </div>

        {/* Savers Meal */}
        <SectionHeader title="Savers Meal" />
        <div className="flex gap-6">
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-40 shadow-sm flex-shrink-0 self-center">
            <Image
              src="/images/food/savers-meal.jpg"
              alt="Savers Meal"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-50" />
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
        </div>

        {/* Rice */}
        <SectionHeader title="Rice" />
        <div className="flex gap-6">
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
                    <p className="font-sans text-[10px] text-[#5a7a6e] leading-tight mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-40 shadow-sm flex-shrink-0 self-center">
            <Image
              src="/images/food/yang-chow.jpg"
              alt="Yang Chow Rice"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <MenuPageFooter pageNumber={3} />
    </div>
  )
}
