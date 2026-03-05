import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { chipsSnacks, instantNoodles } from "@/lib/menu-data"

function StoreItemRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-1">
      <span className="font-sans text-[12px] text-[#0e7c6b] font-medium">{name}</span>
      <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
      <span className="font-sans text-[12px] font-bold text-[#d4af37] whitespace-nowrap">
        {price}
      </span>
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
        <SectionHeader title="Chips & Snacks" />
        <div className="flex flex-col gap-1.5 mb-3">
          {chipsSnacks.items.map((it) => (
            <StoreItemRow key={it.name} name={it.name} price={it.price} />
          ))}
        </div>

        <SectionHeader title="Instant Noodles" />
        <div className="flex flex-col gap-1.5">
          {instantNoodles.items.map((it) => (
            <StoreItemRow key={it.name} name={it.name} price={it.price} />
          ))}
        </div>
      </div>

      <MenuPageFooter pageNumber={7} />
    </div>
  )
}
