import Image from "next/image"
import { MaterialHeader } from "./material-header"
import { MaterialFooter } from "./material-footer"

const availableAddOns = [
  "Catering Service (Food, Utensils & Waiters)",
  "Dish set (plate, spoon, fork, etc.)",
  "Backdrop Decor",
  "All-In Customized Decor",
  "Host/Clown/Magician/Game Facilitator",
  "Photographer",
  "Photobooth",
  "Grazing Table",
  "Lechon",
  "Cake",
  "Bubble Show",
  "Inflatables",
  "On-The-Day Coordinators",
  "Party Food Carts",
  "Other Party Needs & Services",
]

const availableAddOnPrices = [
  "starts at ₱400/head",
  "₱20/set",
  "starts at ₱5,000",
  "starts at ₱10,000",
  "starts at ₱5,000",
  "starts at ₱5,000",
  "starts at ₱4,000",
  "starts at ₱10,000",
  "starts at ₱9,000",
  "starts at ₱3,000",
  "starts at ₱3,000",
  "starts at ₱4,000",
  "starts at ₱10,000",
  "starts at ₱3,000",
  "Contact RkreatioNs Catering Services",
]

const corkageRates = [
  "Electric Food Cart",
  "Lechon",
  "Mobile Bar/Coffee Bar",
  "Sound/Band",
  "Lights",
  "LED Wall",
]

const corkagePrices = ["₱1,000", "₱1,500", "₱2,000", "₱2,000", "₱1,000", "₱2,500"]

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#d4af37] text-[#0e7c6b] px-3 py-0.5 font-sans text-[9px] font-semibold tracking-[0.18em] uppercase shadow-sm">
      {label}
    </span>
  )
}

