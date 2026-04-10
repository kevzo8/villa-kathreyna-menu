import Image from "next/image"
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"
import { SectionHeader } from "./section-header"

interface MenuItem {
  name: string
  price: string
}

function formatPeso(value: string) {
  return value.startsWith("₱") ? value : `₱${value}`
}

function MenuItemRow({ name, price }: MenuItem) {
  return (
    <div className="flex items-baseline justify-between gap-2 py-1.5">
      <span className="font-sans text-[16px] text-[#0e7c6b] font-medium flex-1">{name}</span>
      <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-2 mb-0.5 min-w-4" />
      <span className="font-sans text-[16px] font-bold text-[#d4af37] whitespace-nowrap">
        {formatPeso(price)}
      </span>
    </div>
  )
}

function MenuSection({ title, items, image }: { title: string; items: MenuItem[]; image?: string }) {
  return (
    <div className="mb-4">
      <h3 className="font-serif text-[16px] font-bold text-[#0e7c6b] leading-none mb-3 pb-1.5 border-b border-[#d4af37] border-opacity-30">
        {title}
      </h3>
      {image ? (
        <div className="grid grid-cols-[1fr_140px] gap-3 items-start">
          <div className="flex flex-col">
            {items.map((item) => (
              <MenuItemRow key={item.name} name={item.name} price={item.price} />
            ))}
          </div>
          <div className="w-[140px] h-[140px] rounded-2xl overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md">
            <Image src={image} alt={title} width={140} height={140} className="object-cover w-full h-full" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {items.map((item) => (
            <MenuItemRow key={item.name} name={item.name} price={item.price} />
          ))}
        </div>
      )}
    </div>
  )
}

export function CafeSectionPage3() {
  const coffeeItems: MenuItem[] = [
    { name: "Coffee Latte", price: "150" },
    { name: "Spanish Latte", price: "160" },
    { name: "Caramel Macchiato", price: "170" },
    { name: "Vietnamese Coffee", price: "180" },
    { name: "Hazelnut Latte", price: "150" },
    { name: "White Mocha Latte", price: "160" },
    { name: "Café Mocha", price: "160" },
    { name: "French Vanilla Latte", price: "150" },
    { name: "Salted Caramel Latte", price: "170" },
    { name: "Sea Salt Latte", price: "170" },
  ]

  const smoothiesItems: MenuItem[] = [
    { name: "Mango Smoothie", price: "180" },
    { name: "Strawberry Smoothie", price: "180" },
    { name: "Banana Smoothie", price: "180" },
    { name: "Blueberry Smoothie", price: "180" },
    { name: "Choco Banana Smoothie", price: "180" },
    { name: "Melon Smoothie", price: "170" },
    { name: "Apple Smoothie", price: "170" },
  ]

  const hotTeaItems: MenuItem[] = [
    { name: "Chamomile", price: "120" },
    { name: "Earl Grey", price: "120" },
    { name: "Oolong", price: "120" },
  ]

  const pastriesItems: MenuItem[] = [
    { name: "Brownies", price: "150" },
    { name: "Butterscotch", price: "130" },
    { name: "Banana Cake", price: "140" },
  ]

  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name="cafe-page3">
      {/* corner accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      <PageBanner imageSrc="/images/banners/cafe-drinks.jpg" alt="La Bella Café Menu" />

      <div className="px-7 flex-1 flex flex-col pt-2 pb-14">
        <SectionHeader title="☕ LA BELLA CAFÉ" />

        <MenuSection title="Coffee" items={coffeeItems} />
        <MenuSection title="Smoothies" items={smoothiesItems} />
        <MenuSection title="Hot Tea" items={hotTeaItems} />
        <MenuSection title="Pastries" items={pastriesItems} />
      </div>

      <MenuPageFooter pageNumber={8} />
    </div>
  )
}
