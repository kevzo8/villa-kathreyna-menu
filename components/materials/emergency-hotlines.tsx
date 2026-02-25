import Image from "next/image"
import { MaterialFooter } from "./material-footer"

const hotlines = [
  {
    icon: "reception",
    label: "Front Desk",
    numbers: ["0977 627 1360", "054 341 3605"],
  },
  {
    icon: "police",
    label: "Police Station",
    numbers: ["166 / 117"],
  },
  {
    icon: "fire",
    label: "Fire Station",
    numbers: ["160"],
  },
  {
    icon: "ambulance",
    label: "Ambulance / Emergency",
    numbers: ["911"],
  },
  {
    icon: "hospital",
    label: "Local Hospital",
    numbers: ["Contact Front Desk"],
  },
]

function HotlineIcon({ type }: { type: string }) {
  const iconMap: Record<string, string> = {
    reception: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    police: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    fire: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    ambulance: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    hospital: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  }
  return (
    <svg className="w-8 h-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[type] || iconMap.reception} />
    </svg>
  )
}

export function EmergencyHotlines() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#0e7c6b] px-8 py-6 text-center relative">
        <p className="font-sans text-[10px] text-[#e8d5a3] tracking-[0.2em] uppercase opacity-70 mb-1">
          Villa Kathreyna Event Place & Resort
        </p>
        <h1 className="font-display text-3xl text-[#d4af37]">Emergency Hotlines</h1>
      </div>

      {/* Logo */}
      <div className="flex justify-center -mt-7 relative z-10">
        <div className="w-16 h-16 rounded-full bg-white border-2 border-[#d4af37]/50 flex items-center justify-center shadow-md overflow-hidden">
          <Image src="/images/logo-transparent.png" alt="Villa Kathreyna" width={52} height={52} />
        </div>
      </div>

      {/* Hotline cards */}
      <div className="flex-1 px-10 py-6 flex flex-col gap-5">
        {hotlines.map((hotline) => (
          <div key={hotline.label} className="flex items-center gap-5 bg-[#f8f5ef] rounded-xl p-5 border border-[#d4af37]/25 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#0e7c6b]/10 flex items-center justify-center flex-shrink-0">
              <HotlineIcon type={hotline.icon} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0e7c6b] uppercase tracking-wider">{hotline.label}</h3>
              {hotline.numbers.map((num) => (
                <p key={num} className="font-sans text-xl font-bold text-[#0e7c6b] tracking-wide">{num}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Location */}
        <div className="mt-auto bg-[#0e7c6b]/5 rounded-xl p-4 border border-[#0e7c6b]/20 text-center">
          <h4 className="font-serif text-xs font-bold text-[#0e7c6b] uppercase tracking-wider mb-1">Location Address</h4>
          <p className="font-sans text-sm text-[#3a3a3a]">
            Villa Kathreyna Event Place & Resort
          </p>
          <p className="font-sans text-sm text-[#5a7a6e]">
            Zone 5, Planza, San Fernando, Camarines Sur
          </p>
        </div>
      </div>

      <MaterialFooter />
    </div>
  )
}
