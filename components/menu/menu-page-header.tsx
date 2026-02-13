import Image from "next/image"

export function MenuPageHeader() {
  return (
    <div className="flex items-center justify-between px-8 pt-5 pb-3">
      <div className="flex-1 h-px bg-[#d4af37] opacity-40" />
      <div className="px-4">
        <Image
          src="/images/logo-transparent.png"
          alt="Villa KathReyna"
          width={60}
          height={60}
          className="opacity-80"
        />
      </div>
      <div className="flex-1 h-px bg-[#d4af37] opacity-40" />
    </div>
  )
}
