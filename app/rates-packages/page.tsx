import { PrintButton } from "../../components/menu/print-button"
import { MenuPageScaler } from "../../components/menu/menu-page-scaler"
import { OtherPackages } from "../../components/materials/other-packages"
import { ResortRates } from "../../components/materials/resort-rates"
import { RoomAccommodation } from "../../components/materials/room-accommodation"

export default function RatesPackagesPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-stack flex flex-col gap-8 items-center">
          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <ResortRates />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <RoomAccommodation />
            </MenuPageScaler>
          </div>

          <div className="menu-print-sheet w-full">
            <MenuPageScaler>
              <OtherPackages />
            </MenuPageScaler>
          </div>
        </div>
      </div>
    </main>
  )
}