import Image from "next/image"
import { MaterialHeader } from "./material-header"
import { MaterialFooter } from "./material-footer"

const rooms = [
  {
    name: "Princess Room",
    type: "Standard",
    pax: "2 pax",
    bed: "Double Bed",
    rate22: "1,500",
    rate12: "800",
    features: ["Green & Gold Theme", "Tree Wall Art", "Up to 4 pax with extra bed"],
    image: "/images/materials/hotel-room.jpg",
  },
  {
    name: "Prince Room",
    type: "Standard",
    pax: "2 pax",
    bed: "Bunk Beds",
    rate22: "1,500",
    rate12: "800",
    features: ["Bunk Bed Style", "Modern & Cozy", "Up to 4 pax with extra bed"],
    image: "/images/materials/hotel-room.jpg",
  },
  {
    name: "Duchess Room",
    type: "Deluxe",
    pax: "2 pax",
    bed: "Full Size Bed",
    rate22: "2,500",
    rate12: "1,500",
    features: ["Peacock Art", "Sofa & Daybed", "Garden & Pool View"],
    image: "/images/materials/deluxe-room.jpg",
  },
  {
    name: "Queen Suite",
    type: "Family Suite",
    pax: "2-4 pax",
    bed: "Queen Size Bed",
    rate22: "3,500",
    rate12: "2,000",
    features: ["Lavender Accent Wall", "Ambient Ceiling Lighting", "Up to 6 pax with extra bed"],
    image: "/images/materials/family-room.jpg",
  },
  {
    name: "King Suite",
    type: "Premium Suite",
    pax: "2-4 pax",
    bed: "King Size Bed",
    rate22: "4,500",
    rate12: "2,500",
    features: ["Direct Terrace Access", "Garden & Pool View", "Up to 6 pax with extra bed"],
    image: "/images/materials/family-room.jpg",
  },
]

export function RoomAccommodation() {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      <MaterialHeader title="Room Accommodation" subtitle="Luxurious Rooms &amp; Suites" />

      {/* Content */}
      <div className="flex-1 px-6 py-3 flex flex-col gap-2.5">
        {/* All rooms include */}
        <div className="bg-[#0e7c6b] rounded-lg px-5 py-2.5 flex items-center justify-between">
          <span className="font-serif text-[11px] font-bold text-[#d4af37]">All Rooms Include:</span>
          <div className="flex gap-4 font-sans text-[9px] text-[#e8d5a3]">
            <span>Private Bathroom</span>
            <span>Air-Conditioned</span>
            <span>Free Breakfast for 2</span>
            <span>Pool & Garden Access</span>
            <span>WiFi</span>
          </div>
        </div>

        {/* Room cards */}
        {rooms.map((room, idx) => (
          <div key={room.name} className={`flex gap-4 items-stretch rounded-lg overflow-hidden border ${idx % 2 === 0 ? 'border-[#d4af37]/30 bg-[#f8f5ef]' : 'border-[#0e7c6b]/20 bg-[#0e7c6b]/5'}`}>
            {/* Room image */}
            <div className="w-[140px] h-[100px] flex-shrink-0 relative overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                width={140}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Room info */}
            <div className="flex-1 py-2 pr-4 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-display text-base text-[#0e7c6b]">{room.name}</h3>
                  <span className="font-sans text-[8px] text-[#d4af37] uppercase tracking-wider bg-[#d4af37]/10 px-1.5 py-0.5 rounded">{room.type}</span>
                </div>
                <p className="font-sans text-[10px] text-[#5a7a6e] mt-0.5">{room.pax} | {room.bed}</p>
                <div className="flex gap-2 mt-1">
                  {room.features.map((f) => (
                    <span key={f} className="font-sans text-[8px] text-[#5a7a6e] bg-white/60 px-1.5 py-0.5 rounded border border-[#d4af37]/10">{f}</span>
                  ))}
                </div>
              </div>
              {/* Pricing */}
              <div className="text-right flex-shrink-0 ml-4">
                <div className="mb-1">
                  <span className="font-display text-xl text-[#d4af37]">P{room.rate22}</span>
                  <p className="font-sans text-[8px] text-[#5a7a6e]">per 22 hrs</p>
                </div>
                <div>
                  <span className="font-serif text-sm text-[#0e7c6b]">P{room.rate12}</span>
                  <p className="font-sans text-[8px] text-[#5a7a6e]">per 12 hrs</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Booking info */}
        <div className="grid grid-cols-4 gap-3 mt-auto">
          <div className="bg-[#f8f5ef] rounded-lg p-2.5 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[10px] font-bold text-[#0e7c6b]">Reservation Fee</h4>
            <p className="font-display text-base text-[#d4af37]">P500</p>
            <p className="font-sans text-[8px] text-[#5a7a6e]">Non-refundable</p>
          </div>
          <div className="bg-[#f8f5ef] rounded-lg p-2.5 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[10px] font-bold text-[#0e7c6b]">Extra Bed (Single)</h4>
            <p className="font-display text-base text-[#d4af37]">P300</p>
            <p className="font-sans text-[8px] text-[#5a7a6e]">per night</p>
          </div>
          <div className="bg-[#f8f5ef] rounded-lg p-2.5 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[10px] font-bold text-[#0e7c6b]">Extra Bed (Double)</h4>
            <p className="font-display text-base text-[#d4af37]">P500</p>
            <p className="font-sans text-[8px] text-[#5a7a6e]">per night</p>
          </div>
          <div className="bg-[#f8f5ef] rounded-lg p-2.5 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[10px] font-bold text-[#0e7c6b]">Check-in / Check-out</h4>
            <p className="font-display text-base text-[#d4af37]">2PM</p>
            <p className="font-sans text-[8px] text-[#5a7a6e]">22 hours stay to 12NN</p>
          </div>
        </div>
      </div>

      <MaterialFooter />
    </div>
  )
}
