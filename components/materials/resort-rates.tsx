import Image from "next/image"
import { MaterialHeader } from "./material-header"
import { MaterialFooter } from "./material-footer"

export function ResortRates() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      <MaterialHeader title="Resort Rates" subtitle="Walk-In Rates &amp; Amenities" />

      {/* Banner image */}
      <div className="h-[120px] w-full overflow-hidden relative">
        <img src="/images/materials/resort-pool.jpg" alt="Villa Kathreyna Pool" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
      </div>

      {/* Content */}
      <div className="flex-1 px-8 py-4 flex flex-col gap-4">
        {/* Walk-in Rates */}
        <div>
          <h2 className="font-display text-lg text-[#0e7c6b] mb-2">Walk-In Rates</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Day rate */}
            <div className="bg-[#f8f5ef] rounded-lg p-4 border border-[#d4af37]/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <span className="text-[#d4af37] text-sm font-bold">{'D'}</span>
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#0e7c6b]">Day Rate</h3>
                  <p className="font-sans text-[9px] text-[#5a7a6e]">7:00 AM - 3:00 PM</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">Adults</span><span className="font-serif text-sm font-bold text-[#d4af37]">P120</span></div>
                <div className="flex justify-between items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">{'Kids (6-12 yrs)'}</span><span className="font-serif text-sm font-bold text-[#d4af37]">P80</span></div>
              </div>
            </div>
            {/* Night rate */}
            <div className="bg-[#0e7c6b]/5 rounded-lg p-4 border border-[#0e7c6b]/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#0e7c6b]/20 flex items-center justify-center">
                  <span className="text-[#0e7c6b] text-sm font-bold">{'N'}</span>
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#0e7c6b]">Night Rate</h3>
                  <p className="font-sans text-[9px] text-[#5a7a6e]">4:00 PM - 12:00 MN</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">Adults</span><span className="font-serif text-sm font-bold text-[#d4af37]">P150</span></div>
                <div className="flex justify-between items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">{'Kids (6-12 yrs)'}</span><span className="font-serif text-sm font-bold text-[#d4af37]">P100</span></div>
              </div>
            </div>
          </div>
          <div className="mt-2 bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/20">
            <p className="font-sans text-[10px] text-[#5a7a6e]"><strong className="text-[#0e7c6b]">Special Discounts:</strong> Free for kids 5 and below | 20% off for Students, Senior Citizens, and PWD</p>
          </div>
        </div>

        {/* Amenity add-ons */}
        <div>
          <h2 className="font-display text-lg text-[#0e7c6b] mb-2">Amenity Add-Ons</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/20 text-center">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b]">Umbrella</h4>
              <p className="font-sans text-[9px] text-[#5a7a6e]">Good for 4 pax</p>
              <p className="font-serif text-lg font-bold text-[#d4af37] mt-1">P250</p>
            </div>
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/20 text-center">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b]">Poolside Table</h4>
              <p className="font-sans text-[9px] text-[#5a7a6e]">Good for 8 pax</p>
              <p className="font-serif text-lg font-bold text-[#d4af37] mt-1">P400</p>
            </div>
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/20 text-center">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b]">Hall</h4>
              <p className="font-sans text-[9px] text-[#5a7a6e]">Min. 20 pax + videoke</p>
              <p className="font-serif text-lg font-bold text-[#d4af37] mt-1">P2,000</p>
            </div>
          </div>
        </div>

        {/* Venue Packages */}
        <div>
          <h2 className="font-display text-lg text-[#0e7c6b] mb-2">Venue Packages</h2>
          <p className="font-sans text-[9px] text-[#5a7a6e] mb-2 italic">All packages include: tables & chairs setup, water dispenser, buffet tables, videoke & speakers, parking spaces</p>
          <div className="grid grid-cols-2 gap-3">
            {/* RK Hall */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b] mb-1">RK Hall</h4>
              <div className="flex flex-col gap-0.5 text-[10px] font-sans text-[#5a7a6e]">
                <div className="flex justify-between"><span>20-50 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P5,000</span></div>
                <div className="flex justify-between"><span>20-50 pax (8hrs)</span><span className="text-[#d4af37] font-bold">P7,000</span></div>
                <div className="flex justify-between"><span>50-100 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P8,000</span></div>
                <div className="flex justify-between"><span>50-100 pax (8hrs)</span><span className="text-[#d4af37] font-bold">P10,000</span></div>
              </div>
            </div>
            {/* RK Hall + Pool */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b] mb-1">RK Hall + Pool</h4>
              <div className="flex flex-col gap-0.5 text-[10px] font-sans text-[#5a7a6e]">
                <div className="flex justify-between"><span>20-50 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P10,000</span></div>
                <div className="flex justify-between"><span>20-50 pax (8hrs)</span><span className="text-[#d4af37] font-bold">P12,000</span></div>
                <div className="flex justify-between"><span>50-100 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P13,000</span></div>
                <div className="flex justify-between"><span>50-100 pax (8hrs)</span><span className="text-[#d4af37] font-bold">P15,000</span></div>
              </div>
            </div>
            {/* KR Garden & Pool */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b] mb-1">KR Garden & Pool</h4>
              <div className="flex flex-col gap-0.5 text-[10px] font-sans text-[#5a7a6e]">
                <div className="flex justify-between"><span>20-50 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P8,000</span></div>
                <div className="flex justify-between"><span>50-100 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P11,000</span></div>
                <div className="flex justify-between"><span>100-150 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P15,000</span></div>
                <div className="flex justify-between"><span>200-250 pax (8hrs)</span><span className="text-[#d4af37] font-bold">P23,000</span></div>
              </div>
            </div>
            {/* Full Venue */}
            <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/30">
              <h4 className="font-serif text-xs font-bold text-[#0e7c6b] mb-1">RK Hall + Garden & Pool</h4>
              <div className="flex flex-col gap-0.5 text-[10px] font-sans text-[#5a7a6e]">
                <div className="flex justify-between"><span>20-50 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P12,000</span></div>
                <div className="flex justify-between"><span>50-100 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P15,000</span></div>
                <div className="flex justify-between"><span>100-150 pax (6hrs)</span><span className="text-[#d4af37] font-bold">P18,000</span></div>
                <div className="flex justify-between"><span>200-250 pax (8hrs)</span><span className="text-[#d4af37] font-bold">P26,000</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Important notes */}
        <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/20">
          <h4 className="font-serif text-[10px] font-bold text-[#0e7c6b] mb-1">Important Notes</h4>
          <ul className="font-sans text-[9px] text-[#5a7a6e] flex flex-col gap-0.5">
            <li>All amenities subject to availability; no access during exclusive events</li>
            <li>Umbrella & Poolside guests are not permitted to access the Hall</li>
            <li>Walk-in guests must select: Umbrella, Poolside, or Hall</li>
          </ul>
        </div>
      </div>

      <MaterialFooter />
    </div>
  )
}
