import Image from "next/image"
import { BadgePercent, Building2, CheckCircle2, House, Moon, Package, Sun, Trees, Umbrella, Waves } from "lucide-react"
import { MaterialHeader } from "./material-header"
import { MaterialFooter } from "./material-footer"

export function ResortRates() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      <MaterialHeader title="Resort Rates" subtitle="Swim, unwind, and celebrate with flexible rates &amp; amenities" titleClassName="font-bold" logoSize={86} />

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
          <p className="font-serif text-[11px] font-bold text-[#0e7c6b] px-2.5 py-1.5 inline-flex items-center gap-1.5">
            <Trees className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" />
            KR Garden & Pool Preview
          </p>
        </div>

        {/* Walk-in Rates + Amenity Add-Ons */}
        <div>
          <h2 className="font-display text-lg font-bold text-[#0e7c6b] mb-3 inline-flex items-center gap-1.5">
            <Waves className="h-4 w-4 text-[#d4af37]" aria-hidden="true" />
            Walk-In Rates
          </h2>
          <div className="grid grid-cols-[1.6fr_1fr] gap-3 items-start">
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
                  <div className="mb-1.5">
                    <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b] flex items-center gap-1">
                      <Sun className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" />
                      Day Rate <span className="font-sans font-normal text-[9px] text-[#5a7a6e]">(7:00 AM - 3:00 PM)</span>
                    </h3>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">Adults</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">₱120</span></div>
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">{'Kids (6-12 yrs)'}</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">₱80</span></div>
                  </div>
                </div>
                <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/20">
                  <div className="mb-1.5">
                    <h3 className="font-serif text-[13px] font-bold text-[#0e7c6b] flex items-center gap-1">
                      <Moon className="h-3.5 w-3.5 text-[#0e7c6b]" aria-hidden="true" />
                      Night Rate <span className="font-sans font-normal text-[9px] text-[#5a7a6e]">(4:00 PM - 12:00 MN)</span>
                    </h3>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">Adults</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">₱150</span></div>
                    <div className="flex items-center"><span className="font-sans text-[11px] text-[#0e7c6b]">{'Kids (6-12 yrs)'}</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mx-1 mb-0.5" /><span className="font-serif text-[15px] font-bold text-[#d4af37]">₱100</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f5ef] rounded-lg p-2.5 border border-[#d4af37]/20">
              <div className="flex flex-col gap-1.25">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-serif text-[11.5px] font-bold text-[#0e7c6b] inline-flex items-center gap-1">
                      <Umbrella className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" />
                      Umbrella <span className="font-sans font-normal text-[9px] text-[#5a7a6e]">(Good for 4 pax)</span>
                    </p>
                  </div>
                  <div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" />
                  <p className="font-serif text-[16px] font-bold text-[#d4af37]">₱250</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-serif text-[11.5px] font-bold text-[#0e7c6b] inline-flex items-center gap-1">
                      <Waves className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" />
                      Poolside Table <span className="font-sans font-normal text-[9px] text-[#5a7a6e]">(Good for 8 pax)</span>
                    </p>
                  </div>
                  <div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" />
                  <p className="font-serif text-[16px] font-bold text-[#d4af37]">₱400</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-serif text-[11.5px] font-bold text-[#0e7c6b] inline-flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" />
                      Hall <span className="font-sans font-normal text-[9px] text-[#5a7a6e]">(Min. 20 pax + videoke)</span>
                    </p>
                  </div>
                  <div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" />
                  <p className="font-serif text-[16px] font-bold text-[#d4af37]">₱2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/20">
          <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1">
            Important Notes
          </h4>
          <ul className="font-sans text-[9.5px] text-[#5a7a6e] grid grid-cols-2 gap-x-3 gap-y-0.5">
            <li className="inline-flex items-start gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#0e7c6b] mt-[1px] shrink-0" aria-hidden="true" /><span>Free for kids 5 y/o and below | 20% off for Students, Senior Citizens, and PWD</span></li>
            <li className="inline-flex items-start gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#0e7c6b] mt-[1px] shrink-0" aria-hidden="true" /><span>All amenities subject to availability; no access during exclusive events</span></li>
            <li className="inline-flex items-start gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#0e7c6b] mt-[1px] shrink-0" aria-hidden="true" /><span>Umbrella & Poolside guests kindly use the outdoor area exclusively</span></li>
            <li className="inline-flex items-start gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#0e7c6b] mt-[1px] shrink-0" aria-hidden="true" /><span>Walk-in guests must select: Umbrella, Poolside, or Hall</span></li>
          </ul>
        </div>

        {/* RK Hall preview */}
        <div className="rounded-lg overflow-hidden border border-[#d4af37]/25 bg-[#f8f5ef]">
          <div className="h-[136px] w-full relative">
            <Image src="/images/materials/hall.png" alt="RK Hall Space" fill className="object-cover" />
          </div>
          <p className="font-serif text-[11px] font-bold text-[#0e7c6b] px-2.5 py-1.5 inline-flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-[#d4af37]" aria-hidden="true" />
            RK Hall Preview
          </p>
        </div>

        {/* Venue Packages */}
        <div>
          <h2 className="font-display text-lg font-bold text-[#0e7c6b] mb-2 inline-flex items-center gap-1.5">
            <Package className="h-4 w-4 text-[#d4af37]" aria-hidden="true" />
            Venue Packages
          </h2>
          <p className="font-sans text-[10.5px] text-[#5a7a6e] mb-2 italic">All packages include: tables & chairs setup, water dispenser, buffet tables, videoke & speakers, parking spaces</p>
          <div className="grid grid-cols-2 gap-3.5">
            {/* RK Hall */}
            <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1 inline-flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5 text-[#0e7c6b]" aria-hidden="true" />
                RK Hall
              </h4>
              <div className="flex flex-col gap-1 text-[10.5px] font-sans text-[#5a7a6e]">
                <div className="flex items-center gap-1"><span>20-50 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱5,000</span></div>
                <div className="flex items-center gap-1"><span>20-50 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱7,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱8,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱10,000</span></div>
              </div>
            </div>
            {/* RK Hall + Pool */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1 inline-flex items-center gap-1">
                <Waves className="h-3.5 w-3.5 text-[#0e7c6b]" aria-hidden="true" />
                RK Hall + Pool
              </h4>
              <div className="flex flex-col gap-1 text-[10.5px] font-sans text-[#5a7a6e]">
                <div className="flex items-center gap-1"><span>20-50 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱10,000</span></div>
                <div className="flex items-center gap-1"><span>20-50 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱12,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱13,000</span></div>
                <div className="flex items-center gap-1"><span>50-100 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱15,000</span></div>
              </div>
            </div>
            {/* KR Garden & Pool */}
            <div className="bg-[#f8f5ef] rounded-lg p-3 border border-[#d4af37]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1 inline-flex items-center gap-1">
                <Trees className="h-3.5 w-3.5 text-[#0e7c6b]" aria-hidden="true" />
                KR Garden & Pool
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[10.5px] font-sans text-[#5a7a6e] leading-[1.35]">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1"><span>20-50 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱8,000</span></div>
                  <div className="flex items-center gap-1"><span>20-50 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱10,000</span></div>
                  <div className="flex items-center gap-1"><span>50-100 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱11,000</span></div>
                  <div className="flex items-center gap-1"><span>50-100 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱13,000</span></div>
                  <div className="flex items-center gap-1"><span>100-150 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱15,000</span></div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1"><span>100-150 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱17,000</span></div>
                  <div className="flex items-center gap-1"><span>150-200 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱18,000</span></div>
                  <div className="flex items-center gap-1"><span>150-200 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱20,000</span></div>
                  <div className="flex items-center gap-1"><span>200-250 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱21,000</span></div>
                  <div className="flex items-center gap-1"><span>200-250 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱23,000</span></div>
                </div>
              </div>
            </div>
            {/* Full Venue */}
            <div className="bg-[#0e7c6b]/5 rounded-lg p-3 border border-[#0e7c6b]/30">
              <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b] mb-1 inline-flex items-center gap-1">
                <House className="h-3.5 w-3.5 text-[#0e7c6b]" aria-hidden="true" />
                RK Hall + KR Garden & Pool
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[10.5px] font-sans text-[#5a7a6e] leading-[1.35]">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1"><span>20-50 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱12,000</span></div>
                  <div className="flex items-center gap-1"><span>20-50 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱14,000</span></div>
                  <div className="flex items-center gap-1"><span>50-100 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱15,000</span></div>
                  <div className="flex items-center gap-1"><span>50-100 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱17,000</span></div>
                  <div className="flex items-center gap-1"><span>100-150 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱18,000</span></div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1"><span>100-150 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱20,000</span></div>
                  <div className="flex items-center gap-1"><span>150-200 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱21,000</span></div>
                  <div className="flex items-center gap-1"><span>150-200 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱23,000</span></div>
                  <div className="flex items-center gap-1"><span>200-250 pax • 6hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱24,000</span></div>
                  <div className="flex items-center gap-1"><span>200-250 pax • 8hrs</span><div className="flex-1 border-b border-dotted border-[#d4af37]/40 mb-0.5" /><span className="text-[#d4af37] font-bold">₱26,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MaterialFooter />
    </div>
  )
}

