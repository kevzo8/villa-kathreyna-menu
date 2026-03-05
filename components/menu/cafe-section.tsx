import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { cafeMenu } from "@/lib/menu-data"

interface CafeItem {
  name: string
  price: string
  pitcher?: string
}

function CafeItemRow({ name, price, pitcher }: CafeItem) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-1">
        <span className="font-sans text-[12px] text-[#0e7c6b] font-medium">{name}</span>
        <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
        <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
          {price}
        </span>
      </div>
      {pitcher && (
        <div className="flex items-baseline justify-between gap-1 ml-4">
          <span className="font-sans text-[11px] text-[#0e7c6b]">Pitcher</span>
          <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-30 mx-1 mb-0.5 min-w-4" />
          <span className="font-sans text-[11px] font-bold text-[#d4af37] whitespace-nowrap">
            {pitcher}
          </span>
        </div>
      )}
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
  items,
  image,
  imageAlt,
  reverse,
  imageSize = "md",
}: {
  title: string
  items: CafeItem[]
  image?: string
  imageAlt?: string
  reverse?: boolean
  imageSize?: "sm" | "md" | "lg" | "xl"
}) {
  const imageBoxSize = imageSize === "xl" ? 190 : imageSize === "lg" ? 170 : imageSize === "sm" ? 108 : 132
  const imageGridCols = imageSize === "xl" ? "grid-cols-[190px_1fr]" : imageSize === "lg" ? "grid-cols-[170px_1fr]" : imageSize === "sm" ? "grid-cols-[108px_1fr]" : "grid-cols-[132px_1fr]"

  return (
    <div className="mb-2.5">
      <h3 className="font-serif text-[14px] font-bold text-[#0e7c6b] mb-1.5 pb-1 border-b border-[#d4af37] border-opacity-30">
        {title}
      </h3>

      {image ? (
        <div className={`grid ${imageGridCols} gap-2.5 items-start ${reverse ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1" : ""}`}>
          <div
            className="rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md"
            style={{ width: `${imageBoxSize}px`, height: `${imageBoxSize}px` }}
          >
            <Image src={image} alt={imageAlt || title} width={imageBoxSize} height={imageBoxSize} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col gap-1.5">
            {items.map((it) => (
              <CafeItemRow key={it.name} name={it.name} price={it.price} pitcher={it.pitcher} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {items.map((it) => (
            <CafeItemRow key={it.name} name={it.name} price={it.price} pitcher={it.pitcher} />
          ))}
        </div>
      )}
    </div>
  )
}

function SmoothiesTable({ items }: { items: CafeItem[] }) {
  return (
    <div className="mb-2.5">
      <h3 className="font-serif text-[14px] font-bold text-[#0e7c6b] mb-1.5 pb-1 border-b border-[#d4af37] border-opacity-30">
        Smoothies
      </h3>
      <div className="grid grid-cols-[1fr_170px] gap-3 items-start">
        <div>
          <div className="grid grid-cols-[1fr_auto] px-1 py-1">
            <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e]">Item</span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-[#5a7a6e] text-right">Price</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {items.map((it) => (
              <CafeItemRow key={it.name} name={it.name} price={it.price} />
            ))}
          </div>
        </div>
        <div className="w-[170px] h-[170px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md">
          <Image src="/images/food/smoothie.jpg" alt="Smoothies" width={170} height={170} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}

export function CafeSection() {
  const categoryVisuals: Record<string, { image?: string; imageAlt?: string; reverse?: boolean; imageSize?: "sm" | "md" | "lg" | "xl" }> = {
    coffee: { image: "/images/food/coffee-latte.jpg", imageAlt: "Coffee", imageSize: "xl" },
    hotTea: {},
    pastries: { image: "/images/food/pastries.jpg", imageAlt: "Pastries", imageSize: "lg" },
  }

  return (
    <div className="menu-page w-[210mm] min-h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* corner accents copied from other pages */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      <PageBanner imageSrc="/images/banners/cafe-drinks.jpg" alt="La Bella Café Menu" />

      <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
        <SectionHeader title="La Bella Café" />

        {/* walk through each category except the title field */}
        {(() => {
          const { title, ...categories } = cafeMenu as any
          const orderedKeys = ["coffee", "smoothies", "hotTea", "pastries"]

          const visibleKeys = orderedKeys.filter((key) => key in categories)

          return visibleKeys.map((key) => {
            const items = categories[key] || []
            const visual = categoryVisuals[key] || {}

            if (key === "smoothies") {
              return <SmoothiesTable key={key} items={items} />
            }

            return (
              <CafeCategoryBlock
                key={key}
                title={humanizeKey(key)}
                items={items}
                image={visual.image}
                imageAlt={visual.imageAlt}
                reverse={visual.reverse}
                imageSize={visual.imageSize}
              />
            )
          })
        })()}
      </div>

      <MenuPageFooter pageNumber={6} />
    </div>
  )
}
