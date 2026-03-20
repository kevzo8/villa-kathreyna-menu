import { PageRiceSandwichesDesserts } from '../../../components/menu/page-rice-sandwiches-desserts'
import { PrintButton } from '../../../components/menu/print-button'

export default function RiceSandwichesDessertsMenuPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-stack flex flex-col gap-8 items-center">
          <PageRiceSandwichesDesserts />
        </div>
      </div>
    </main>
  )
}