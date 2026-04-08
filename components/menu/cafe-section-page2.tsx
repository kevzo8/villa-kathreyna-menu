import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { cafeMenu } from "@/lib/menu-data"

interface CafeItem {
  name: string
  price?: string
  priceHot?: string
  priceIced?: string
  pitcher?: string
}

function formatPeso(value: string) {
  return value.startsWith("₱") ? value : `₱${value}`
}

function CafeItemRow({ name, price, pitcher }: CafeItem) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 py-1.5">
        <span className="font-sans text-[16px] text-[#0e7c6b] font-medium flex-1">{name}</span>
        <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-2 mb-0.5 min-w-4" />
        <span className="font-sans text-[16px] font-bold text-[#d4af37] whitespace-nowrap">
          {formatPeso(price!)}
        </span>
      </div>
      {pitcher && (
        <div className="flex items-baseline justify-between gap-2 ml-4">
          <span className="font-sans text-[15px] text-[#5a7a6e]">Pitcher</span>
          <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-30 mx-2 mb-0.5 min-w-4" />
          <span className="font-sans text-[15px] font-bold text-[#d4af37] whitespace-nowrap">
            {formatPeso(pitcher)}
          </span>
        </div>
      )}
    </div>
  )
}

function CafeDualPriceRow({ name, priceHot, priceIced }: { name: string; priceHot: string; priceIced: string }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 items-center py-2.5 border-b border-[#d4af37] border-opacity-20">
      <span className="font-sans text-[17px] text-[#0e7c6b] font-medium">{name}</span>
      <span className="font-sans text-[17px] font-bold text-[#d4af37] text-center">{formatPeso(priceHot)}</span>
      <span className="font-sans text-[17px] font-bold text-[#d4af37] text-center">{formatPeso(priceIced)}</span>
    </div>
  )
}

