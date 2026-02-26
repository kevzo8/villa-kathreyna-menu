import { MenuCover } from "@/components/menu/menu-cover"
import { MenuPageHeader } from "@/components/menu/menu-page-header"
import { PageBanner } from "@/components/menu/page-banner"
import { MenuPageFooter } from "@/components/menu/menu-page-footer"
import { SectionHeader } from "@/components/menu/section-header"
import { MenuItemCard } from "@/components/menu/menu-item"
import { PrintButton } from "@/components/menu/print-button"
import { CafeSection } from "@/components/menu/cafe-section"
import { StoreSection } from "@/components/menu/store-section"
import Image from "next/image"
import {
  appetizers, soups, alaCarte, nilagaSinigang,
  pasta, noodles,
  filipinoBreakfast, saversMeal, rice,
  sandwiches, desserts,
  beverages, beer, beerBites,
} from "@/lib/menu-data"

function BeverageItem({ name, price, pitcher }: { name: string; price: string; pitcher?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-1">
      <span className="font-sans text-[11px] text-[#0e7c6b] font-medium">{name}</span>
      <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
      <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">
        {"P"}{price}
        {pitcher && <span className="text-[#5a7a6e] font-normal text-[10px]"> / P{pitcher}</span>}
      </span>
    </div>
  )
}

function DualPriceItem({ item }: { item: { name: string; price: string; price2?: string; description: string; image?: string } }) {
  return (
    <div className="flex items-baseline justify-between gap-1">
      <span className="font-sans text-[11px] text-[#0e7c6b] font-medium">{item.name}</span>
      <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
      <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">
        {"P"}{item.price}
        {item.price2 && <span className="text-[#5a7a6e] font-normal text-[10px]"> / P{item.price2}</span>}
      </span>
    </div>
  )
}

