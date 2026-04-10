/* eslint-disable @next/next/no-img-element */
import { MenuPageHeader } from "./menu-page-header"
import { MenuPageFooter } from "./menu-page-footer"

export function PageGrandOpeningPromo() {
  return (
    <div
      className="menu-page w-[210mm] h-[210mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col"
      data-page-name="grand-opening-promo"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
      </style>
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-4 flex-1 flex flex-col gap-2 pt-1 pb-6">
        <div className="rounded-2xl border border-[#d4af37]/30 bg-white/95 p-3 shadow-sm text-center">
          <div className="text-2xl font-bold text-[#0e7c6b] mb-1">🎉 GRAND OPENING 🎉</div>
          <h2 className="text-lg font-semibold text-[#d4af37]">La Bella Café & Resto Bar</h2>
        </div>

        <div className="rounded-2xl border border-[#d4af37]/30 bg-[#f6f2ea] p-3 shadow-sm">
          <h3 className="text-base font-bold text-[#0e7c6b] mb-1 text-center">🚚 Delivery Service</h3>
          <p className="text-xs text-[#5a7a6e] text-center">
            Accepting deliveries in <strong>San Fernando area</strong>
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/15 to-[#0e7c6b]/15 p-3 shadow-lg">
          <h3 className="text-lg font-bold text-[#0e7c6b] mb-2 text-center">🥤 Buy 1 Take 1</h3>
          <p className="text-sm text-[#5a7a6e] text-center mb-2">
            On all <strong>iced drinks</strong>!
          </p>
          <div className="text-center">
            <div className="inline-block bg-[#d4af37] text-white px-4 py-1 rounded-full text-base font-bold shadow-md">
              BUY 1 TAKE 1
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <img src="/images/cafe/biscoff-basque.jpg" alt="Biscoff Basque Cheesecake" className="w-full h-24 object-cover rounded-lg" />
          <img src="/images/cafe/choco-basque.jpg" alt="Choco Basque Cheesecake" className="w-full h-24 object-cover rounded-lg" />
          <img src="/images/cafe/pistachio-brownie-basque.jpg" alt="Pistachio Brownie Basque" className="w-full h-24 object-cover rounded-lg" />
          <img src="/images/cafe/liempo.png" alt="Liempo" className="w-full h-24 object-cover rounded-lg col-span-2" />
          <img src="/images/cafe/porkchop.png" alt="Porkchop" className="w-full h-24 object-cover rounded-lg" />
        </div>

        <div className="rounded-2xl border border-[#d4af37]/30 bg-white/95 p-2 shadow-sm text-center">
          <p className="text-xs text-[#5a7a6e]">
            📞 <strong>0977 627 1360</strong> | 🌐 villakathreyna.com
          </p>
        </div>
      </div>

      <MenuPageFooter pageNumber={9} />
    </div>
  )
}
