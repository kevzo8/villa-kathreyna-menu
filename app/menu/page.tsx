import { MenuCover } from '../../components/menu/menu-cover'
import { PageAlaCarte } from '../../components/menu/page-ala-carte'
import { PageAppetizersAndSoups } from '../../components/menu/page-appetizers-soups'
import { PageBeverages } from '../../components/menu/page-beverages'
import { PageBreakfastAndSavers } from '../../components/menu/page-breakfast-savers'
import { PagePastaNoodles } from '../../components/menu/page-pasta-noodles'
import { PageRiceSandwichesDesserts } from '../../components/menu/page-rice-sandwiches-desserts'
import { CafeSection } from '../../components/menu/cafe-section'
import { CafeSectionPage2 } from '../../components/menu/cafe-section-page2'
import { PageBurntBasqueCheesecakes } from '../../components/menu/page-burnt-basque-cheesecakes'
import { StoreSection } from '../../components/menu/store-section'
import { PageCateringCombined } from '../../components/menu/page-catering-combined'
import { PagePanTrays } from '../../components/menu/page-pan-trays'
import { PrintButton } from '../../components/menu/print-button'
import { MenuPageScaler } from '../../components/menu/menu-page-scaler'

export default function MenuIndexPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <MenuPageScaler>
          <MenuCover />
        </MenuPageScaler>

        {/* All menu sections in one scroll; each component is a printable page */}
        <div className="menu-print-stack flex flex-col gap-8 mt-8">
          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageAlaCarte />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageAppetizersAndSoups />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageBeverages />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageBreakfastAndSavers />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageRiceSandwichesDesserts />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PagePastaNoodles />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <CafeSection />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <CafeSectionPage2 />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageBurntBasqueCheesecakes />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <StoreSection />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PageCateringCombined pageNumber={8} />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <PagePanTrays pageNumber={9} />
            </MenuPageScaler>
          </div>
        </div>
      </div>
    </main>
  )
}
