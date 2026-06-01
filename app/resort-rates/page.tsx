import { ResortRates } from '../../components/materials/resort-rates'
import { PrintButton } from '../../components/menu/print-button'
import { MenuPageScaler } from '../../components/menu/menu-page-scaler'

export default function ResortRatesPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-sheet w-full">
          <MenuPageScaler>
            <ResortRates />
          </MenuPageScaler>
        </div>
      </div>
    </main>
  )
}
