"use client"

export function PrintButton() {
  return (
    <div className="no-print fixed top-4 right-4 z-50">
      <button
        onClick={() => window.print()}
        className="bg-[#0e7c6b] text-[#d4af37] px-6 py-3 rounded-lg font-sans font-bold text-sm shadow-lg hover:bg-[#0a6558] transition-colors cursor-pointer"
      >
        Print Menu
      </button>
    </div>
  )
}
