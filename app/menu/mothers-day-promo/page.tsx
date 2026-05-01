import { PageMothersDayPromo } from "../../../components/menu/page-mothers-day-promo"
import { PrintButton } from "../../../components/menu/print-button"

export default function MothersDayPromoPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-sheet">
          <PageMothersDayPromo pageNumber={10} />
        </div>
      </div>
    </main>
  )
}
