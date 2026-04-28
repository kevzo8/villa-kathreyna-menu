'use client'

import { useEffect, useRef, useState } from 'react'

// A4 dimensions at 96 dpi
const A4_WIDTH_PX = 794   // 210mm
const A4_HEIGHT_PX = 1123 // 297mm

export function MenuPageScaler({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = outerRef.current
    if (!el) return

    const update = () => {
      const w = el.getBoundingClientRect().width
      setScale(Math.min(1, w / A4_WIDTH_PX))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const isScaled = scale < 1

  return (
    <div
      ref={outerRef}
      className="menu-scaler-outer w-full"
      style={isScaled ? { height: A4_HEIGHT_PX * scale, overflow: 'hidden' } : undefined}
    >
      <div
        style={
          isScaled
            ? {
                width: A4_WIDTH_PX,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  )
}
