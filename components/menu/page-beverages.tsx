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
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-8 flex-1 flex flex-col">
        {/* Beverages */}
        <SectionHeader title="Beverages" />

        <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-4">
          {/* Left column - Juices & Tea/Coffee */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-serif text-sm font-bold text-[#0e7c6b] mb-2 pb-1 border-b border-[#d4af37] border-opacity-30">
                Juices
              </h3>
              <div className="flex flex-col gap-2">
                {beverages.juices.map((item) => (
                  <BeverageItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-sm font-bold text-[#0e7c6b] mb-2 pb-1 border-b border-[#d4af37] border-opacity-30">
                Tea & Coffee
              </h3>
              <div className="flex flex-col gap-2">
                {beverages.teaCoffee.map((item) => (
                  <BeverageItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Others */}
          <div>
            <h3 className="font-serif text-sm font-bold text-[#0e7c6b] mb-2 pb-1 border-b border-[#d4af37] border-opacity-30">
              Others
            </h3>
            <div className="flex flex-col gap-2">
              {beverages.others.map((item) => (
                <BeverageItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Beer in Can */}
        <SectionHeader title="Beer in Can" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
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
                <p className="font-sans text-[10px] text-[#5a7a6e] italic">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] opacity-60" />
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>

        {/* Beer Bites Promo */}
        <SectionHeader title="Beer Bites Promo" />
        <div className="flex gap-5 items-center">
          <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
            <Image
              src="/images/food/beer-bites.jpg"
              alt="Beer Bites Promo"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <div className="bg-[#0e7c6b] bg-opacity-5 rounded-lg p-5 border border-[#d4af37] border-opacity-30">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-2xl font-bold text-[#d4af37]">
                  {"P"}{beerBites.price}
                </span>
                <span className="font-sans text-sm text-[#0e7c6b] opacity-70">only</span>
              </div>
              <p className="font-sans text-[12px] text-[#0e7c6b] mb-3 font-medium">
                {beerBites.description}
              </p>
              <div className="flex flex-col gap-1.5">
                <p className="font-sans text-[10px] text-[#5a7a6e] font-bold uppercase tracking-wider mb-1">
                  Beer Bites Choices:
                </p>
                {beerBites.choices.map((choice) => (
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

      <MenuPageFooter pageNumber={5} />
    </div>
  )
}
