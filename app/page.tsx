import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const sections = [
    {
      id: "food-menus",
      title: "Food Menus",
      description: "Restaurant, cafe, and store menu printables.",
      previewImages: [
        "/images/food/chicken-wings.jpg",
        "/images/food/cheeseburger.jpg",
        "/images/food/halo-halo.jpg",
      ],
      highlights: ["Ala carte", "Snacks & sandwiches", "Desserts"],
      links: [
        { href: "/menu", label: "Full Restaurant Menu" },
        { href: "/menu/cafe", label: "Cafe Menu" },
        { href: "/menu/cafe/burnt-basque", label: "Burnt Basque Cheesecakes" },
        { href: "/menu/store", label: "Store & Snacks" },
      ],
    },
    {
      id: "rates-packages",
      title: "Rates & Packages",
      description: "Resort, room, and package-related printables.",
      previewImages: [
        "/images/materials/garden-pool.png",
        "/images/materials/king.png",
        "/images/materials/wedding.jpg",
      ],
      highlights: ["Room options", "Resort rates", "Event packages"],
      links: [
        { href: "/rates-packages", label: "Full Rates & Packages" },
        { href: "/resort-rates", label: "Resort Rates" },
        { href: "/rooms", label: "Room Accommodation" },
        { href: "/other-packages", label: "Other Packages (Events)" },
        { href: "/brochure", label: "Tri-Fold Brochure (2-Page)" },
      ],
    },
    {
      id: "pan-trays",
      title: "Pan Trays",
      description: "Pan trays standalone page and quick combined view.",
      previewImages: [
        "/images/food/spaghetti.jpg",
        "/images/food/pancit-guisado.jpg",
        "/images/food/bulalo.jpg",
      ],
      highlights: ["Family portions", "Group favorites", "Easy add-ons"],
      links: [
        { href: "/menu/pan-trays", label: "Pan Trays Menu" },
        { href: "/menu/catering-pan-trays", label: "Combined Catering + Pan Trays" },
      ],
    },
    {
      id: "catering-menus",
      title: "Catering Menus",
      description: "Catering package pages and combined catering views.",
      previewImages: [
        "/images/food/fried-chicken.jpg",
        "/images/food/pancit-guisado.jpg",
        "/images/food/yang-chow.jpg",
      ],
      highlights: ["Silver to Diamond", "Party-ready packages", "Pan tray options"],
      links: [
        { href: "/menu/catering", label: "Combined Catering Menu" },
        { href: "/menu/catering-silver", label: "Silver Catering Menu" },
        { href: "/menu/catering-gold", label: "Gold Catering Menu" },
        { href: "/menu/catering-platinum", label: "Platinum Catering Menu" },
        { href: "/menu/catering-diamond", label: "Diamond Catering Menu" },
      ],
    },
    {
      id: "misc-printables",
      title: "Miscellaneous Printables",
      description: "Additional operational and promo materials.",
      previewImages: [
        "/images/food/chicken-wings.jpg",
        "/images/food/nachos.jpg",
        "/images/food/mango-graham.jpg",
      ],
      highlights: ["Promo visuals", "Rules & policy", "Emergency contacts"],
      links: [
        { href: "/menu/grand-opening-promo", label: "Grand Opening Promo" },
        { href: "/menu/mothers-day-promo", label: "Mother's Day Promo Package" },
        { href: "/rules", label: "Rules & Regulations" },
        { href: "/emergency", label: "Emergency Hotlines" },
        { href: "/menu/facebook-promos", label: "Facebook Promos (Catering, Pan Trays, Mother's Day)" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_0%,#2a9b8a_0%,#0e7c6b_45%,#0a5f53_100%)] py-6">
      <div className="mx-auto max-w-6xl px-4 text-white">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
          <Image
            src="/images/materials/villa.jpg"
            alt="Villa Kathreyna hero"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e7c6b]/90 via-[#0e7c6b]/72 to-[#0e7c6b]/62" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Villa Kathreyna</p>
            <h1 className="mt-1 text-3xl font-black leading-tight text-[#f6de8b] sm:text-4xl">
              Explore What&apos;s Inside Before You Open
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
              Scan each section preview to quickly spot food categories, package types, and printable resources.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-3">
          <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
            Jump To Section
          </p>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <Link
                key={`tab-${section.id}`}
                href={`#${section.id}`}
                className="whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold text-[#f6de8b] transition hover:bg-white/20"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {sections.map((section) => (
            <section id={section.id} key={section.title} className="scroll-mt-6 rounded-2xl border border-white/25 bg-white/10 p-4 shadow-xl shadow-black/15">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-extrabold text-[#f6de8b]">{section.title}</h2>
                  <p className="mt-1 text-sm text-white/85">{section.description}</p>
                </div>
                <span className="rounded-full bg-[#f6de8b]/95 px-2.5 py-1 text-xs font-bold text-[#0e7c6b]">
                  {section.links.length} pages
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {section.previewImages.map((imgSrc, idx) => (
                  <div key={`${section.title}-${idx}`} className="relative h-24 overflow-hidden rounded-lg border border-white/25 sm:h-28">
                    <Image
                      src={imgSrc}
                      alt={`${section.title} preview ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 180px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {section.highlights.map((highlight) => (
                  <span
                    key={`${section.title}-${highlight}`}
                    className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg bg-[#f6de8b] px-3.5 py-2.5 text-sm font-bold text-[#0e7c6b] transition hover:bg-[#e9ca66]"
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
