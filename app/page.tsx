import { MenuCover } from "@/components/menu/menu-cover"
import { PageAppetizersAndSoups } from "@/components/menu/page-appetizers-soups"
import { PageAlaCarte } from "@/components/menu/page-ala-carte"
import { PageBreakfastAndSavers } from "@/components/menu/page-breakfast-savers"
import { PageVeggiesSandwichesDesserts } from "@/components/menu/page-veggies-sandwiches-desserts"
import { PageBeverages } from "@/components/menu/page-beverages"
import { PrintButton } from "@/components/menu/print-button"

export default function MenuPage() {
  return (
    <main className="bg-[#e8e0d0] min-h-screen">
      {/* Print / Download buttons - hidden when printing */}
      <PrintButton />

      {/* PDF download tip */}
      <div className="no-print fixed top-16 right-4 z-50 max-w-[220px] text-right">
        <p className="text-[10px] text-[#5a7a6e] font-sans leading-snug mt-1">
          {'Tip: Select "Save as PDF" as the destination in the print dialog to download.'}
        </p>
      </div>

      {/* Menu pages with spacing for screen view */}
      <div className="flex flex-col items-center gap-8 py-8 print:gap-0 print:py-0">
        <MenuCover />
        <PageAppetizersAndSoups />
        <PageAlaCarte />
        <PageBreakfastAndSavers />
        <PageVeggiesSandwichesDesserts />
        <PageBeverages />
      </div>
    </main>
  )
}
