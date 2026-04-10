import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"
import { chipsSnacks, drinksAlcohol, softdrinksBeverages, noodlesFood, mealsUlam, coffeePowderedDrinks, water, candies } from "@/lib/menu-data"

function formatPeso(value: string) {
  return value.startsWith("₱") ? value : `₱${value}`
}

function StoreCategoryBlock({
  title,
  items,
}: {
  title: string
  items: { name: string; price: string }[]
}) {
  return (
    <div className="mb-2">
      <SectionHeader title={title} size="sm" />
      <div className="flex gap-2 items-start">
        <div className="flex-1 min-w-0 rounded-sm border border-[#d4af37]/35 overflow-hidden bg-[#fffef9]">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-[#f5efde]">
                <th className="px-1 py-1 text-left font-sans text-[11px] uppercase tracking-wide text-[#0e7c6b] border-b border-[#d4af37]/30">
                  Item
                </th>
                <th className="px-1 py-1 text-right font-sans text-[11px] uppercase tracking-wide text-[#0e7c6b] border-b border-[#d4af37]/30 w-[56px]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.name}>
                  <td className="px-1 py-[4px] font-sans text-[13px] text-[#0e7c6b] border-b border-[#d4af37]/20">
                    {it.name}
                  </td>
                  <td className="px-1 py-[4px] font-sans text-[13px] font-bold text-[#d4af37] text-right whitespace-nowrap border-b border-[#d4af37]/20">
                    {formatPeso(it.price)}
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
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="store">
      {/* corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-7 flex-1 pt-1 pb-4">
        <div className="grid grid-cols-2 gap-3">
          <StoreCategoryBlock
            title="Beverages & Alcohol"
            items={[...drinksAlcohol.items, ...water.items]}
          />
          <StoreCategoryBlock
            title="Softdrinks & Powdered Drinks"
            items={[...softdrinksBeverages.items, ...coffeePowderedDrinks.items]}
          />
          <StoreCategoryBlock
            title="Snacks / Chips"
            items={chipsSnacks.items}
          />
          <StoreCategoryBlock
            title="Noodles & Candies"
            items={[...noodlesFood.items, ...mealsUlam.items, ...candies.items]}
          />
        </div>
      </div>

      <MenuPageFooter pageNumber={7} />
    </div>
  )
}
