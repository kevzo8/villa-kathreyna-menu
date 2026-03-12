import { MenuCover } from '../../components/menu/menu-cover'
import { PageAlaCarte } from '../../components/menu/page-ala-carte'
import { PageAppetizersAndSoups } from '../../components/menu/page-appetizers-soups'
import { PageBeverages } from '../../components/menu/page-beverages'
import { PageBreakfastAndSavers } from '../../components/menu/page-breakfast-savers'
import { PagePastaNoodles } from '../../components/menu/page-pasta-noodles'
import { PageRiceSandwichesDesserts } from '../../components/menu/page-rice-sandwiches-desserts'
import { CafeSection } from '../../components/menu/cafe-section'
import { StoreSection } from '../../components/menu/store-section'
import { PageCateringCombined } from '../../components/menu/page-catering-combined'
import { PagePanTrays } from '../../components/menu/page-pan-trays'
import { PrintButton } from '../../components/menu/print-button'

export default function MenuIndexPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <MenuCover />

        {/* All menu sections in one scroll; each component is a printable page */}
        <div className="menu-print-stack flex flex-col gap-8 mt-8 items-center">
          <div className="menu-print-sheet">
            <PageAlaCarte />
          </div>

          <div className="menu-print-sheet">
            <PageAppetizersAndSoups />
          </div>

          <div className="menu-print-sheet">
            <PageBeverages />
          </div>

          <div className="menu-print-sheet">
            <PageBreakfastAndSavers />
          </div>

          <div className="menu-print-sheet">
            <PagePastaNoodles />
          </div>

          <div className="menu-print-sheet">
            <PageRiceSandwichesDesserts />
          </div>

          <div className="menu-print-sheet">
            <CafeSection />
          </div>

          <div className="menu-print-sheet">
            <StoreSection />
          </div>

          <div className="menu-print-sheet">
            <PageCateringCombined pageNumber={8} />
          </div>

          <div className="menu-print-sheet">
            <PagePanTrays pageNumber={9} />
          </div>
        </div>
      </div>
    </main>
  )
}
