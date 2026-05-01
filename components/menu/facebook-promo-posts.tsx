import Image from "next/image"

const cateringPackages = [
  { name: "Silver", price: 400 },
  { name: "Gold", price: 500 },
  { name: "Platinum", price: 600 },
  { name: "Diamond", price: 800 },
]

const panTrayStarts = [
  { name: "Beef Menu", price: 1299 },
  { name: "Pork Menu", price: 999 },
  { name: "Chicken Menu", price: 899 },
  { name: "Fish Menu", price: 999 },
]

const mothersDayBundles = [
  { name: "The Duchess\u2019 Delight", pax: "5\u20136 pax", price: "4,999", tagline: "An elegant feast for intimate family moments" },
  { name: "The Countess\u2019 Table", pax: "6\u20137 pax", price: "5,999", tagline: "A generous feast for joyful gatherings" },
  { name: "The Empress\u2019 Banquet", pax: "7\u20138 pax", price: "6,999", tagline: "A grand feast for a truly special celebration" },
  { name: "The Queen Mother\u2019s Feast", pax: "8\u20139 pax", price: "7,999", tagline: "The ultimate royal feast for the most important woman in your life" },
]

function PromoHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="px-12 pt-10 pb-6">
      <div className="flex items-center justify-center gap-6">
        <div className="h-px flex-1 bg-[#d4af37] opacity-40" />
        <Image
          src="/images/emblem-transparent-invert.png"
          alt="Villa Kathreyna"
          width={170}
          height={60}
          className="h-auto opacity-95"
        />
        <div className="h-px flex-1 bg-[#d4af37] opacity-40" />
      </div>
      <h1 className="mt-6 text-center font-display text-[64px] leading-none font-bold text-[#0e7c6b]">
        {title}
      </h1>
      <p className="mt-3 text-center font-sans text-[26px] tracking-[0.16em] uppercase text-[#5a7a6e]">
        {subtitle}
      </p>
    </div>
  )
}

function PromoFooter() {
  return (
    <div className="mt-auto px-12 pb-10 pt-6">
      <div className="rounded-sm border border-[#d4af37]/45 bg-[#fffdf8] px-8 py-5 text-center">
        <p className="font-sans text-[26px] font-semibold tracking-[0.08em] uppercase text-[#0e7c6b]">
          Book now at Villa Kathreyna
        </p>
        <p className="mt-1 font-sans text-[20px] text-[#5a7a6e]">
          Perfect for birthdays, reunions, and special celebrations.
        </p>
      </div>
    </div>
  )
}

