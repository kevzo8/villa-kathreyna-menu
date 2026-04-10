import { PrintButton } from "../../../../components/menu/print-button"
import { PageBurntBasqueCheesecakes } from "../../../../components/menu/page-burnt-basque-cheesecakes"

export default function BurntBasqueCheesecakesPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-sheet">
          <PageBurntBasqueCheesecakes />
        </div>
      </div>
    </main>
  )
}
