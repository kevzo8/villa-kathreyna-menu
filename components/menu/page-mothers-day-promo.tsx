import Image from "next/image"
import { Heart } from "lucide-react"
import { MenuPageFooter } from "./menu-page-footer"
import { MenuPageHeader } from "./menu-page-header"

interface FamilyBundle {
  name: string
  price: string
  pax: string
  tagline: string
  items: string[]
}

const mothersDayBundles: FamilyBundle[] = [
  {
    name: "The Duchess\u2019 Delight",
    price: "4,999",
    pax: "5-6 persons",
    tagline: "An elegant feast for intimate family moments",
    items: [
      "Beef Salpicao",
      "Pork Sinigang",
      "Buttered Chicken",
      "Chao Fan Rice",
      "Plain Rice",
      "Blue Lemonade",
      "Fruit Salad",
    ],
  },
  {
    name: "The Countess\u2019 Table",
    price: "5,999",
    pax: "6-7 persons",
    tagline: "A generous feast for joyful gatherings",
    items: [
      "Korean Beef",
      "Chicken Binakol",
      "Mixed Veggies",
      "Lechon Kawali",
      "Tinapa Rice",
      "Plain Rice",
      "Red Iced Tea",
      "Leche Flan",
    ],
  },
  {
    name: "The Empress\u2019 Banquet",
    price: "6,999",
    pax: "7-8 persons",
    tagline: "A grand feast for a truly special celebration",
    items: [
      "Bistek Tagalog",
      "Sinigang Salmon Belly",
      "Buttered Veggies",
      "Chicken Ala Max",
      "Merah Rice",
      "Plain Rice",
      "Blue Lemonade",
      "Fruit Salad",
    ],
  },
  {
    name: "The Queen Mother\u2019s Feast",
    price: "7,999",
    pax: "8-9 persons",
    tagline: "The ultimate royal feast for the most important woman in your life",
    items: [
      "Beef with Potato Marbles",
      "Sinigang na Hipon",
      "Crispy Pata",
      "Chopsuey",
      "Villa Special Fried Rice",
      "Plain Rice",
      "Red Iced Tea",
      "Leche Flan",
    ],
  },
]

export function PageMothersDayPromo({ pageNumber = 10 }: { pageNumber?: number }) {
  return (
    <div
      className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col"
      data-page-name="mothers-day-promo"
    >
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-6 pt-2 pb-3 flex-1 flex flex-col gap-2">
        <div className="rounded-sm border border-[#d4af37]/35 bg-[#fffdf8] px-4 py-3 text-center">
          <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#5a7a6e]">Limited Offer &bull; May 10, 2026</p>
          <h2 className="mt-1 inline-flex items-center gap-1.5 font-display text-[28px] font-bold leading-none text-[#0e7c6b]">
            <Heart className="h-5 w-5 text-[#d4af37]" aria-hidden="true" />
            Mother&apos;s Day Promo Package
          </h2>
          <p className="mt-0.5 font-serif text-[11px] font-semibold text-[#d4af37] italic">Give the queen of your home the celebration she truly deserves 💖</p>
          <p className="mt-0.5 font-sans text-[10px] font-semibold text-[#0e7c6b]">La Bella Cafè &amp; Resto Bar &bull; Villa Kathreyna Event Place &amp; Resort</p>
        </div>

        <div className="rounded-sm border border-[#d4af37]/30 bg-white p-1.5">
          <div className="grid grid-cols-5 gap-1.5 overflow-hidden rounded-sm" style={{height:'96px'}}>
            <div className="relative col-span-2">
              <Image src="/images/banners/catering.jpg" alt="Feast spread" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/liempo.png" alt="Liempo" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/porkchop.png" alt="Pork" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/banners/cafe-drinks.jpg" alt="Drinks" fill className="object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mt-1.5 overflow-hidden rounded-sm" style={{height:'72px'}}>
            <div className="relative">
              <Image src="/images/cafe/choco-basque.jpg" alt="Choco Basque" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/biscoff-basque.jpg" alt="Biscoff Basque" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/banners/ala-carte-nilaga.jpg" alt="Soup dish" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/nachos.jpg" alt="Nachos" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/strawberry-smoothie.jpg" alt="Smoothie" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {mothersDayBundles.map((bundle) => (
            <div key={bundle.name} className="rounded-sm border border-[#d4af37]/35 bg-white p-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-[16px] font-bold text-[#0e7c6b] leading-tight">{bundle.name}</h3>
                <span className="font-display text-[23px] font-bold leading-none text-[#d4af37] shrink-0">₱{bundle.price}</span>
              </div>
              <p className="font-sans text-[9.5px] text-[#5a7a6e] italic leading-tight">{bundle.tagline}</p>
              <p className="mt-0.5 font-sans text-[10px] font-semibold text-[#5a7a6e]">Good for {bundle.pax}</p>

              <ul className="mt-2 space-y-1">
                {bundle.items.map((item) => (
                  <li key={`${bundle.name}-${item}`} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    <span className="font-sans text-[12px] text-[#2f4f45] leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-sm border border-[#0e7c6b]/25 bg-[#0e7c6b]/5 px-4 py-1.5 text-center">
          <p className="font-sans text-[10.5px] font-semibold text-[#0e7c6b]">⏰ Slots are limited &mdash; first come, first served &bull; Lunch &amp; dinner slots available</p>
          <p className="font-sans text-[9.5px] text-[#5a7a6e] mt-0.5">📍 Zone 5, Planza, San Fernando, Camarines Sur &bull; 💐 Mother&apos;s Day: May 10, 2026</p>
          <p className="font-sans text-[9px] text-[#5a7a6e]/70 mt-0.5 tracking-wide">#MothersDay2026 #RoyalFeast #CelebrateMom #LaBellaCafe #VillaKathreyna #DineLikeRoyalty</p>
        </div>
      </div>

      <MenuPageFooter pageNumber={pageNumber} />
    </div>
  )
}
