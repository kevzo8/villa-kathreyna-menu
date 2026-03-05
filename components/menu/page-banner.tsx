/* eslint-disable @next/next/no-img-element */
interface PageBannerProps {
  imageSrc: string
  alt: string
}

export function PageBanner({ imageSrc, alt }: PageBannerProps) {
  return (
    <div className="menu-banner relative w-full h-[140px] overflow-hidden mx-auto flex-shrink-0">
      <img
        src={imageSrc}
        alt={alt}
        className="menu-banner-image object-cover w-full h-full"
      />
      {/* Subtle gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#faf8f3] to-transparent" />
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4af37] opacity-60" />
      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37] opacity-40" />
    </div>
  )
}
