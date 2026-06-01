import { RoomAccommodation } from '../../components/materials/room-accommodation'
import { PrintButton } from '../../components/menu/print-button'
import { MenuPageScaler } from '../../components/menu/menu-page-scaler'

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="menu-print-root mx-auto px-4">
        <div className="menu-print-sheet w-full">
          <MenuPageScaler>
            <RoomAccommodation />
          </MenuPageScaler>
        </div>
      </div>
    </main>
  )
}
