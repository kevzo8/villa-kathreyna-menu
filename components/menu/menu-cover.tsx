import Image from "next/image"

export function MenuCover() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-[#0e7c6b] flex flex-col items-center justify-center">
      {/* Decorative corner ornaments */}
      <div className="absolute top-6 left-6 w-24 h-24 border-t-2 border-l-2 border-[#d4af37] opacity-60" />
      <div className="absolute top-6 right-6 w-24 h-24 border-t-2 border-r-2 border-[#d4af37] opacity-60" />
      <div className="absolute bottom-6 left-6 w-24 h-24 border-b-2 border-l-2 border-[#d4af37] opacity-60" />
      <div className="absolute bottom-6 right-6 w-24 h-24 border-b-2 border-r-2 border-[#d4af37] opacity-60" />

      {/* Inner decorative border */}
      <div className="absolute inset-10 border border-[#d4af37] opacity-30 rounded-sm" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #d4af37 1px, transparent 1px), radial-gradient(circle at 75% 75%, #d4af37 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-12">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/logo-transparent.png"
            alt="Villa Kathreyna Logo"
            width={300}
            height={300}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* Decorative line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-px bg-[#d4af37]" />
          <div className="w-2.5 h-2.5 rotate-45 bg-[#d4af37]" />
          <div className="w-24 h-px bg-[#d4af37]" />
        </div>

        {/* Menu title - using Cinzel Decorative */}
        <h1 className="font-display text-8xl font-bold text-[#d4af37] tracking-wider mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Menu
        </h1>

        {/* Decorative line */}
        <div className="flex items-center gap-4 mt-4 mb-8">
          <div className="w-24 h-px bg-[#d4af37]" />
          <div className="w-2.5 h-2.5 rotate-45 bg-[#d4af37]" />
          <div className="w-24 h-px bg-[#d4af37]" />
        </div>

        {/* Tagline */}
        <p className="font-serif text-[#d4af37] text-base tracking-[0.35em] uppercase opacity-90">
          Event Place & Resort
        </p>
        <p className="font-sans text-[#e8d5a3] text-xs tracking-[0.25em] uppercase mt-3 opacity-60">
          Where Your Royal Celebrations Reign
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-14 flex flex-col items-center text-[#e8d5a3] text-xs tracking-wider opacity-70">
        <p className="font-sans">Zone 5, Planza, San Fernando, Camarines Sur</p>
        <p className="font-sans mt-1">0977 627 1360 | 054 341 3605</p>
      </div>
    </div>
  )
}
