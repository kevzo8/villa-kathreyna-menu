import Image from "next/image"

interface PageBannerProps {
  imageSrc: string
  alt: string
}

export function PageBanner({ imageSrc, alt }: PageBannerProps) {
  return (
    <div className="relative w-full h-[140px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        width={794}
        height={140}
        className="object-cover w-full h-full"
      />
      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f3] via-transparent to-transparent" />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Logo overlay */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2">
        <Image
          src="/images/logo-transparent.png"
          alt="Villa Kathreyna"
          width={50}
          height={50}
          className="opacity-90 drop-shadow-lg"
        />
      </div>
    </div>
  )
}
