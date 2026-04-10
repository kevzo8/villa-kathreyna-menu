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

// capitalize the category key, e.g. "coffee" -> "Coffee"
function humanizeKey(key: string) {
  switch (key) {
    case "coffee":
      return "Coffee";
    case "juices":
      return "Juices";
    case "smoothies":
      return "Smoothies";
    case "pastries":
      return "Pastries";
    case "hotTea":
      return "Hot Tea";
    case "frappe":
      return "Frappe";
    default:
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
  }
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
        <h3 className="font-serif text-[16px] font-bold text-[#0e7c6b] leading-none">
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

function DrinkSizesBlock({ sizes }: { sizes: string[] }) {
  return (
    <div className="mb-4 px-4 py-3 rounded-3xl border border-[#d4af37] border-opacity-30 bg-white/90 text-center shadow-sm">
      <p className="font-serif text-[14px] text-[#0e7c6b] font-bold uppercase tracking-[0.1em] mb-2">Drink Sizes</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-[#5a7a6e] font-sans">
        {sizes.map((line) => (
          <div key={line} className="rounded-2xl bg-[#fbf8f0] py-2 border border-[#d4af37] border-opacity-20">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

function SmoothiesTable({ items }: { items: CafeItem[] }) {
  return (
    <div className="mb-4">
      <h3 className="font-serif text-[16px] font-bold text-[#0e7c6b] mb-3 pb-2 border-b border-[#d4af37] border-opacity-40">
        Smoothies
      </h3>
      <div className="grid grid-cols-[1fr_170px] gap-4 items-start">
        <div>
          <div className="flex flex-col">
            {items.map((it) => (
              <CafeItemRow key={it.name} name={it.name} price={it.price} />
            ))}
          </div>
        </div>
        <div className="w-[170px] h-[170px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md">
          <Image src="/images/cafe/strawberry-smoothie.jpg" alt="Smoothies" width={170} height={170} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export function CafeSection() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="cafe">
      {/* corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      <PageBanner imageSrc="/images/banners/cafe-drinks.jpg" alt="La Bella Café Menu" />

      <div className="px-7 flex-1 flex flex-col pt-2 pb-14">
        <SectionHeader title="La Bella Café" />

        {/* Espresso drinks with price table */}
        {(() => {
          const { title, drinkSizes, nonCoffee, smoothies, ...categories } = cafeMenu as any
          const items = categories.espresso || []

          return (
            <div className="mb-6">
              <div>
                <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 mb-2 pb-2 border-b-2 border-[#d4af37] border-opacity-40">
                  <div className="text-center font-serif text-[16px] font-bold text-[#0e7c6b]">☕ Espresso-Based Drinks</div>
                  <div className="text-center font-serif text-[14px] font-bold text-[#0e7c6b]">🔥 Hot</div>
                  <div className="text-center font-serif text-[14px] font-bold text-[#0e7c6b]">❄️ Iced</div>
                </div>
                {items.map((it: CafeItem) => (
                  <CafeDualPriceRow key={it.name} name={it.name} priceHot={it.priceHot!} priceIced={it.priceIced!} />
                ))}
              </div>

              {/* Two images below price list */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex flex-col items-center">
                  <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md mb-2">
                    <Image src="/images/cafe/caffe-americano.jpg" alt="Caffè Americano" width={180} height={180} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-[13px] text-[#0e7c6b] font-medium">Caffè Americano</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md mb-2">
                    <Image src="/images/cafe/spanish-latte.jpg" alt="Spanish Latte" width={180} height={180} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-[13px] text-[#0e7c6b] font-medium">Spanish Latte</span>
                </div>
              </div>
            </div>
          )
        })()}
      </div>

      <MenuPageFooter pageNumber={6} />
    </div>
  )
}
