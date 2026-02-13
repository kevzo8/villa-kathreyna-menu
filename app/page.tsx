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
      {/* Print button - hidden when printing */}
      <PrintButton />

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
