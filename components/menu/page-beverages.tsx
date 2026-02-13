import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { beverages, beer, beerBites } from "@/lib/menu-data"

function BeverageItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-1">
      <span className="font-sans text-[12px] text-[#0e7c6b] font-medium">{name}</span>
      <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
      <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
        {"P"}{price}
      </span>
    </div>
  )
}

export function PageBeverages() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden">
      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-10 pt-2">
        {/* Beverages */}
        <SectionHeader title="Beverages" />

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-5">
          {/* Left column - Juices & Tea/Coffee */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-serif text-sm font-bold text-[#0e7c6b] mb-2 pb-1 border-b border-[#d4af37] border-opacity-20">
                Juices
              </h3>
              <div className="flex flex-col gap-1.5">
                {beverages.juices.map((item) => (
                  <BeverageItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-sm font-bold text-[#0e7c6b] mb-2 pb-1 border-b border-[#d4af37] border-opacity-20">
                Tea & Coffee
              </h3>
              <div className="flex flex-col gap-1.5">
                {beverages.teaCoffee.map((item) => (
                  <BeverageItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Others */}
          <div>
            <h3 className="font-serif text-sm font-bold text-[#0e7c6b] mb-2 pb-1 border-b border-[#d4af37] border-opacity-20">
              Others
            </h3>
            <div className="flex flex-col gap-1.5">
              {beverages.others.map((item) => (
                <BeverageItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-50" />
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
        </div>

        {/* Beer in Can */}
        <SectionHeader title="Beer in Can" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 mb-5">
          {beer.items.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline justify-between gap-1">
                <span className="font-sans text-[12px] text-[#0e7c6b] font-medium">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
                <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
                  {"P"}{item.price}
                </span>
              </div>
              {item.description && (
                <p className="font-sans text-[9px] text-[#5a7a6e] italic">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-5">
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-50" />
          <div className="w-16 h-px bg-[#d4af37] opacity-30" />
        </div>

        {/* Beer Bites Promo */}
        <SectionHeader title="Beer Bites Promo" />
        <div className="flex gap-6 items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-40 shadow-sm flex-shrink-0">
            <Image
              src="/images/food/beer-bites.jpg"
              alt="Beer Bites Promo"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <div className="bg-[#0e7c6b] bg-opacity-5 rounded-lg p-4 border border-[#d4af37] border-opacity-20">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-xl font-bold text-[#d4af37]">
                  {"P"}{beerBites.price}
                </span>
                <span className="font-sans text-xs text-[#0e7c6b] opacity-70">only</span>
              </div>
              <p className="font-sans text-[11px] text-[#0e7c6b] mb-3 font-medium">
                {beerBites.description}
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-sans text-[10px] text-[#5a7a6e] font-bold uppercase tracking-wider mb-1">
                  Beer Bites Choices:
                </p>
                {beerBites.choices.map((choice) => (
                  <div key={choice} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#d4af37] rounded-full" />
                    <span className="font-sans text-[11px] text-[#0e7c6b]">{choice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuPageFooter pageNumber={5} />
    </div>
  )
}
