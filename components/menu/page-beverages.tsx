import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { beverages, beer, beerBites } from "@/lib/menu-data"

function BeverageItem({ name, price, pitcher, showPitcher = true }: { name: string; price: string; pitcher?: string; showPitcher?: boolean }) {
  return (
    <div className={`grid ${showPitcher ? "grid-cols-[1fr_auto_auto]" : "grid-cols-[1fr_auto]"} items-baseline gap-x-2`}>
      <span className="font-sans text-[12px] text-[#0e7c6b] font-medium leading-tight">{name}</span>
      <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap text-right">P{price}</span>
      {showPitcher && (
        <span className="font-sans text-[11px] text-[#5a7a6e] whitespace-nowrap text-right">
          {pitcher ? `P${pitcher}` : "-"}
        </span>
      )}
    </div>
  )
}

export function PageBeverages() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="beverages">
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      {/* Logo header */}
      <MenuPageHeader />

      {/* Food banner below header */}
      <PageBanner imageSrc="/images/banners/beverages-beer.jpg" alt="Beverages and Beer" />

      <div className="px-7 flex-1 flex flex-col pt-2">
        {/* Beverages */}
        <SectionHeader title="Beverages" />

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-2">
          {/* Juices */}
          <div>
            <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b] mb-1.5 pb-1 border-b border-[#d4af37] border-opacity-30">
              Juices
            </h3>
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-2 mb-1 border-b border-[#d4af37] border-opacity-20 pb-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e]">Item</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e] text-right">Glass</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e] text-right">Pitcher</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {beverages?.juices?.map((item) => (
                <BeverageItem key={item.name} {...item} />
              ))}
            </div>
          </div>

          {/* Tea & Coffee */}
          <div>
            <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b] mb-1.5 pb-1 border-b border-[#d4af37] border-opacity-30">
              Tea & Coffee
            </h3>
            <div className="grid grid-cols-[1fr_auto] items-center gap-x-2 mb-1 border-b border-[#d4af37] border-opacity-20 pb-1">
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e]">Item</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e] text-right">Cup</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {beverages?.teaCoffee?.map((item) => (
                <BeverageItem key={item.name} {...item} showPitcher={false} />
              ))}
            </div>
            {beverages?.note && (
              <p className="font-sans text-[10px] text-[#5a7a6e] italic mt-1">
                {beverages.note}
              </p>
            )}
          </div>
        </div>

        {/* Beer in Can */}
        <SectionHeader title="Beer in Can" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-2">
          {beer?.items?.map((item: { name: string; price: string; description?: string }) => (
            <div key={item?.name}>
              <div className="flex items-baseline justify-between gap-1">
                <span className="font-sans text-[12px] text-[#0e7c6b] font-medium">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
                <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
                  {"P"}{item.price}
                </span>
              </div>
              {item.description && (
                <p className="font-sans text-[10px] text-[#5a7a6e] italic">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* The Royal Toast */}
        <SectionHeader title="The Royal Toast" />
        <div className="flex gap-5 items-center">
          <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
            <Image
              src="/images/food/beer-bites.jpg"
              alt="The Royal Toast"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <div className="bg-[#0e7c6b] bg-opacity-5 rounded-lg p-4 border border-[#d4af37] border-opacity-30">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-xl font-bold text-[#d4af37]">
                  {"P"}{beerBites.price}
                </span>
                <span className="font-sans text-[12px] text-[#0e7c6b] opacity-70">only</span>
              </div>
              <p className="font-sans text-[12px] text-[#0e7c6b] mb-2 font-medium">
                {beerBites.description}
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-sans text-[10px] text-[#5a7a6e] font-bold uppercase tracking-wider mb-0.5">
                  Your Royal Choices:
                </p>
                {beerBites?.choices?.map((choice) => (
                  <div key={choice} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                    <span className="font-sans text-[12px] text-[#0e7c6b]">{choice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuPageFooter pageNumber={3} />
    </div>
  )
}
