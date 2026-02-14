interface MenuPageFooterProps {
  pageNumber: number
}

export function MenuPageFooter({ pageNumber }: MenuPageFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 pb-4 pt-2">
      <div className="text-[9px] text-[#5a7a6e] font-sans opacity-60">
        Villa Kathreyna Event Place & Resort
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-[#d4af37] opacity-30" />
        <span className="text-[10px] text-[#d4af37] font-serif">{pageNumber}</span>
        <div className="w-8 h-px bg-[#d4af37] opacity-30" />
      </div>
      <div className="text-[9px] text-[#5a7a6e] font-sans opacity-60">
        0977 627 1360
      </div>
    </div>
  )
}
