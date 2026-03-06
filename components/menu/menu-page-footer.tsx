interface MenuPageFooterProps {
  pageNumber: number
}

export function MenuPageFooter({ pageNumber }: MenuPageFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 pb-4 pt-2">
      <div className="text-[9px] text-[#5a7a6e] font-sans opacity-60 max-w-[36%] leading-tight">
        Villa Kathreyna | La Bella Caf&#232; & Resto Bar
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-[#d4af37] opacity-30" />
        <span className="text-[10px] text-[#d4af37] font-serif">{pageNumber}</span>
        <div className="w-8 h-px bg-[#d4af37] opacity-30" />
      </div>
      <div className="text-[9px] text-[#5a7a6e] font-sans opacity-60 max-w-[44%] text-right leading-tight">
        0977 627 1360 | villakathreyna.com | Facebook: Villa Kathreyna
      </div>
    </div>
  )
}
