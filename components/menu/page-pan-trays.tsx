import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { PageBanner } from "./page-banner"
import Image from "next/image"

interface TrayItem {
  name: string
  price: number
}

interface TrayCategory {
  title: string
  items: TrayItem[]
}

const panTrayCategories: TrayCategory[] = [
  {
    title: "Beef Menu",
    items: [
      { name: "Beef with Potato Marbles", price: 1299 },
      { name: "Chinese Beef Steak", price: 1299 },
      { name: "Korean Beef", price: 1299 },
      { name: "Beef Salpicao", price: 1299 },
      { name: "Bistik Tagalog", price: 1299 },
    ],
  },
  {
    title: "Pork Menu",
    items: [
      { name: "Baby Back Ribs", price: 999 },
      { name: "Pork Hamonado", price: 999 },
      { name: "Pork Medallions", price: 999 },
      { name: "Sweet & Sour Pork", price: 999 },
      { name: "Pork Humba", price: 999 },
      { name: "Lechon Kawali", price: 999 },
      { name: "Pork Caldereta", price: 999 },
    ],
  },
  {
    title: "Chicken Menu",
    items: [
      { name: "Chicken Ala King", price: 999 },
      { name: "Buttered Chicken", price: 899 },
      { name: "Chicken Salpicao", price: 899 },
      { name: "Orange Chicken", price: 899 },
    ],
  },
  {
    title: "Fish Menu",
    items: [
      { name: "Grilled Tuna", price: 1299 },
      { name: "Sweet & Sour Fish Fillet", price: 999 },
      { name: "Fish Fillet with White Sauce", price: 999 },
      { name: "Tanigue Steak", price: 1299 },
    ],
  },
]

const bilaoItems = [
  { name: "Pancit Guisado", small: 499, medium: 699, large: 899 },
  { name: "Bihon Guisado", small: 499, medium: 699, large: 899 },
  { name: "Sotanghon", small: 499, medium: 699, large: 899 },
  { name: "Spaghetti", small: 599, medium: 799, large: 999 },
  { name: "Carbonara", small: 599, medium: 799, large: 999 },
  { name: "Special Biko", small: 499, medium: 699, large: 899 },
]

function TrayCategoryCard({ title, items }: TrayCategory) {
  return (
    <div className="rounded-sm border border-[#d4af37]/35 bg-[#fffef9] p-2.5">
      <h3 className="font-serif text-[16px] font-bold text-[#0e7c6b] text-center">{title}</h3>
      <div className="w-10 h-px bg-[#d4af37] opacity-60 mx-auto my-1.5" />

      <div className="space-y-0.5">
        {items.map((item) => (
          <div key={`${title}-${item.name}`} className="flex items-baseline gap-1">
            <span className="font-sans text-[11px] text-[#2f4f45] leading-tight">{item.name}</span>
            <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mb-1" />
            <span className="font-sans text-[11px] font-bold text-[#d4af37]">₱{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PagePanTrays({ pageNumber = 9 }: { pageNumber?: number }) {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="pan-trays">
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      
      {/* Pan tray images carousel */}
      <div className="menu-banner relative w-full h-[140px] overflow-hidden mx-auto flex-shrink-0">
        <div className="absolute inset-0 flex gap-2">
          <div className="flex-1 relative">
            <Image
              src="/images/banners/pan-tray-beef.png"
              alt="Beef pan tray"
              fill
              className="object-cover menu-banner-image"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4af37] opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37] opacity-40" />
      </div>

      <div className="px-6 pt-2 pb-12 flex-1 flex flex-col gap-2">
        <SectionHeader title="Pan Trays Menu" subtitle="Good for 10-12 pax" />

        <div className="grid grid-cols-2 gap-2">
          {panTrayCategories.map((category) => (
            <TrayCategoryCard key={category.title} title={category.title} items={category.items} />
          ))}
        </div>

        <SectionHeader title="Bilao Menu" subtitle="Tray sizes and pricing" />

        <div className="rounded-sm border border-[#d4af37]/35 bg-[#fffef9] overflow-hidden">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-[#f5efde]">
                <th className="px-2 py-1 text-left text-[11px] font-bold text-[#0e7c6b] border-r border-b border-[#d4af37]/30">Item</th>
                <th className="px-2 py-1 text-center text-[11px] font-bold text-[#0e7c6b] border-r border-b border-[#d4af37]/30">S</th>
                <th className="px-2 py-1 text-center text-[11px] font-bold text-[#0e7c6b] border-r border-b border-[#d4af37]/30">M</th>
                <th className="px-2 py-1 text-center text-[11px] font-bold text-[#0e7c6b] border-b border-[#d4af37]/30">L</th>
              </tr>
            </thead>
            <tbody>
              {bilaoItems.map((item) => (
                <tr key={item.name}>
                  <td className="px-2 py-1 text-[11px] text-[#2f4f45] border-r border-b border-[#d4af37]/20">{item.name}</td>
                  <td className="px-2 py-1 text-[11px] text-center font-bold text-[#d4af37] border-r border-b border-[#d4af37]/20">₱{item.small}</td>
                  <td className="px-2 py-1 text-[11px] text-center font-bold text-[#d4af37] border-r border-b border-[#d4af37]/20">₱{item.medium}</td>
                  <td className="px-2 py-1 text-[11px] text-center font-bold text-[#d4af37] border-b border-[#d4af37]/20">₱{item.large}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-sm border border-[#d4af37]/30 bg-[#fffdf8] px-3 py-2 flex items-center justify-center gap-5 text-[10px]">
          <p className="font-sans text-[#5a7a6e] uppercase tracking-[0.08em]">Small: 5-7 pax</p>
          <p className="font-sans text-[#5a7a6e] uppercase tracking-[0.08em]">Medium: 8-10 pax</p>
          <p className="font-sans text-[#5a7a6e] uppercase tracking-[0.08em]">Large: 10-13 pax</p>
        </div>

        {/* Pan Tray Image Gallery */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="relative h-[60px] rounded-sm border border-[#d4af37]/30 overflow-hidden">
            <Image
              src="/images/banners/pan-tray-beef.png"
              alt="Beef pan tray"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[60px] rounded-sm border border-[#d4af37]/30 overflow-hidden">
            <Image
              src="/images/banners/pan-tray-pork.jpg"
              alt="Pork pan tray"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[60px] rounded-sm border border-[#d4af37]/30 overflow-hidden">
            <Image
              src="/images/banners/pan-tray-seafood.jpg"
              alt="Seafood pan tray"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <MenuPageFooter pageNumber={pageNumber} />
    </div>
  )
}