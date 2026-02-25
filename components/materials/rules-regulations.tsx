import Image from "next/image"
import { MaterialFooter } from "./material-footer"

const rules = [
  {
    title: "Entrance Policy",
    items: [
      "Entrance is permitted only upon payment of entrance fee or confirmation of reservation.",
      "No refund once payment is made.",
      "Guests must register at the front desk and wear wristbands or identification tags at all times.",
    ],
  },
  {
    title: "Prohibited Items",
    items: [
      "Alcoholic beverages not purchased from the resort are not allowed.",
      "Illegal drugs, deadly weapons, and flammable items are strictly prohibited.",
      "Outside speakers or sound systems beyond a certain volume limit are not allowed without prior approval.",
    ],
  },
  {
    title: "Dress Code",
    items: [
      "Proper swimwear is required in pool areas.",
      "Guests must be appropriately dressed in common areas (no wet swimwear in indoor reception or function hall).",
    ],
  },
  {
    title: "Children & Minors",
    items: [
      "Children must be supervised by adults at all times.",
      "Resort staff are not liable for unattended minors.",
    ],
  },
  {
    title: "Food & Beverages",
    items: [
      "Bringing in outside food may be restricted or subject to corkage fees.",
      "Please inquire at the front desk for current corkage policies.",
    ],
  },
  {
    title: "Pets",
    items: [
      "Pets are allowed. Please consult the front desk for pet policy.",
    ],
  },
  {
    title: "Conduct",
    items: [
      "Guests must behave respectfully toward other guests and resort staff.",
      "Loud, rude, or disruptive behavior may result in eviction without refund.",
      "Vandalism or damage to resort property will be charged accordingly.",
    ],
  },
  {
    title: "Safety & Liability",
    items: [
      "Swimming is at your own risk. Lifeguards may not always be present.",
      "Resort is not liable for lost, damaged, or stolen belongings.",
      "Please follow posted pool and facility safety rules.",
    ],
  },
  {
    title: "Operating Hours",
    items: [
      "Resort facilities are open 24/7.",
      "Guests may stay overnight. Resort staff and kitchen services follow scheduled hours.",
      "Swimming is allowed during designated pool hours only.",
      "Guests entering or staying beyond operating hours must coordinate with the management.",
    ],
  },
  {
    title: "Environmental Care",
    items: [
      "Help us keep the resort clean. Use designated trash bins.",
      "No picking of flowers, plants, or tampering with wildlife.",
    ],
  },
]

export function RulesRegulations() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      {/* Header banner */}
      <div className="bg-[#0e7c6b] px-8 py-5 text-center relative">
        <h1 className="font-display text-3xl text-[#d4af37]">Rules & Regulations</h1>
        <p className="font-sans text-[11px] text-[#e8d5a3] opacity-80 mt-1">
          Kindly observe the rules before entry.
        </p>
      </div>

      {/* Logo */}
      <div className="flex justify-center -mt-6 relative z-10">
        <div className="w-14 h-14 rounded-full bg-white border-2 border-[#d4af37]/50 flex items-center justify-center shadow-md overflow-hidden">
          <Image src="/images/logo-transparent.png" alt="Villa Kathreyna" width={48} height={48} />
        </div>
      </div>

      {/* Rules content */}
      <div className="flex-1 px-8 py-3 flex flex-col gap-2">
        {rules.map((rule) => (
          <div key={rule.title}>
            <h3 className="font-serif text-[11px] font-bold text-[#0e7c6b] uppercase tracking-wider bg-[#d4af37]/15 inline-block px-2 py-0.5 rounded-sm mb-0.5">
              {rule.title}
            </h3>
            <ul className="flex flex-col gap-0">
              {rule.items.map((item, i) => (
                <li key={i} className="font-sans text-[10px] text-[#3a3a3a] leading-snug flex gap-1.5 items-start">
                  <span className="text-[#d4af37] mt-0.5 flex-shrink-0">{'•'}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Compliance notice */}
        <div className="mt-auto flex items-center justify-center gap-3 py-3">
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
          <p className="font-serif text-sm text-[#0e7c6b] font-bold text-center">
            For Strict Compliance. Thank You.
          </p>
          <div className="w-16 h-px bg-[#d4af37] opacity-40" />
        </div>
        <p className="font-sans text-[10px] text-[#5a7a6e] text-center italic">- Management</p>
      </div>

      <MaterialFooter />
    </div>
  )
}
