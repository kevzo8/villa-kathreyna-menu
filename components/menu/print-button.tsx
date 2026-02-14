"use client"

import { useCallback, useState } from "react"

export function PrintButton() {
  const [generating, setGenerating] = useState(false)

  const handleDownloadPDF = useCallback(async () => {
    setGenerating(true)
    try {
      // Use browser print dialog in "Save as PDF" mode
      // This is the most reliable cross-browser approach
      window.print()
    } finally {
      setGenerating(false)
    }
  }, [])

  return (
    <div className="no-print fixed top-4 right-4 z-50 flex gap-3">
      <button
        onClick={handleDownloadPDF}
        disabled={generating}
        className="bg-[#d4af37] text-[#0e7c6b] px-5 py-3 rounded-lg font-sans font-bold text-sm shadow-lg hover:bg-[#c9a030] transition-colors cursor-pointer disabled:opacity-50"
      >
        {generating ? "Generating..." : "Download as PDF"}
      </button>
      <button
        onClick={() => window.print()}
        className="bg-[#0e7c6b] text-[#d4af37] px-5 py-3 rounded-lg font-sans font-bold text-sm shadow-lg hover:bg-[#0a6558] transition-colors cursor-pointer"
      >
        Print Menu
      </button>
    </div>
  )
}
