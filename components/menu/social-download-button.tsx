"use client"

import { useCallback, useState } from "react"
import html2canvas from "html2canvas"

interface SocialDownloadButtonProps {
  targetId: string
  label: string
}

export function SocialDownloadButton({ targetId, label }: SocialDownloadButtonProps) {
  const [generating, setGenerating] = useState(false)

  const handleDownload = useCallback(async () => {
    const target = document.getElementById(targetId)
    if (!target) {
      alert("Promo graphic not found.")
      return
    }

    setGenerating(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const canvas = await html2canvas(target, {
        scale: 1,
        allowTaint: true,
        useCORS: true,
        backgroundColor: "#faf8f3",
        imageTimeout: 0,
        logging: false,
      })

      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = `${target.getAttribute("data-post-name") || targetId}-${new Date().getTime()}.png`
      link.click()
    } catch (error) {
      console.error("Error generating social post PNG:", error)
      alert("Error generating PNG. Please try again.")
    } finally {
      setGenerating(false)
    }
  }, [targetId])

  return (
    <button
      onClick={handleDownload}
      disabled={generating}
      className="bg-[#d4af37] text-[#0e7c6b] px-5 py-3 rounded-lg font-sans font-bold text-base shadow-lg hover:bg-[#c9a030] transition-colors cursor-pointer disabled:opacity-50"
    >
      {generating ? "Generating..." : label}
    </button>
  )
}