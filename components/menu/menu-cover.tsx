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
            width={420}
            height={220}
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
        <p className="font-serif text-[#d4af37] text-lg tracking-[0.35em] uppercase opacity-90">
          La Bella Caf&egrave; & Resto Bar
        </p>
        <p className="font-sans text-[#e8d5a3] text-sm tracking-[0.25em] uppercase mt-3 opacity-60">
          Villa Kathreyna Event Place & Resort
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-14 flex flex-col items-center text-[#e8d5a3] text-sm tracking-wider opacity-70">
        <p className="font-sans flex items-center gap-1">📍 Zone 5, Planza, San Fernando, Camarines Sur</p>
        <p className="font-sans mt-1 flex items-center gap-1">📞 0977 627 1360 | 054 341 3605</p>
        <p className="font-sans mt-1 flex items-center gap-1">🌐 villakathreyna.com | <svg className="w-3 h-3 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Villa Kathreyna</p>
      </div>
    </div>
  )
}
