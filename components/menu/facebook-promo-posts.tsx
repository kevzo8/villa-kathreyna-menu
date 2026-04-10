import Image from "next/image"

const cateringPackages = [
  { name: "Silver", price: 400 },
  { name: "Gold", price: 500 },
  { name: "Platinum", price: 600 },
  { name: "Diamond", price: 700 },
]

const panTrayStarts = [
  { name: "Beef Menu", price: 1299 },
  { name: "Pork Menu", price: 999 },
  { name: "Chicken Menu", price: 899 },
  { name: "Fish Menu", price: 999 },
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