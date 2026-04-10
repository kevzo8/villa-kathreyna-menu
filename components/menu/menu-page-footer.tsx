interface MenuPageFooterProps {
  pageNumber?: number
}

export function MenuPageFooter({ pageNumber }: MenuPageFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 pb-4 pt-2">
      <div className="text-[11px] text-[#5a7a6e] font-sans opacity-60 max-w-[36%] leading-tight">
        Villa Kathreyna | La Bella Caf&#232; & Resto Bar
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-[#d4af37] opacity-30" />
        <span className="text-xl text-[#d4af37]">◆</span>
        <div className="w-8 h-px bg-[#d4af37] opacity-30" />
      </div>
      <div className="text-[11px] text-[#5a7a6e] font-sans opacity-60 max-w-[44%] text-right leading-tight flex items-center gap-1 justify-end">
        📞 0977 627 1360 | 🌐 villakathreyna.com | <svg className="w-3 h-3 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Villa Kathreyna
      </div>
    </div>
  )
}
