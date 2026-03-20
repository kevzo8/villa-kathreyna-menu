import Image from "next/image"
import { Bath, Coffee, Snowflake, Trees, Wifi } from "lucide-react"
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
    image: "/images/materials/princess.png",
  },
  {
    name: "Prince Room",
    type: "Standard",
    pax: "2 pax",
    bed: "Double Bed",
    rate22: "1,500",
    rate12: "800",
    features: ["Refined Earth-Tone Interior", "Modern & Cozy", "Up to 4 pax with extra bed"],
    image: "/images/materials/prince.png",
  },
  {
    name: "Duchess Room",
    type: "Deluxe",
    pax: "2 pax",
    bed: "Full Size Bed",
    rate22: "2,500",
    rate12: "1,500",
    features: ["Peacock Art", "Garden & Room View", "Up to 6 pax with extra beds"],
    image: "/images/materials/duchess.png",
  },
  {
    name: "Queen Suite",
    type: "Family Suite",
    pax: "2-4 pax",
    bed: "Queen Size Bed",
    rate22: "3,500",
    rate12: "2,000",
    features: ["Lavender Accent Wall", "Ambient Ceiling Lighting", "Up to 6 pax with extra bed"],
    image: "/images/materials/queen.png",
  },
  {
    name: "King Suite",
    type: "Premium Suite",
    pax: "2-4 pax",
    bed: "King Size Bed",
    rate22: "4,500",
    rate12: "2,500",
    features: ["Direct Terrace Access", "Garden & Pool View", "Up to 6 pax with extra bed"],
    image: "/images/materials/king.png",
  },
]

export function RoomAccommodation() {
  const amenities = [
    { label: "Private Bathroom", icon: Bath },
    { label: "Air-Conditioned", icon: Snowflake },
    { label: "Free Breakfast for 2", icon: Coffee },
    { label: "Pool & Garden Access", icon: Trees },
    { label: "WiFi", icon: Wifi },
  ]

  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
      <MaterialHeader title="Room Accommodation" subtitle="Rest in regal comfort with our elegant rooms &amp; suites" titleClassName="font-bold" logoSize={88} />

      {/* Content */}
      <div className="flex-1 px-6 py-3 flex flex-col gap-3.5">
        {/* All rooms include */}
        <div className="bg-[#0e7c6b] rounded-lg px-5 py-3 flex items-center justify-between">
          <span className="font-serif text-[13px] font-bold text-[#d4af37]">All Rooms Include:</span>
          <div className="flex gap-3.5 font-sans text-[10px] text-[#e8d5a3] font-medium">
            {amenities.map((amenity) => {
              const Icon = amenity.icon
              return (
                <span key={amenity.label} className="inline-flex items-center gap-1">
                  <Icon size={13} strokeWidth={2} className="text-[#d4af37]" />
                  {amenity.label}
                </span>
              )
            })}
          </div>
        </div>

        {/* Room cards */}
        {rooms.map((room, idx) => (
          <div key={room.name} className={`flex gap-4 items-stretch rounded-lg overflow-hidden border ${idx % 2 === 0 ? 'border-[#d4af37]/30 bg-[#f8f5ef]' : 'border-[#0e7c6b]/20 bg-[#0e7c6b]/5'}`}>
            {/* Room image */}
            <div className="w-[180px] h-[126px] flex-shrink-0 relative overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                width={180}
                height={126}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Room info */}
            <div className="flex-1 py-3 pr-4 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-display text-[19px] font-bold text-[#0e7c6b] leading-tight">{room.name}</h3>
                  <span className="font-sans text-[9.5px] font-bold text-[#d4af37] uppercase tracking-wider bg-[#d4af37]/10 px-1.5 py-0.5 rounded">{room.type}</span>
                </div>
                <p className="font-sans text-[12px] text-[#5a7a6e] mt-0.5 font-medium">{room.pax} | {room.bed}</p>
                <div className="flex gap-2 mt-1.5">
                  {room.features.map((f) => (
                    <span key={f} className="font-sans text-[9.5px] text-[#5a7a6e] bg-white/60 px-1.5 py-0.5 rounded border border-[#d4af37]/10 font-medium">{f}</span>
                  ))}
                </div>
              </div>
              {/* Pricing */}
              <div className="text-right flex-shrink-0 ml-4">
                <div className="mb-1">
                  <span className="font-display text-[22px] font-bold text-[#d4af37]">P{room.rate22}</span>
                  <p className="font-sans text-[10px] text-[#5a7a6e] font-medium">per 22 hrs</p>
                </div>
                <div>
                  <span className="font-serif text-[16px] font-bold text-[#0e7c6b]">P{room.rate12}</span>
                  <p className="font-sans text-[10px] text-[#5a7a6e] font-medium">per 12 hrs</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Booking info */}
        <div className="grid grid-cols-4 gap-3 mt-auto">
          <div className="bg-[#f8f5ef] rounded-lg p-3 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b]">Reservation Fee</h4>
            <p className="font-display text-[18px] font-bold text-[#d4af37]">?500</p>
            <p className="font-sans text-[9px] text-[#5a7a6e] font-medium">Non-refundable</p>
          </div>
          <div className="bg-[#f8f5ef] rounded-lg p-3 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b]">Extra Bed (Single)</h4>
            <p className="font-display text-[18px] font-bold text-[#d4af37]">?300</p>
            <p className="font-sans text-[9px] text-[#5a7a6e] font-medium">per night</p>
          </div>
          <div className="bg-[#f8f5ef] rounded-lg p-3 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b]">Extra Bed (Double)</h4>
            <p className="font-display text-[18px] font-bold text-[#d4af37]">?500</p>
            <p className="font-sans text-[9px] text-[#5a7a6e] font-medium">per night</p>
          </div>
          <div className="bg-[#f8f5ef] rounded-lg p-3 text-center border border-[#d4af37]/20">
            <h4 className="font-serif text-[11px] font-bold text-[#0e7c6b]">Check-in / Check-out</h4>
            <p className="font-display text-[18px] font-bold text-[#d4af37]">2PM</p>
            <p className="font-sans text-[9px] text-[#5a7a6e] font-medium">22 hours stay to 12NN</p>
          </div>
        </div>
      </div>

      <MaterialFooter />
    </div>
  )
}
