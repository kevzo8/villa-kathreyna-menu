import Image from "next/image"

export function MenuPageHeader() {
  return (
    <div className="flex items-center justify-between px-8 pt-5 pb-3">
      <div className="flex-1 h-px bg-[#d4af37] opacity-40" />
      <div className="px-4">
        <Image
          src="/images/emblem-transparent-invert.png"
          alt="Villa Kathreyna"
          width={110}
          height={40}
          className="opacity-90 h-auto"
        />
      </div>
      <div className="flex-1 h-px bg-[#d4af37] opacity-40" />
    </div>
  )
}