export function OtherPackages() {
  return (
    <>
      {/* Page 1 – Exclusive Access */}
      <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
        <MaterialHeader
    title="All Exclusive Access & Add-On Rates"
    subtitle="Customize your Villa Kathreyna experience with flexible upgrades"
    titleClassName="font-bold"
    logoSize={86}
  />

        <div className="flex-1 flex flex-col">
          {/* Hero */}
          <div className="bg-[#0e7c6b] text-center px-8 pt-4 pb-5 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/materials/villa.jpg"
                alt="Exclusive access to Villa Kathreyna"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#0e7c6b]/85" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <Pill label="Best Value" />
              <p className="font-display text-[34px] leading-none text-[#ffd86f] mt-0.5 font-bold">
                25,000
              </p>
              <h1 className="font-display text-[26px] leading-tight text-[#fdf8e5] tracking-[0.12em] capitalize font-bold mt-0.5">
                Exclusive Access
              </h1>
              <p className="font-sans text-[11px] text-[#f5e9c9] max-w-[460px] mt-0.5">
                Your private sanctuary: unwind in 5 luxurious rooms with premium amenities and full venue access—
                all-inclusive elegance.
              </p>
              <p className="font-sans text-[10px] text-[#f5e9c9] mt-1 flex items-center gap-1">
                <span className="text-[14px]">⏱</span>
                <span className="text-[11px]">22 Hours (2PM to 12NN next day)</span>
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 px-8 py-4 flex flex-col gap-3 bg-[#faf7f0]">
            {/* Venue preview images */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[{
                src: "/images/materials/lobby.png",
                label: "Lobby & Lounge",
              }, {
                src: "/images/materials/duchess copy.png",
                label: "Duchess Room",
              }, {
                src: "/images/materials/prince copy.png",
                label: "Prince Room",
              }, {
                src: "/images/materials/princess copy.png",
                label: "Princess Room",
              }, {
                src: "/images/materials/queen copy.png",
                label: "Queen Room",
              }, {
                src: "/images/materials/king copy.png",
                label: "King Room",
              }, {
                src: "/images/materials/garden-pool.png",
                label: "Garden & Pool",
              }, {
                src: "/images/materials/hall.png",
                label: "Event Hall",
              }].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="w-full h-[80px] rounded-md overflow-hidden relative border border-[#d4af37]/40 bg-white">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-sans text-[9px] text-[#3e5a52] leading-tight text-center">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[0.9fr_1.2fr] gap-3 flex-1">
              <div className="flex flex-col gap-3">
        {/* Package Inclusions */}
        <div className="bg-white rounded-lg border border-[#d4af37]/35 shadow-sm px-3 py-2.5 flex flex-col">
          <h2 className="font-serif text-[13px] font-bold text-[#0e7c6b] mb-1 flex items-center gap-1.5">
          <span className="text-[13px]">🏡</span>
          <span>Package Inclusions</span>
          </h2>
          <div className="mt-1 font-sans text-[11px] text-[#3e5a52]">
          <ul className="space-y-0.5 list-disc pl-4">
            <li>5 Rooms (King, Queen, Duchess, Prince, Princess)</li>
            <li>Overnight sleeping capacity: 20 pax (based on standard beds)</li>
            <li>Full access to swimming pool &amp; garden</li>
            <li>Tables &amp; chairs for 50 pax</li>
            <li>1 buffet table</li>
            <li>Water dispenser with free 2 gallons of water</li>
            <li>Hall use included with free table &amp; chair setup for 50 pax</li>
            <li>
            All Access Package good for 50 guests total (day + overnight combined, including 20 overnight guests)
            </li>
          </ul>
          </div>
        </div>

                {/* Additional Charges */}
    <div className="bg-white rounded-lg border border-[#d4af37]/40 px-3 py-2">
      <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] mb-1.5 flex items-center gap-1.5">
          <span className="text-[13px]">➕</span>
          <span>Additional Charges</span>
          </h3>
          <ul className="grid grid-cols-1 gap-y-0.5 font-sans text-[11px] text-[#3e5a52] list-disc pl-4">
          <li>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>Extra bed (single)</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-sans font-bold text-[#d4af37] text-[12px]">₱300/night</span>
            </div>
          </li>
          <li>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>Extra bed (double)</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-sans font-bold text-[#d4af37] text-[12px]">₱500/night</span>
            </div>
          </li>
          <li>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>Additional overnight guest (no bed)</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-sans font-bold text-[#d4af37] text-[12px]">₱300/head/night</span>
            </div>
          </li>
          <li>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>Extra tables &amp; chairs for hall</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-sans font-bold text-[#d4af37] text-[12px]">₱300/set</span>
            </div>
          </li>
          <li>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>Full kitchen access</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-sans font-bold text-[#d4af37] text-[12px]">₱500</span>
            </div>
          </li>
          <li>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>Additional entrance fee (beyond 50 pax)</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-sans font-bold text-[#d4af37] text-[12px]">₱150/head</span>
            </div>
          </li>
          </ul>
        </div>
              </div>

              {/* Available Add-Ons */}
              <div className="bg-white rounded-lg border border-[#d4af37]/40 px-5 py-3 flex flex-col font-sans text-[11px] text-[#3e5a52]">
              <h3 className="font-serif text-[14px] font-bold text-[#0e7c6b] mb-1.5 flex items-center gap-1.5">
                <span className="text-[13px]">✨</span>
                <span>Available Add-Ons</span>
              </h3>
              <div className="space-y-1.5">
                <div>
        <p className="text-[9px] text-[#6b7a75] mb-0.5">Enhance your event with these additional services</p>
        <ul className="space-y-0.5 list-disc pl-4">
          {availableAddOns.map((label, idx) => (
          <li key={label}>
            <div className="flex items-baseline gap-1">
              <span className="flex-1 flex items-center">
                <span>{label}</span>
                <span className="flex-1 border-b border-dashed border-[#d4af37]/50 mx-1" />
              </span>
              <span className="font-semibold text-[#d4af37] whitespace-nowrap">{availableAddOnPrices[idx]}</span>
            </div>
          </li>
          ))}
        </ul>
        </div>
                <div className="pt-1 border-t border-dashed border-[#d4af37]/50">
                <p className="font-serif text-[12px] font-bold text-[#0e7c6b]">Corkage Rates</p>
                <p className="text-[9px] text-[#6b7a75] mb-0.5">Fees for bringing your own suppliers</p>
                <ul className="space-y-0.5 list-disc pl-4">
                  {corkageRates.map((label, idx) => (
                  <li key={label}>
                    <div className="flex items-baseline gap-1">
                      <span className="flex-1 flex items-center">
                        <span>{label}</span>
                        <span className="flex-1 border-b border-dashed border-[#0e7c6b]/50 mx-1" />
                      </span>
                      <span className="font-semibold text-[#0e7c6b] whitespace-nowrap">{corkagePrices[idx]}</span>
                    </div>
                  </li>
                  ))}
                </ul>
                </div>
              </div>
              </div>
            </div>
          </div>

          <MaterialFooter />
        </div>
      </div>

      {/* Page 2 – Wedding Packages & All-In Package */}
      <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
        <MaterialHeader
          title="Wedding Packages"
	      subtitle="Make your wedding stress-free—let us organize every detail for you."
          titleClassName="font-bold"
          logoSize={86}
        />

        <div className="flex-1 flex flex-col bg-[#faf7f0]">
          {/* Wedding banner image */}
          <div className="h-[118px] w-full relative overflow-hidden">
            <Image
              src="/images/materials/wedding.jpg"
              alt="Wedding setup at Villa Kathreyna"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-[#faf7f0]/60" />
          </div>

          {/* Intro Banner */}
          <div className="px-8 pt-4 pb-2 text-center">
            <h2 className="font-display text-[22px] text-[#0e7c6b] tracking-[0.18em] capitalize mb-1 font-bold">
              Your Dream Wedding Awaits
            </h2>
            <p className="font-sans text-[11px] text-[#5a7a6e] max-w-[540px] mx-auto">
	      Where elegance meets affordability—complete venue access, exquisite catering, and luxurious accommodations for your unforgettable day.
            </p>
          </div>

          {/* Packages table + All-In Wedding */}
          <div className="flex-1 px-6 pb-4 flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden border border-[#0e7c6b]/40 bg-white">
              <div className="bg-[#0e7c6b] px-4 py-2 flex items-center text-white text-[11px] font-sans font-semibold uppercase tracking-[0.2em]">
                <span className="w-[120px] text-left font-serif">Package Feature</span>
                <div className="flex-1 grid grid-cols-4 gap-2 justify-items-center">
                    <span className="flex flex-col items-center justify-center gap-0.5 font-serif text-[11px]">
                      <span className="w-5 h-5 rounded-full bg-[#b8bec9] flex items-center justify-center text-[11px] font-bold">
                        ✦
                      </span>
                      <span>Silver</span>
                    </span>
                    <span className="flex flex-col items-center justify-center gap-0.5 font-serif text-[11px]">
                      <span className="w-5 h-5 rounded-full bg-[#d4af37] flex items-center justify-center text-[11px] font-bold">
                        ★
                      </span>
                      <span>Gold</span>
                    </span>
                    <span className="flex flex-col items-center justify-center gap-0.5 font-serif text-[11px]">
                      <span className="w-5 h-5 rounded-full bg-[#9aa3ad] flex items-center justify-center text-[11px] font-bold">
                        ♛
                      </span>
                      <span>Platinum</span>
                    </span>
                    <span className="flex flex-col items-center justify-center gap-0.5 font-serif text-[11px]">
                      <span className="w-5 h-5 rounded-full bg-[#63c9f2] flex items-center justify-center text-[11px] font-bold">
                        ◈
                      </span>
                      <span>Diamond</span>
                    </span>
                  </div>
              </div>
              <table className="w-full border-collapse text-[11px] font-sans text-[#3e5a52]">
                <tbody>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Price</td>
                    <td className="px-3 py-1.5 text-center font-serif text-[16px] text-[#d4af37] font-bold">₱80,000</td>
                    <td className="px-3 py-1.5 text-center font-serif text-[16px] text-[#d4af37] font-bold">₱90,000</td>
                    <td className="px-3 py-1.5 text-center font-serif text-[16px] text-[#d4af37] font-bold">₱120,000</td>
                    <td className="px-3 py-1.5 text-center font-serif text-[16px] text-[#d4af37] font-bold">₱200,000</td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Food Catering</td>
                    <td className="px-3 py-1.5 text-center">100 pax</td>
                    <td className="px-3 py-1.5 text-center">100 pax</td>
                    <td className="px-3 py-1.5 text-center">100 pax</td>
                    <td className="px-3 py-1.5 text-center">200 pax</td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Venue Access</td>
                    <td className="px-3 py-1.5 text-center" colSpan={4}>
                      Hall, Garden, Pool, Terrace, Roof Deck
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Room Accommodation</td>
                    <td className="px-3 py-1.5 text-center">Free 22 hrs stay at 1 Queen Room</td>
                    <td className="px-3 py-1.5 text-center">Free 22 hrs stay at 2 Rooms (King Room and Queen Room)</td>
                    <td className="px-3 py-1.5 text-center">22 hrs reserved access to all 5 Rooms</td>
                    <td className="px-3 py-1.5 text-center">22 hrs reserved access to all 5 Rooms</td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Additional Room Discount</td>
                    <td className="px-3 py-1.5 text-center">10% discount on additional room</td>
                    <td className="px-3 py-1.5 text-center">10% discount on additional room</td>
                    <td className="px-3 py-1.5 text-center">All rooms included</td>
                    <td className="px-3 py-1.5 text-center">All rooms included</td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Setup &amp; Decoration</td>
                    <td className="px-3 py-1.5 text-center" colSpan={4}>
                      Tables, chairs, presidential setup
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Cake &amp; Grazing Table</td>
                    <td className="px-3 py-1.5 text-center" colSpan={4}>
                      1 tier cake + simple grazing
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Sound, Lights, Videoke</td>
                    <td className="px-3 py-1.5 text-center">✓</td>
                    <td className="px-3 py-1.5 text-center">✓</td>
                    <td className="px-3 py-1.5 text-center">✓</td>
                    <td className="px-3 py-1.5 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-[#e5dcc7]">
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Couple Extras</td>
                    <td className="px-3 py-1.5 text-center" colSpan={4}>
                      Couch, wine, sweets
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1.5 font-semibold text-[#0e7c6b]">Entrance Signage</td>
                    <td className="px-3 py-1.5 text-center" colSpan={4}>
                      Free entrance signage (mirror or easel)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* All-In Wedding Package summary */}
            <div className="bg-white rounded-lg border border-[#d4af37]/40 px-4 py-3 flex flex-col gap-2">
              <div className="flex items-center justify-center text-center">
                <div>
                  <h3 className="font-serif text-[15px] font-bold text-[#0e7c6b] flex items-center justify-center gap-1.5">
                    <span className="text-[15px]">👑</span>
                    <span>All-In Wedding Package</span>
                    <span className="text-[15px]">👑</span>
                  </h3>
                  <p className="font-sans text-[11px] text-[#5a7a6e] mt-0.5">Complete package options for 100, 150, and 200 pax</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[{ pax: "100 pax", price: "₱150,000" }, { pax: "150 pax", price: "₱200,000" }, { pax: "200 pax", price: "₱250,000" }].map(
                  (tier) => (
                    <div
                      key={tier.pax}
                      className="rounded-md border border-[#d4af37]/40 px-2.5 py-2 text-center bg-[#faf7f0] flex flex-col justify-center"
                    >
                      <p className="font-sans text-[10px] text-[#5a7a6e] uppercase tracking-[0.16em] mb-0.5">{tier.pax}</p>
                      <p className="font-display text-[17px] text-[#d4af37] font-bold">{tier.price}</p>
                    </div>
                  ),
                )}
              </div>
              <h4 className="font-serif text-[12px] font-bold text-[#0e7c6b] mb-1">Package Inclusions</h4>
              <ul className="grid grid-cols-3 gap-x-4 gap-y-0.5 font-sans text-[11px] text-[#3e5a52] list-disc pl-4">
                <li>All access to the venue</li>
                <li>All 5 rooms for 22 hours</li>
                <li>Food catering services</li>
                <li>Simple motif venue decoration</li>
                <li>Photo &amp; video coverage</li>
                <li>Emcee/Host</li>
                <li>Sounds, lights &amp; videoke</li>
                <li>1 tier cake</li>
                <li>Wine &amp; couch for couple</li>
                <li>Grazing table</li>
                <li>Photobooth</li>
                <li>Free entrance signage (mirror or easel)</li>
              </ul>
            </div>

            {/* Optional Add-Ons */}
            <div className="bg-white rounded-lg border border-[#d4af37]/40 px-4 py-2.5">
              <h4 className="font-serif text-[12px] font-bold text-[#0e7c6b] mb-1">Optional Add-Ons</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5 list-disc pl-4 font-sans text-[10px] text-[#3e5a52]">
                <li>Bride's Bouquet &amp; Groom's Boutonniere</li>
                <li>Entourage Bouquets &amp; Boutonnieres</li>
                <li>Invitation for Guests</li>
                <li>Bridal Car w/ Flower Decoration</li>
                <li>HMUA for Bride</li>
                <li>HMUA for Parents &amp; Entourage</li>
                <li>Same Day Edit (SDE)</li>
              </ul>
            </div>
          </div>

          <MaterialFooter />
        </div>
      </div>

      {/* Page 4 – Birthday, Baptism & Debut Packages */}
      <div className="menu-page w-[210mm] h-[297mm] mx-auto relative overflow-hidden bg-white flex flex-col">
        <MaterialHeader
          title="Celebration Packages"
          subtitle="We create, you celebrate—hassle-free moments for your special day."
          titleClassName="font-bold"
          logoSize={86}
        />

        <div className="flex-1 flex flex-col bg-[#faf7f0] px-7 py-4 gap-4">
          {/* Birthday & Baptism */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg border border-[#d4af37]/35 px-4 py-3 flex flex-col">
              <div className="h-[86px] w-full rounded-md overflow-hidden mb-2 relative">
                <Image
                  src="/images/materials/birthday.jpg"
                  alt="Birthday celebration setup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div>
                  <h2 className="font-display text-[18px] text-[#0e7c6b] font-bold">Birthday/Baptism Catering & Styling</h2>
                  <p className="font-sans text-[10.5px] text-[#d28b2a] uppercase tracking-[0.16em]">
                    RKreatioNs Catering Services
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-[22px] text-[#d4af37] font-bold">₱70,000</p>
                  <p className="font-sans text-[10px] text-[#5a7a6e]">100 pax</p>
                </div>
              </div>
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] mt-1 mb-0.5">Package Inclusions</h3>
              <ul className="font-sans text-[10.5px] text-[#3e5a52] space-y-0.5 list-disc pl-4">
                <li>Food catering services for 100 pax</li>
                <li>Simple grazing table / dessert corner</li>
                <li>Tables &amp; chairs setup for 100 pax</li>
                <li>Buffet table with skirting</li>
                <li>Cake table with skirting</li>
                <li>Gift table with skirting</li>
                <li>Customized decorations according to your chosen theme</li>
                <li>Celebrant&apos;s chair</li>
                <li>Ladder souvenir stand</li>
                <li>Entrance signage (mirror or easel)</li>
              </ul>
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] mt-1.5 mb-0.5">Add-Ons (Optional)</h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 font-sans text-[10.5px] text-[#3e5a52] mt-0.5">
                <span>Event host – <span className="text-[#d4af37] font-semibold">₱5,000</span></span>
                <span>Photographer – <span className="text-[#d4af37] font-semibold">₱5,000</span></span>
                <span>Clown / magician / host / game facilitator – <span className="text-[#d4af37] font-semibold">₱5,000</span></span>
                <span>Face painting – <span className="text-[#d4af37] font-semibold">₱3,000</span></span>
                <span>Bubble show – <span className="text-[#d4af37] font-semibold">₱3,000</span></span>
                <span>Inflatables – <span className="text-[#d4af37] font-semibold">starts at ₱4,000</span></span>
                <span>Cake – <span className="text-[#d4af37] font-semibold">starts at ₱2,850</span></span>
                <span>Party food carts – <span className="text-[#d4af37] font-semibold">contact for pricing</span></span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-[#d4af37]/35 px-4 py-3 flex flex-col">
              <div className="h-[86px] w-full rounded-md overflow-hidden mb-2 relative">
                <Image
                  src="/images/materials/baptism.jpg"
                  alt="Baptism or celebration setup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div>
                  <h2 className="font-display text-[18px] text-[#0e7c6b] font-bold">Birthday/Baptism w/ Venue & Rooms</h2>
                  <p className="font-sans text-[10.5px] text-[#d28b2a] uppercase tracking-[0.16em]">Villa Kathreyna</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-[22px] text-[#d4af37] font-bold">₱70,000</p>
                  <p className="font-sans text-[10px] text-[#5a7a6e]">70 pax</p>
                </div>
              </div>
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] mt-1 mb-0.5">Package Inclusions</h3>
              <ul className="font-sans text-[10.5px] text-[#3e5a52] space-y-0.5 list-disc pl-4">
                <li>Food catering services for 70 pax</li>
                <li>6 hours free use of: RK Hall, Garden, Pool access</li>
                <li>Free 22-hour stay in 1 Queen Room (2 pax)</li>
                <li>10% discount on additional rooms</li>
                <li>Customized birthday decorations</li>
                <li>Tables and chair setup</li>
                <li>Table centerpieces</li>
                <li>Simple grazing table / dessert corner</li>
                <li>Basic sound and lights</li>
                <li>Free use of videoke</li>
                <li>Free entrance signage (mirror or easel)</li>
                <li>Free 1-tier cake</li>
                <li>Cake table</li>
                <li>Souvenir stand</li>
              </ul>
            </div>
          </div>

          {/* Debut Packages */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg border border-[#d4af37]/35 px-4 py-3 flex flex-col">
              <div className="h-[86px] w-full rounded-md overflow-hidden mb-2 relative">
                <Image
                  src="/images/materials/debut.jpg"
                  alt="Debut celebration package A"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white text-[12px] leading-none flex items-center justify-center font-bold">☀</span>
                  <h2 className="font-display text-[18px] text-[#0e7c6b] font-bold">Debut Package</h2>
                </div>
                <div className="text-right">
                  <p className="font-display text-[22px] text-[#d4af37] font-bold">₱60,000</p>
                  <p className="font-sans text-[10px] text-[#5a7a6e]">50 pax</p>
                </div>
              </div>
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] mb-0.5">Package Inclusions</h3>
              <ul className="font-sans text-[10.5px] text-[#3e5a52] space-y-0.5 list-disc pl-4">
                <li>Food catering services for 50 pax</li>
                <li>3 hours access to villa (pre-debut photoshoot)</li>
                <li>6 hours free use of: RK Hall, Garden, Pool, Terrace &amp; Roof Deck</li>
                <li>Free 22-hour stay in 2 rooms (King Room, Queen Room)</li>
                <li>10% discount on additional rooms</li>
                <li>Simple grazing table</li>
                <li>Customized backdrop decorations</li>
                <li>Tables and chair setup</li>
                <li>Basic sound and lights</li>
                <li>Free use of videoke</li>
                <li>Free entrance signage (Selfie Mirror or Easel)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-[#d4af37]/35 px-4 py-3 flex flex-col">
              <div className="h-[86px] w-full rounded-md overflow-hidden mb-2 relative">
                <Image
                  src="/images/materials/debut.png"
                  alt="Debut celebration package B"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[12px] leading-none flex items-center justify-center font-bold">☾</span>
                  <h2 className="font-display text-[18px] text-[#0e7c6b] font-bold">Birthday, Baptism or Debut Package</h2>
                </div>
                <div className="text-right">
                  <p className="font-display text-[22px] text-[#d4af37] font-bold">₱80,000</p>
                  <p className="font-sans text-[10px] text-[#5a7a6e]">100 pax</p>
                </div>
              </div>
              <h3 className="font-serif text-[12px] font-bold text-[#0e7c6b] mb-0.5">Package Inclusions</h3>
              <ul className="font-sans text-[10.5px] text-[#3e5a52] space-y-0.5 list-disc pl-4">
                <li>Food catering services for 100 pax</li>
                <li>3 hours access to villa (pre-debut photoshoot)</li>
                <li>6 hours free use of: RK Hall, Garden, Pool, Terrace &amp; Roof Deck</li>
                <li>22-hour access to 3 rooms (King Room, Queen Room, Duchess Room)</li>
                <li>10% discount on additional rooms</li>
                <li>Simple grazing table</li>
                <li>Customized backdrop decorations</li>
                <li>Tables and chair setup</li>
                <li>Basic sound and lights</li>
                <li>Free use of videoke</li>
                <li>Free entrance signage (Selfie Mirror or Easel)</li>
              </ul>
            </div>
          </div>
        </div>

        <MaterialFooter />
      </div>
    </>
  )
}
