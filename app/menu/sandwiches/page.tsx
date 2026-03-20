import { PageSandwiches } from '../../../components/menu/page-sandwiches'
import { PrintButton } from '../../../components/menu/print-button'

export default function SandwichesMenuPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-stack flex flex-col gap-8 items-center">
          <PageSandwiches />
        </div>
      </div>
    </main>
  )
}