export default function MenuPage() {
  return (
    <main className="bg-[#2a2a2a] min-h-screen">
      <PrintButton />

      {/* ============ COVER ============ */}
      <MenuCover />

      {/* ============ PAGE 1: Appetizers & Soups ============ */}
      <div className="menu-page w-[210mm] min-h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
        <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
        <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />
        <MenuPageHeader />
        <PageBanner imageSrc="/images/banners/appetizers-soups.jpg" alt="Appetizers and Soups" />
        <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
          <SectionHeader title="Appetizers" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {appetizers.items.map((item) => (
              <MenuItemCard key={item.name} item={item} imageSize="lg" />
            ))}
          </div>
          <div className="mt-2">
            <SectionHeader title="Soups" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {soups.items.map((item) => (
                <MenuItemCard key={item.name} item={item} imageSize="lg" />
              ))}
            </div>
          </div>
        </div>
        <MenuPageFooter pageNumber={1} />
      </div>

      {/* ============ PAGE 2: Ala Carte & Nilaga/Sinigang ============ */}
      <div className="menu-page w-[210mm] min-h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
        <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
        <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />
        <MenuPageHeader />
        <PageBanner imageSrc="/images/banners/ala-carte-nilaga.jpg" alt="Ala Carte and Nilaga Sinigang" />
        <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
          <SectionHeader title="Ala Carte" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {alaCarte.items.map((item) => (
              <MenuItemCard key={item.name} item={item} imageSize="md" />
            ))}
          </div>
          <div className="mt-2">
            <SectionHeader title="Nilaga & Sinigang" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {nilagaSinigang.items.map((item) => (
                <MenuItemCard key={item.name} item={item} imageSize="md" />
              ))}
            </div>
          </div>
        </div>
        <MenuPageFooter pageNumber={2} />
      </div>

      {/* ============ PAGE 3: Pasta, Noodles, Sandwiches ============ */}
      <div className="menu-page w-[210mm] min-h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
        <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
        <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />
        <MenuPageHeader />
        <PageBanner imageSrc="/images/banners/veggies-sandwiches-desserts.jpg" alt="Pasta, Noodles, and Sandwiches" />
        <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
          <SectionHeader title="Pasta" subtitle={pasta.subtitle} />
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 mb-2">
            {pasta.items.map((item) => (
              <div key={item.name}>
                <DualPriceItem item={item} />
                {item.description && (
                  <p className="font-sans text-[9px] text-[#5a7a6e] leading-snug mt-0.5">{item.description}</p>
                )}
              </div>
            ))}
          </div>

          <SectionHeader title="Noodles" subtitle={noodles.subtitle} />
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 mb-2">
            {noodles.items.map((item) => (
              <div key={item.name}>
                <DualPriceItem item={item} />
                {item.description && (
                  <p className="font-sans text-[9px] text-[#5a7a6e] leading-snug mt-0.5">{item.description}</p>
                )}
              </div>
            ))}
          </div>

          <SectionHeader title="Sandwiches" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {sandwiches.items.map((item) => (
              <MenuItemCard key={item.name} item={item} imageSize="md" />
            ))}
          </div>
        </div>
        <MenuPageFooter pageNumber={3} />
      </div>

      {/* ============ PAGE 4: Breakfast, Savers, Rice ============ */}
      <div className="menu-page w-[210mm] min-h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
        <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
        <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />
        <MenuPageHeader />
        <PageBanner imageSrc="/images/banners/breakfast-savers.jpg" alt="Filipino Breakfast and Savers Meals" />
        <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
          <SectionHeader title="Filipino Breakfast (Silog)" subtitle={filipinoBreakfast.subtitle} />
          <div className="grid grid-cols-3 gap-x-6 gap-y-1.5 mb-2">
            {filipinoBreakfast.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-1">
                <span className="font-sans text-[11px] text-[#0e7c6b] font-medium">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-2" />
                <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">P{item.price}</span>
              </div>
            ))}
          </div>

          <SectionHeader title="Savers Meal" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-2">
            {saversMeal.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-1">
                <span className="font-sans text-[11px] text-[#0e7c6b] font-medium">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-2" />
                <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">P{item.price}</span>
              </div>
            ))}
          </div>

          <SectionHeader title="Rice" subtitle={rice.subtitle} />
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {rice.items.map((item) => (
              <div key={item.name}>
                <DualPriceItem item={item} />
                {item.description && (
                  <p className="font-sans text-[9px] text-[#5a7a6e] leading-snug mt-0.5">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <MenuPageFooter pageNumber={4} />
      </div>

      {/* ============ PAGE 5: Desserts, Beverages, Beer, Royal Toast ============ */}
      <div className="menu-page w-[210mm] min-h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
        <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
        <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />
        <MenuPageHeader />
        <PageBanner imageSrc="/images/banners/beverages-beer.jpg" alt="Desserts and Beverages" />
        <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
          <SectionHeader title="Desserts" />
          <div className="grid grid-cols-4 gap-x-4 gap-y-1.5 mb-2">
            {desserts.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-1">
                <span className="font-sans text-[11px] text-[#0e7c6b] font-medium">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-2" />
                <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">P{item.price}</span>
              </div>
            ))}
          </div>

          <SectionHeader title="Beverages" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-2">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] pb-1 border-b border-[#d4af37] border-opacity-30">
                Juices & Iced Drinks
                <span className="text-[9px] font-normal text-[#5a7a6e] ml-2">Glass / Pitcher</span>
              </h3>
              <div className="flex flex-col gap-1.5">
                {beverages.drinks.map((item) => (
                  <BeverageItem key={item.name} name={item.name} price={item.price} pitcher={item.pitcher} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] pb-1 border-b border-[#d4af37] border-opacity-30">
                Hot Drinks
              </h3>
              <div className="flex flex-col gap-1.5">
                {beverages.hotDrinks.map((item) => (
                  <BeverageItem key={item.name} name={item.name} price={item.price} />
                ))}
              </div>
              <p className="font-sans text-[9px] text-[#5a7a6e] italic mt-1">{beverages.note}</p>
            </div>
          </div>

          <SectionHeader title="Beer & Alcohol" />
          <div className="grid grid-cols-3 gap-x-6 gap-y-1.5 mb-2">
            {beer.items.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-1">
                <span className="font-sans text-[11px] text-[#0e7c6b] font-medium">{item.name}</span>
                <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-2" />
                <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">P{item.price}</span>
              </div>
            ))}
          </div>

          <SectionHeader title="The Royal Toast" />
          <div className="flex gap-5 items-center">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
              <Image
                src="/images/food/beer-bites.jpg"
                alt="The Royal Toast"
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="bg-[#0e7c6b] bg-opacity-5 rounded-lg p-3 border border-[#d4af37] border-opacity-30">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-lg font-bold text-[#d4af37]">P{beerBites.price}</span>
                  <span className="font-sans text-[11px] text-[#0e7c6b] opacity-70">only</span>
                </div>
                <p className="font-sans text-[11px] text-[#0e7c6b] mb-1 font-medium">{beerBites.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                  {beerBites.choices.map((choice) => (
                    <div key={choice} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
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

      {/* ============ PAGE 6: Cafe Menu ============ */}
      <CafeSection />

      {/* ============ PAGE 7: Chips, Snacks & Store Items ============ */}
      <StoreSection />
    </main>
  )
}
