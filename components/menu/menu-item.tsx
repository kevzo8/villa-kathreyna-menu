import Image from "next/image"
import type { MenuItem } from "@/lib/menu-data"

interface MenuItemCardProps {
  item: MenuItem
  layout?: "horizontal" | "vertical"
  imageSize?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export function MenuItemCard({ item, layout = "horizontal", imageSize = "xl" }: MenuItemCardProps) {
  const sizeMap = {
    sm: { w: 80, h: 80, cls: "w-20 h-20" },
    md: { w: 100, h: 100, cls: "w-[100px] h-[100px]" },
    lg: { w: 120, h: 120, cls: "w-[120px] h-[120px]" },
    xl: { w: 150, h: 150, cls: "w-[150px] h-[150px]" },
    "2xl": { w: 170, h: 170, cls: "w-[170px] h-[170px]" },
  }

  const size = sizeMap[imageSize]

  if (layout === "vertical") {
    return (
      <div className="flex flex-col items-center text-center">
        {item.image && (
          <div className={`${size.cls} rounded-full overflow-hidden mb-2 border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0`}>
            <Image
              src={item.image}
              alt={item.name}
              width={size.w}
              height={size.h}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <h3 className="font-serif text-[15px] font-bold text-[#0e7c6b] leading-tight">
          {item.name}
        </h3>
        <span className="font-sans text-[14px] font-bold text-[#d4af37]">
          {"P"}{item.price}
        </span>
        {item.description && (
          <p className="font-sans text-[11px] text-[#5a7a6e] mt-0.5 leading-snug">
            {item.description}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3">
      {item.image && (
        <div className={`${size.cls} rounded-full overflow-hidden border-2 border-[#d4af37] border-opacity-50 shadow-md flex-shrink-0`}>
          <Image
            src={item.image}
            alt={item.name}
            width={size.w}
            height={size.h}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="flex-1 min-w-0 pt-2">
        <div className="flex items-baseline justify-between gap-1">
          <h3 className="font-serif text-[15px] font-bold text-[#0e7c6b] leading-tight">
            {item.name}
          </h3>
          <div className="flex-1 border-b border-dotted border-[#d4af37] border-opacity-40 mx-1 mb-1 min-w-4" />
          <span className="font-sans text-[14px] font-bold text-[#d4af37] whitespace-nowrap">
            {"P"}{item.price}
          </span>
        </div>
        {item.description && (
          <p className="font-sans text-[11px] text-[#5a7a6e] leading-snug mt-0.5">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
}
