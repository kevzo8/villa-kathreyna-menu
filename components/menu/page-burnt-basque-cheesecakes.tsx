/* eslint-disable @next/next/no-img-element */
import { MenuPageHeader } from "./menu-page-header"
import { PageBanner } from "./page-banner"
import { MenuPageFooter } from "./menu-page-footer"

const cheesecakes = [
  {
    name: "Biscoff Basque",
    roundPrice: "1,659",
    slicePrice: "169",
    image: "/images/cafe/biscoff-basque.jpg",
  },
  {
    name: "Choco Basque",
    roundPrice: "1,659",
    slicePrice: "169",
    image: "/images/cafe/choco-basque.jpg",
  },
  {
    name: "Pistachio Brownie Basque",
    roundPrice: "1,759",
    slicePrice: "179",
    image: "/images/cafe/pistachio-brownie-basque.jpg",
  },
  {
    name: "Mango Tropical Basque",
    roundPrice: "2,059",
    slicePrice: "209",
    image: "/images/cafe/mango-basque.png",
  },
]

export function PageBurntBasqueCheesecakes() {
  return (
    <div
      className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col"
      data-page-name="burnt-basque-cheesecakes"
    >
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />
      <PageBanner
        imageSrc="/images/banners/cafe-drinks.jpg"
        alt="Burnt Basque Cheesecakes"
      />

      <div className="px-7 flex-1 flex flex-col gap-3 pt-2 pb-12">
        <div className="rounded-3xl border border-[#d4af37]/30 bg-white/90 p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#0e7c6b]">La Bella Café Special</p>
              <h2 className="mt-2 text-2xl font-serif font-bold text-[#0e7c6b]">Burnt Basque Cheesecakes</h2>
            </div>
            <div className="text-right text-sm text-[#5a7a6e]">
              <p className="font-semibold">8-inch Round Cake</p>
              <p className="mt-1 font-semibold">Per Slice</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#5a7a6e]">
            Rich and caramelized, each cheesecake is finished with a velvety top and served in three indulgent flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {cheesecakes.map((item) => (
            <div key={item.name} className="rounded-3xl border border-[#d4af37]/25 bg-white overflow-hidden shadow-sm">
              <div className="h-36 overflow-hidden bg-[#f6f2ea]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[#0e7c6b]">{item.name}</h3>
                <table className="w-full mt-3 border-collapse">
                  <thead>
                    <tr className="text-sm text-[#5a7a6e]">
                      <th className="text-left font-semibold text-[#0e7c6b] pb-1">8-inch Round Cake</th>
                      <th className="text-left font-semibold text-[#0e7c6b] pb-1">Per Slice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-xl font-bold text-[#d4af37] pt-1">₱{item.roundPrice}</td>
                      <td className="text-xl font-bold text-[#d4af37] pt-1">₱{item.slicePrice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

      </div>

      <MenuPageFooter pageNumber={8} />
    </div>
  )
}
