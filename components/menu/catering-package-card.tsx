import Image from "next/image"

interface CateringPackageCardProps {
  packageName: string
  menuA: string[]
  menuB: string[]
  menuC: string[]
}

function MenuColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="text-center">
      <h3 className="font-display text-5xl text-[#2f2f2f] italic leading-none">{title}</h3>
      <ul className="mt-2 space-y-0.5 font-serif text-[12px] text-[#2f2f2f]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function CateringPackageCard({ packageName, menuA, menuB, menuC }: CateringPackageCardProps) {
  return (
    <main className="min-h-screen bg-[#ece9e3] py-8 px-4">
      <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#ece9e3] border border-[#6a6a6a] p-7 overflow-hidden">
        <div className="absolute inset-3 border border-[#9a9a9a] pointer-events-none" />

        <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-[#0e7c6b] opacity-50" />
        <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-[#0e7c6b] opacity-50" />
        <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-[#0e7c6b] opacity-50" />
        <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-[#0e7c6b] opacity-50" />

        <div className="relative z-10 h-full flex flex-col">
          <header className="text-center mt-3">
            <h1 className="font-display text-[48px] leading-none tracking-wider text-[#3e3e3e] uppercase">{packageName} Package</h1>
            <p className="font-serif text-[30px] text-[#4b4b4b] -mt-1">Menu Options</p>
          </header>

          <section className="mt-6 grid grid-cols-2 gap-12 px-10">
            <MenuColumn title="Menu A" items={menuA} />
            <MenuColumn title="Menu B" items={menuB} />
          </section>

          <section className="mt-8 px-20">
            <MenuColumn title="Menu C" items={menuC} />
          </section>

          <div className="mt-auto mb-2 flex flex-col items-center">
            <Image
              src="/images/logo-transparent.png"
              alt="Villa Kathreyna"
              width={76}
              height={76}
              className="opacity-80"
            />
            <p className="font-display text-[20px] tracking-wide text-[#3e3e3e] -mt-1">Villa Kathreyna</p>
          </div>
        </div>
      </div>
    </main>
  )
}
