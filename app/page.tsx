import Link from "next/link"

export default function HomePage() {
  const sections = [
    {
      title: "Food Menus",
      description: "Restaurant, cafe, and store menu printables.",
      links: [
        { href: "/menu", label: "Full Restaurant Menu" },
        { href: "/menu/cafe", label: "Cafe Menu" },
        { href: "/menu/cafe/burnt-basque", label: "Burnt Basque Cheesecakes" },
        { href: "/menu/store", label: "Store & Snacks" },
      ],
    },
    {
      title: "Catering Menus",
      description: "Catering package pages and combined catering views.",
      links: [
        { href: "/menu/catering", label: "Combined Catering Menu" },
        { href: "/menu/catering-silver", label: "Silver Catering Menu" },
        { href: "/menu/catering-gold", label: "Gold Catering Menu" },
        { href: "/menu/catering-platinum", label: "Platinum Catering Menu" },
        { href: "/menu/catering-diamond", label: "Diamond Catering Menu" },
      ],
    },
    {
      title: "Pan Trays",
      description: "Pan trays standalone page and quick combined view.",
      links: [
        { href: "/menu/pan-trays", label: "Pan Trays Menu" },
        { href: "/menu/catering-pan-trays", label: "Combined Catering + Pan Trays" },
      ],
    },
    {
      title: "Rates & Packages",
      description: "Resort, room, and package-related printables.",
      links: [
        { href: "/resort-rates", label: "Resort Rates" },
        { href: "/rooms", label: "Room Accommodation" },
        { href: "/other-packages", label: "Other Packages (Events)" },
      ],
    },
    {
      title: "Miscellaneous Printables",
      description: "Additional operational and promo materials.",
      links: [
        { href: "/menu/grand-opening-promo", label: "Grand Opening Promo" },
        { href: "/rules", label: "Rules & Regulations" },
        { href: "/emergency", label: "Emergency Hotlines" },
        { href: "/menu/facebook-promos", label: "Facebook Promos (Catering & Pan Trays)" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[#0e7c6b] py-5">
      <div className="mx-auto max-w-6xl px-4 text-white">
        <h1 className="text-2xl font-bold mb-2">Villa Kathreyna Resources</h1>
        <p className="mb-4 text-sm text-white/90">
          Choose any of the printable materials below to view or print.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-white/20 bg-white/5 p-3.5">
              <h2 className="text-lg font-bold text-[#d4af37]">{section.title}</h2>
              <p className="mt-0.5 text-xs text-white/80">{section.description}</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md bg-[#d4af37] px-3.5 py-2.5 text-sm font-bold text-[#0e7c6b] hover:bg-[#c9a030] transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