export function FacebookPromoCateringPost() {
  return (
    <div
      id="fb-promo-catering"
      data-post-name="facebook-catering"
      className="social-post relative h-[1080px] w-[1080px] overflow-hidden bg-[#faf8f3]"
    >
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-[#d4af37]/35" />
      <div className="absolute right-6 top-6 h-16 w-16 border-r-2 border-t-2 border-[#d4af37]/35" />
      <div className="absolute bottom-6 left-6 h-16 w-16 border-b-2 border-l-2 border-[#d4af37]/35" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-[#d4af37]/35" />

      <PromoHeader title="Catering" subtitle="Packages for every budget" />

      <div className="px-12">
        <div className="relative h-[280px] overflow-hidden rounded-sm border border-[#d4af37]/40">
          <Image src="/images/banners/catering.jpg" alt="Catering dishes" fill className="object-cover" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5">
          {cateringPackages.map((item) => (
            <div key={item.name} className="rounded-sm border border-[#d4af37]/35 bg-[#fffef9] px-6 py-5">
              <p className="font-serif text-[40px] font-bold leading-none text-[#0e7c6b]">{item.name}</p>
              <p className="mt-2 font-sans text-[21px] uppercase tracking-[0.1em] text-[#5a7a6e]">Per head</p>
              <p className="mt-1 font-serif text-[48px] font-bold leading-none text-[#d4af37]">₱{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <PromoFooter />
    </div>
  )
}

export function FacebookPromoPanTraysPost() {
  return (
    <div
      id="fb-promo-pan-trays"
      data-post-name="facebook-pan-trays"
      className="social-post relative h-[1080px] w-[1080px] overflow-hidden bg-[#faf8f3]"
    >
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-[#d4af37]/35" />
      <div className="absolute right-6 top-6 h-16 w-16 border-r-2 border-t-2 border-[#d4af37]/35" />
      <div className="absolute bottom-6 left-6 h-16 w-16 border-b-2 border-l-2 border-[#d4af37]/35" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-[#d4af37]/35" />

      <PromoHeader title="Pan Trays" subtitle="Good for sharing" />

      <div className="px-12">
        <div className="grid h-[280px] grid-cols-3 gap-3 overflow-hidden rounded-sm border border-[#d4af37]/40">
          <div className="relative">
            <Image src="/images/banners/pan-tray-beef.png" alt="Beef pan tray" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/images/banners/pan-tray-pork.jpg" alt="Pork pan tray" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/images/banners/pan-tray-seafood.jpg" alt="Seafood pan tray" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-8 rounded-sm border border-[#d4af37]/35 bg-[#fffef9] p-6">
          <p className="text-center font-sans text-[22px] uppercase tracking-[0.12em] text-[#5a7a6e]">Starts at</p>
          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
            {panTrayStarts.map((item) => (
              <div key={item.name} className="flex items-end justify-between border-b border-[#d4af37]/30 pb-1">
                <span className="font-sans text-[25px] text-[#2f4f45]">{item.name}</span>
                <span className="font-serif text-[36px] font-bold leading-none text-[#d4af37]">₱{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-sm border border-[#d4af37]/30 bg-[#fffdf8] px-5 py-4 text-center">
            <p className="font-sans text-[22px] tracking-[0.08em] uppercase text-[#0e7c6b]">Bilao Menu Available</p>
            <p className="mt-1 font-sans text-[20px] text-[#5a7a6e]">Small ₱499 | Medium ₱699 | Large ₱899</p>
          </div>
        </div>
      </div>

      <PromoFooter />
    </div>
  )
}

export function FacebookPromoMothersDayPost() {
  return (
    <div
      id="fb-promo-mothers-day"
      data-post-name="facebook-mothers-day"
      className="social-post relative h-[1080px] w-[1080px] overflow-hidden bg-[#fff8f1]"
    >
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-[#d4af37]/35" />
      <div className="absolute right-6 top-6 h-16 w-16 border-r-2 border-t-2 border-[#d4af37]/35" />
      <div className="absolute bottom-6 left-6 h-16 w-16 border-b-2 border-l-2 border-[#d4af37]/35" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-[#d4af37]/35" />

      <PromoHeader title="Mother's Day" subtitle="A Royal Feast for the Heart of the Family" />

      <div className="px-12">
        <div className="rounded-sm border border-[#d4af37]/35 bg-[#fffef9] px-6 py-3 text-center">
          <p className="font-sans text-[17px] italic text-[#5a7a6e]">Give the queen of your home the celebration she truly deserves &mdash; a table full of love, laughter, and a feast fit for royalty 💖</p>
          <p className="mt-2 font-sans text-[20px] font-semibold text-[#0e7c6b]">La Bella Cafè &amp; Resto Bar &nbsp;&bull;&nbsp; Villa Kathreyna Event Place &amp; Resort</p>
          <p className="font-sans text-[16px] italic text-[#d4af37]">May 10, 2026 &nbsp;&bull;&nbsp; Lunch &amp; Dinner Slots Available</p>
        </div>

        <div className="mt-4 rounded-sm border border-[#d4af37]/35 bg-white p-2 overflow-hidden">
          <div className="grid grid-cols-5 gap-2" style={{height:'130px'}}>
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
          <div className="grid grid-cols-5 gap-2 mt-2" style={{height:'100px'}}>
            <div className="relative">
              <Image src="/images/cafe/choco-basque.jpg" alt="Choco Basque" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/biscoff-basque.jpg" alt="Biscoff Basque" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/banners/ala-carte-nilaga.jpg" alt="Soup" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/nachos.jpg" alt="Nachos" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/images/cafe/strawberry-smoothie.jpg" alt="Smoothie" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {mothersDayBundles.map((bundle) => (
            <div key={bundle.name} className="rounded-sm border border-[#d4af37]/35 bg-[#fffdf8] px-5 py-4">
              <p className="font-serif text-[28px] font-bold leading-tight text-[#0e7c6b]">{bundle.name}</p>
              <p className="mt-1 font-sans text-[15px] italic text-[#5a7a6e] leading-snug">{bundle.tagline}</p>
              <p className="mt-1 font-sans text-[16px] text-[#5a7a6e]">{bundle.pax}</p>
              <p className="mt-2 font-serif text-[40px] font-bold leading-none text-[#d4af37]">₱{bundle.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-sm border border-[#d4af37]/35 bg-white px-6 py-4 text-center">
          <p className="font-sans text-[19px] font-semibold text-[#0e7c6b]">⏰ Slots are limited &mdash; first come, first served!</p>
          <p className="mt-1 font-sans text-[16px] text-[#5a7a6e]">📩 Message us your preferred package &amp; dining time (lunch or dinner slots available)</p>
          <p className="mt-1 font-sans text-[15px] text-[#5a7a6e]">📍 Zone 5, Planza, San Fernando, Camarines Sur</p>
          <p className="mt-2 font-sans text-[13px] text-[#5a7a6e]/80 tracking-wide">#MothersDay2026 &nbsp;#RoyalFeast &nbsp;#CelebrateMom &nbsp;#LaBellaCafe &nbsp;#VillaKathreyna &nbsp;#DineLikeRoyalty</p>
        </div>
      </div>

      <PromoFooter />
    </div>
  )
}