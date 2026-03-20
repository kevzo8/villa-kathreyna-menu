import { PageCateringCombined } from "../../../components/menu/page-catering-combined"
import { PagePanTrays } from "../../../components/menu/page-pan-trays"
import { PrintButton } from "../../../components/menu/print-button"

export default function CateringPanTraysPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-stack flex flex-col gap-8 items-center">
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