import { MenuCover } from '../../components/menu/menu-cover'
import { PageAlaCarte } from '../../components/menu/page-ala-carte'
import { PageAppetizersAndSoups } from '../../components/menu/page-appetizers-soups'
import { PageBeverages } from '../../components/menu/page-beverages'
import { PageBreakfastAndSavers } from '../../components/menu/page-breakfast-savers'
import { PagePastaNoodles } from '../../components/menu/page-pasta-noodles'
import { PageRiceSandwichesDesserts } from '../../components/menu/page-rice-sandwiches-desserts'
import { CafeSection } from '../../components/menu/cafe-section'
import { StoreSection } from '../../components/menu/store-section'

export default function MenuIndexPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <div className="mx-auto px-4">
        <MenuCover />

        {/* All menu sections in one scroll; each component is a printable page */}
        <div className="flex flex-col gap-8 mt-8 items-center">
          <div style={{ pageBreakAfter: 'always' }}>
            <PageAlaCarte />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <PageAppetizersAndSoups />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <PageBeverages />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <PageBreakfastAndSavers />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <PagePastaNoodles />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <PageRiceSandwichesDesserts />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <CafeSection />
          </div>

          <div style={{ pageBreakAfter: 'always' }}>
            <StoreSection />
          </div>
        </div>
      </div>
    </main>
  )
}
