"use client"

import { useCallback, useState } from "react"
import html2canvas from "html2canvas"

export function PrintButton() {
  const [generating, setGenerating] = useState(false)

  const handleDownloadPNG = useCallback(async () => {
    setGenerating(true)
    try {
      // Find the menu page that's currently in or near the viewport
      const pages = document.querySelectorAll(".menu-page")
      let targetPage: Element | null = pages[0] ?? null

      // Fallback for routes that don't render .menu-page blocks (e.g. promo pages)
      if (!targetPage) {
        targetPage = document.querySelector("main") ?? document.body
      }

      if (pages.length > 1) {
        // Find the page closest to the center of the viewport
        const viewportCenter = window.innerHeight / 2
        let closestDistance = Infinity

        pages.forEach((page) => {
          const rect = page.getBoundingClientRect()
          const pageCenter = rect.top + rect.height / 2
          const distance = Math.abs(pageCenter - viewportCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            targetPage = page
          }
        })
      }

      const pageName = targetPage.getAttribute("data-page-name") || "resource-page"
      
      // Clone the element
      const clonedPage = targetPage.cloneNode(true) as HTMLElement
      
      // Create a temporary container visible to the DOM for proper rendering
      const container = document.createElement("div")
      container.style.position = "fixed"
      container.style.left = "0"
      container.style.top = "0"
      container.style.width = "210mm"
      container.style.height = "297mm"
      container.style.margin = "0"
      container.style.padding = "0"
      container.style.overflow = "hidden"
      container.style.zIndex = "-9999"
      
      clonedPage.style.width = "100%"
      clonedPage.style.height = "100%"
      
      // Add style overrides to the clone to prevent image stretching
      const styleEl = document.createElement("style")
      styleEl.textContent = `
        img { 
          width: auto !important;
          height: auto !important;
          max-width: 100% !important;
          object-fit: contain !important;
          object-position: center !important;
        }
      `
      clonedPage.insertBefore(styleEl, clonedPage.firstChild)
      
      container.appendChild(clonedPage)
      document.body.appendChild(container)

      // Wait for images and rendering
      await new Promise(resolve => setTimeout(resolve, 2000))

      const canvas = await html2canvas(clonedPage, {
        scale: 1,
        allowTaint: true,
        useCORS: true,
        backgroundColor: "#faf8f3",
        imageTimeout: 0,
        logging: false,
      })

      // Clean up
      document.body.removeChild(container)

      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = `${pageName}-${new Date().getTime()}.png`
      link.click()
    } catch (error) {
      console.error("Error generating PNG:", error)
      alert("Error generating PNG. Please try again.")
    } finally {
      setGenerating(false)
    }
  }, [])

  const handleDownloadPDF = useCallback(async () => {
    setGenerating(true)
    try {
      // Use browser print dialog in "Save as PDF" mode
      window.print()
    } finally {
      setGenerating(false)
    }
  }, [])

  return (
    <div className="no-print fixed top-4 right-4 z-50 flex gap-3">
      <button
        onClick={handleDownloadPNG}
        disabled={generating}
        className="bg-[#d4af37] text-[#0e7c6b] px-5 py-3 rounded-lg font-sans font-bold text-base shadow-lg hover:bg-[#c9a030] transition-colors cursor-pointer disabled:opacity-50"
      >
        {generating ? "Generating..." : "Download as PNG"}
      </button>
      <button
        onClick={handleDownloadPDF}
        disabled={generating}
        className="bg-[#0e7c6b] text-[#d4af37] px-5 py-3 rounded-lg font-sans font-bold text-base shadow-lg hover:bg-[#0a6558] transition-colors cursor-pointer disabled:opacity-50"
      >
        {generating ? "Generating..." : "Download as PDF"}
      </button>
      <button
        onClick={() => window.print()}
        className="bg-[#5a7a6e] text-[#d4af37] px-5 py-3 rounded-lg font-sans font-bold text-base shadow-lg hover:bg-[#476960] transition-colors cursor-pointer"
      >
        Print Menu
      </button>
    </div>
  )
}
