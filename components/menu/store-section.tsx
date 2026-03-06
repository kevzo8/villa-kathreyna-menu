import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { chipsSnacks, instantNoodles } from "@/lib/menu-data"

function StoreCategoryBlock({
  title,
  items,
  image,
  imageAlt,
  imageRight,
}: {
  title: string
  items: { name: string; price: string }[]
  image?: string
  imageAlt?: string
  imageRight?: boolean
}) {
  return (
    <div className="mb-3">
      <SectionHeader title={title} />
      <div className={`flex gap-3 items-start ${imageRight ? "flex-row-reverse" : "flex-row"}`}>
        {image && (
          <div className="w-[150px] h-[150px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0">
            <Image src={image} alt={imageAlt || title} width={150} height={150} className="object-cover w-full h-full" />
          </div>
        )}
        <div className="flex-1 min-w-0 rounded-sm border border-[#d4af37]/35 overflow-hidden bg-[#fffef9]">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-[#f5efde]">
                <th className="px-2 py-1 text-left font-sans text-[10px] uppercase tracking-wide text-[#0e7c6b] border-b border-[#d4af37]/30">
                  Item
                </th>
                <th className="px-2 py-1 text-right font-sans text-[10px] uppercase tracking-wide text-[#0e7c6b] border-b border-[#d4af37]/30 w-[64px]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.name}>
                  <td className="px-2 py-[5px] font-sans text-[12px] text-[#0e7c6b] border-b border-[#d4af37]/20">
                    {it.name}
                  </td>
                  <td className="px-2 py-[5px] font-sans text-[12px] font-bold text-[#d4af37] text-right whitespace-nowrap border-b border-[#d4af37]/20">
                    {it.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function StoreSection() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      {/* corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      {/* reuse cafe banner since there's no dedicated store banner */}
      <PageBanner imageSrc="/images/banners/cafe-drinks.jpg" alt="Store Items" />

      <div className="px-7 flex-1 flex flex-col pt-2 pb-8">
        <StoreCategoryBlock
          title="Chips & Snacks"
          items={chipsSnacks.items}
          image="/images/food/beer-bites.jpg"
          imageAlt="Chips and snacks"
          imageRight
        />

        <StoreCategoryBlock
          title="Instant Noodles"
          items={instantNoodles.items}
          image="/images/food/batchoy.jpg"
          imageAlt="Instant noodles"
        />
      </div>

      <MenuPageFooter pageNumber={7} />
    </div>
  )
}
