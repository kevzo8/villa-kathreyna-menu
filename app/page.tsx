import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <div className="mx-auto px-4 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Villa Kathreyna Resources</h1>
        <p className="mb-6">
          Choose any of the printable materials below to view or print.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { href: '/menu', label: 'Full Restaurant Menu' },
            { href: '/menu/cafe', label: 'Cafe Menu' },
            { href: '/menu/facebook-promos', label: 'Facebook Promos (Catering & Pan Trays)' },
            { href: '/menu/catering', label: 'Combined Catering Menu' },
            { href: '/menu/catering-diamond', label: 'Diamond Catering Menu' },
            { href: '/menu/catering-platinum', label: 'Platinum Catering Menu' },
            { href: '/menu/catering-gold', label: 'Gold Catering Menu' },
            { href: '/menu/catering-silver', label: 'Silver Catering Menu' },
            { href: '/menu/pan-trays', label: 'Pan Trays Menu' },
            { href: '/menu/store', label: 'Store & Snacks' },
            { href: '/emergency', label: 'Emergency Hotlines' },
            { href: '/resort-rates', label: 'Resort Rates' },
            { href: '/rooms', label: 'Room Accommodation' },
            { href: '/rules', label: 'Rules & Regulations' },
            { href: '/other-packages', label: 'Other Packages (Events)' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-[#d4af37] text-[#0e7c6b] px-6 py-5 rounded-lg font-bold hover:bg-[#c9a030] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