function CafeCategoryBlock({
  title,
  subtitle,
  items,
  image,
  imageAlt,
  reverse,
  imageSize = "md",
  imageHeight,
  isDualPrice = false,
}: {
  title: string
  subtitle?: string
  items: CafeItem[]
  image?: string
  imageAlt?: string
  reverse?: boolean
  imageSize?: "sm" | "md" | "lg" | "xl"
  imageHeight?: number
  isDualPrice?: boolean
}) {
  const imageBoxSize = imageSize === "xl" ? 190 : imageSize === "lg" ? 170 : imageSize === "sm" ? 108 : 132
  const imageBoxHeight = imageHeight ?? imageBoxSize
  const imageGridCols = imageSize === "xl" ? "grid-cols-[190px_1fr]" : imageSize === "lg" ? "grid-cols-[170px_1fr]" : imageSize === "sm" ? "grid-cols-[108px_1fr]" : "grid-cols-[132px_1fr]"

  return (
    <div className="mb-4">
      <div className="mb-3">
        <h3 className="font-serif text-[18px] font-bold text-[#0e7c6b] leading-none">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-[13px] text-[#5a7a6e] mt-2 font-sans">{subtitle}</p>
        ) : null}
      </div>

      {isDualPrice ? (
        <div>
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 mb-2 pb-2 border-b-2 border-[#d4af37] border-opacity-40">
            <div></div>
            <div className="text-center font-serif text-[14px] font-bold text-[#0e7c6b]">🔥 Hot</div>
            <div className="text-center font-serif text-[14px] font-bold text-[#0e7c6b]">❄️ Iced</div>
          </div>
          {items.map((it) => (
            <CafeDualPriceRow key={it.name} name={it.name} priceHot={it.priceHot!} priceIced={it.priceIced!} />
          ))}
        </div>
      ) : image ? (
        <div className={`grid ${imageGridCols} gap-3 items-start ${reverse ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1" : ""}`}>
          <div
            className="rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md"
            style={{ width: `${imageBoxSize}px`, height: `${imageBoxHeight}px` }}
          >
            <Image src={image} alt={imageAlt || title} width={imageBoxSize} height={imageBoxHeight} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col">
            {items.map((it) => (
              <CafeItemRow key={it.name} name={it.name} price={it.price} pitcher={it.pitcher} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {items.map((it) => (
            <CafeItemRow key={it.name} name={it.name} price={it.price} pitcher={it.pitcher} />
          ))}
        </div>
      )}
    </div>
  )
}

function CafeTwoImageLayout({ title, items, image1, image2, image1Alt, image2Alt }: { title: string; items: CafeItem[]; image1: string; image2: string; image1Alt: string; image2Alt: string }) {
  return (
    <div className="mb-4">
      <h3 className="font-serif text-[18px] font-bold text-[#0e7c6b] leading-none mb-3">
        {title}
      </h3>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 items-start">
        {/* Left side: menu items with dual prices */}
        <div>
          <div className="grid grid-cols-1 gap-3 mb-2 pb-2">
            {items.map((it) => (
              <CafeDualPriceRow key={it.name} name={it.name} priceHot={it.priceHot!} priceIced={it.priceIced!} />
            ))}
          </div>
        </div>
        {/* Right side: two stacked images */}
        <div className="flex flex-col gap-3">
          <div className="w-[130px] h-[130px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md">
            <Image src={image1} alt={image1Alt} width={130} height={130} className="object-cover w-full h-full" />
          </div>
          <div className="w-[130px] h-[130px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md">
            <Image src={image2} alt={image2Alt} width={130} height={130} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function CafeSectionPage2() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="cafe-page2">
      {/* corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      <PageBanner imageSrc="/images/banners/cafe-drinks.jpg" alt="La Bella Café Menu Continued" />

      <div className="px-7 flex-1 flex flex-col pt-2 pb-14">
        <SectionHeader title="La Bella Café" />

        {/* Non-Coffee and Smoothies with images */}
        {(() => {
          const { title, drinkSizes, espresso, ...categories } = cafeMenu as any
          const nonCoffeeItems = categories.nonCoffee || []
          const smoothiesItems = categories.smoothies || []

          return (
            <div className="flex-1 flex flex-col">
              {/* Non-Coffee Drinks */}
              <div className="mb-6">
                <h3 className="font-serif text-[18px] font-bold text-[#0e7c6b] leading-none mb-3">
                  🍵 Non-Coffee Drinks
                </h3>
                <div>
                  <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 mb-2 pb-2 border-b-2 border-[#d4af37] border-opacity-40">
                    <div></div>
                    <div className="text-center font-serif text-[14px] font-bold text-[#0e7c6b]">🔥 Hot</div>
                    <div className="text-center font-serif text-[14px] font-bold text-[#0e7c6b]">❄️ Iced</div>
                  </div>
                  {nonCoffeeItems.map((it: CafeItem) => (
                    <CafeDualPriceRow key={it.name} name={it.name} priceHot={it.priceHot!} priceIced={it.priceIced!} />
                  ))}
                </div>
              </div>

              {/* Smoothies */}
              <div className="mb-6">
                <h3 className="font-serif text-[18px] font-bold text-[#0e7c6b] leading-none mb-3 pb-2 border-b-2 border-[#d4af37] border-opacity-40">
                  🥤 Smoothies
                </h3>
                <div>
                  {smoothiesItems.map((it: CafeItem) => (
                    <div key={it.name} className="grid grid-cols-[2fr_1fr_1fr] gap-3 items-center py-2.5 border-b border-[#d4af37] border-opacity-20">
                      <span className="font-sans text-[17px] text-[#0e7c6b] font-medium">{it.name}</span>
                      <span className="font-sans text-[17px] font-bold text-[#d4af37] text-center">{formatPeso(it.price!)}</span>
                      <div></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two images below pricelists */}
              <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-[170px] h-[170px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md mb-2">
                    <Image src="/images/cafe/ube-latte.jpg" alt="Ube Latte" width={170} height={170} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-[13px] text-[#0e7c6b] font-medium">Ube Latte</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[170px] h-[170px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md mb-2">
                    <Image src="/images/cafe/strawberry-smoothie.jpg" alt="Strawberry Smoothie" width={170} height={170} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-[13px] text-[#0e7c6b] font-medium">Strawberry Smoothie</span>
                </div>
              </div>

              {/* Drink sizes at bottom */}
              <div className="mb-4 text-center">
                <p className="text-[13px] text-[#5a7a6e] font-sans flex flex-wrap items-center justify-center gap-1">
                  <span className="w-full font-serif font-bold text-[#0e7c6b]">Drink Sizes</span>
                  <span>Hot Drinks – Tall (12oz)</span>
                  <span className="text-[#d4af37]">|</span>
                  <span>Iced Drinks – Grande (16oz)</span>
                </p>
              </div>
            </div>
          )
        })()}
      </div>

      <MenuPageFooter pageNumber={7} />
    </div>
  )
}
