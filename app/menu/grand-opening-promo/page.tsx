import { PrintButton } from "../../../components/menu/print-button"
import { PageGrandOpeningPromo } from "../../../components/menu/page-grand-opening-promo"

export default function GrandOpeningPromoPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-sheet">
          <PageGrandOpeningPromo />
        </div>
      </div>
    </main>
  )
}
