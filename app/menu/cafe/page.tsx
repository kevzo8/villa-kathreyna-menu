import { CafeSection } from '../../../components/menu/cafe-section'
import { CafeSectionPage2 } from '../../../components/menu/cafe-section-page2'
import { PageBurntBasqueCheesecakes } from '../../../components/menu/page-burnt-basque-cheesecakes'
import { PrintButton } from '../../../components/menu/print-button'

export default function CafeMenuPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-stack flex flex-col gap-8 items-center">
          <CafeSection />
          <CafeSectionPage2 />
          <div className="menu-print-sheet">
            <PageBurntBasqueCheesecakes />
          </div>
        </div>
      </div>
    </main>
  )
}