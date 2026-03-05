import Image from "next/image"
import { MaterialHeader } from "./material-header"
import { MaterialFooter } from "./material-footer"

export function ResortRates() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      <MaterialHeader title="Resort Rates" subtitle="Walk-In Rates &amp; Amenities" titleClassName="font-bold" logoSize={86} />

      {/* Banner image */}
      <div className="h-[142px] w-full overflow-hidden relative">
        <img src="/images/materials/villa.jpg" alt="Villa Kathreyna" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
      </div>

      {/* Content */}
      <div className="flex-1 px-8 py-4 flex flex-col gap-4">
        {/* KR Garden & Pool preview */}
        <div className="rounded-lg overflow-hidden border border-[#d4af37]/25 bg-[#f8f5ef]">
          <div className="h-[136px] w-full relative">
            <Image src="/images/materials/garden-pool.png" alt="KR Garden and Pool Space" fill className="object-cover" />
          </div>
          <p className="font-serif text-[11px] font-bold text-[#0e7c6b] px-2.5 py-1.5">KR Garden & Pool Preview</p>
        </div>

        {/* Walk-in Rates + Amenity Add-Ons */}
        <div>
          <h2 className="font-display text-lg font-bold text-[#0e7c6b] mb-2">Walk-In Rates</h2>
          <p className="font-sans text-[10px] text-[#5a7a6e] mb-2 italic"><strong className="text-[#0e7c6b]">Special Discounts:</strong> Free for kids 5 and below | 20% off for Students, Senior Citizens, and PWD</p>
          <div className="grid grid-cols-[1.35fr_1fr] gap-3 items-start">
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
                  <div className="mb-1.5">
                    <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b]">Day Rate</h3>
                    <p className="font-sans text-[10px] text-[#5a7a6e]">7:00 AM - 3:00 PM</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">Adults</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">P120</span></div>
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">{'Kids (6-12 yrs)'}</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">P80</span></div>
                  </div>
                </div>
                <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/20">
                  <div className="mb-1.5">
                    <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b]">Night Rate</h3>
                    <p className="font-sans text-[10px] text-[#5a7a6e]">4:00 PM - 12:00 MN</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">Adults</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">P150</span></div>
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">{'Kids (6-12 yrs)'}</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">P100</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f5ef] rounded-lg p-2.5 border border-[#d4af37]/20">
              <div className="flex flex-col gap-1.25">
                <div className="flex items-end gap-2">
                  <div>
                    <p className="font-serif text-[11.5px] font-bold text-[#0e7c6b]">Umbrella</p>
                    <p className="font-sans text-[9px] text-[#5a7a6e]">Good for 4 pax</p>
                  </div>
                  <div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-1" />
                  <p className="font-serif text-[16px] font-bold text-[#d4af37]">P250</p>
                </div>
                <div className="flex items-end gap-2">
                  <div>
                    <p className="font-serif text-[11.5px] font-bold text-[#0e7c6b]">Poolside Table</p>
                    <p className="font-sans text-[9px] text-[#5a7a6e]">Good for 8 pax</p>
                  </div>
                  <div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-1" />
                  <p className="font-serif text-[16px] font-bold text-[#d4af37]">P400</p>
                </div>
                <div className="flex items-end gap-2">
                  <div>
                    <p className="font-serif text-[11.5px] font-bold text-[#0e7c6b]">Hall</p>
                    <p className="font-sans text-[9px] text-[#5a7a6e]">Min. 20 pax + videoke</p>
                  </div>
                  <div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-1" />
                  <p className="font-serif text-[16px] font-bold text-[#d4af37]">P2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RK Hall preview */}
        <div className="rounded-lg overflow-hidden border border-[#d4af37]/25 bg-[#f8f5ef]">
          <div className="h-[136px] w-full relative">
            <Image src="/images/materials/hall.png" alt="RK Hall Space" fill className="object-cover" />
          </div>
          <p className="font-serif text-[11px] font-bold text-[#0e7c6b] px-2.5 py-1.5">RK Hall Preview</p>
        </div>

        {/* Venue Packages */}
        <div>
          <h2 className="font-display text-lg font-bold text-[#0e7c6b] mb-2">Venue Packages</h2>
          <p className="font-sans text-[10px] text-[#5a7a6e] mb-2 italic">All packages include: tables & chairs setup, water dispenser, buffet tables, videoke & speakers, parking spaces</p>
          <div className="grid grid-cols-2 gap-3.5">
            {/* RK Hall */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1">RK Hall</h4>
              <div className="flex flex-col gap-1 text-[10.5px] font-sans text-[#5a7a6e]">
                <div className="flex items-center gap-1"><span>20-50 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P5,000</span></div>
                <div className="flex items-center gap-1"><span>20-50 pax (8hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P7,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P8,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax (8hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P10,000</span></div>
              </div>
            </div>
            {/* RK Hall + Pool */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1">RK Hall + Pool</h4>
              <div className="flex flex-col gap-1 text-[10.5px] font-sans text-[#5a7a6e]">
                <div className="flex items-center gap-1"><span>20-50 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P10,000</span></div>
                <div className="flex items-center gap-1"><span>20-50 pax (8hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P12,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P13,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax (8hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P15,000</span></div>
              </div>
            </div>
            {/* KR Garden & Pool */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1">KR Garden & Pool</h4>
              <div className="flex flex-col gap-1 text-[10.5px] font-sans text-[#5a7a6e]">
                <div className="flex items-center gap-1"><span>20-50 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P8,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P11,000</span></div>
                <div className="flex items-center gap-1"><span>100-150 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P15,000</span></div>
                <div className="flex items-center gap-1"><span>200-250 pax (8hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P23,000</span></div>
              </div>
            </div>
            {/* Full Venue */}
            <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1">RK Hall + Garden & Pool</h4>
              <div className="flex flex-col gap-1 text-[10.5px] font-sans text-[#5a7a6e]">
                <div className="flex items-center gap-1"><span>20-50 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P12,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P15,000</span></div>
                <div className="flex items-center gap-1"><span>100-150 pax (6hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P18,000</span></div>
                <div className="flex items-center gap-1"><span>200-250 pax (8hrs)</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">P26,000</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Important notes */}
        <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/20">
          <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1">Important Notes</h4>
          <ul className="font-sans text-[9.5px] text-[#5a7a6e] flex flex-col gap-0.5">
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
