import Image from "next/image"
import Link from "next/link"

const materials = [
  {
    title: "Restaurant Menu",
    description: "La Bella Caf\u00e8 & Resto Bar - Full food & beverage menu",
    href: "/menu",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Resort Rates",
    description: "Walk-in rates, venue packages, and amenity pricing",
    href: "/resort-rates",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Room Accommodation",
    description: "Luxurious rooms & suites with rates and amenities",
    href: "/rooms",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Rules & Regulations",
    description: "Resort policies, dress code, safety, and conduct guidelines",
    href: "/rules",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Emergency Hotlines",
    description: "Front desk, police, fire, ambulance contact numbers",
    href: "/emergency",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b]">
      {/* Header */}
      <div className="flex flex-col items-center pt-12 pb-8 px-4">
        <Image
          src="/images/logo-transparent.png"
          alt="Villa Kathreyna"
          width={180}
          height={180}
          className="drop-shadow-lg"
          priority
        />
        <div className="flex items-center gap-3 mt-4 mb-3">
          <div className="w-16 h-px bg-[#d4af37]" />
          <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          <div className="w-16 h-px bg-[#d4af37]" />
        </div>
        <h1 className="font-display text-3xl text-[#d4af37] text-center">Printable Materials</h1>
        <p className="font-sans text-sm text-[#e8d5a3] opacity-70 mt-2 text-center">
          Villa Kathreyna Event Place & Resort
        </p>
      </div>

      {/* Material cards */}
      <div className="max-w-3xl mx-auto px-6 pb-12 grid grid-cols-1 gap-4">
        {materials.map((mat) => (
          <Link
            key={mat.href}
            href={mat.href}
            className="flex items-center gap-5 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-[#d4af37]/30 hover:bg-white/15 hover:border-[#d4af37]/60 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/25 transition-colors">
              <svg className="w-7 h-7 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={mat.icon} />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-lg text-[#d4af37] group-hover:text-[#e8c547] transition-colors">{mat.title}</h2>
              <p className="font-sans text-sm text-[#e8d5a3] opacity-70">{mat.description}</p>
            </div>
            <svg className="w-5 h-5 text-[#d4af37] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pb-8">
        <p className="font-sans text-xs text-[#e8d5a3] opacity-50">
          Zone 5, Planza, San Fernando, Camarines Sur | 0977 627 1360 | 054 341 3605
        </p>
      </div>
    </main>
  )
}
