import Image from 'next/image'
import { MenuPageFooter } from './menu-page-footer'
import { MenuPageHeader } from './menu-page-header'
import {
  silverCateringMenuA,
  silverCateringMenuB,
  silverCateringMenuC,
  silverPricePerHead,
} from './page-catering-silver'
import {
  goldCateringMenuA,
  goldCateringMenuB,
  goldCateringMenuC,
  goldPricePerHead,
} from './page-catering-gold'
import {
  platinumCateringMenuA,
  platinumCateringMenuB,
  platinumCateringMenuC,
  platinumPricePerHead,
} from './page-catering-platinum'
import {
  diamondCateringMenuA,
  diamondCateringMenuB,
  diamondCateringMenuC,
  diamondPricePerHead,
} from './page-catering-diamond'

interface CateringPackageData {
  name: string
  pricePerHead: number
  menuA: string[]
  menuB: string[]
  menuC: string[]
}

function packageIcon(name: string) {
  if (name === 'Silver') return '✦'
  if (name === 'Gold') return '★'
  if (name === 'Platinum') return '♛'
  if (name === 'Diamond') return '◈'
  return '•'
}

function packageIconBackground(name: string) {
  if (name === 'Silver') return 'bg-[#b8bec9]'
  if (name === 'Gold') return 'bg-[#d4af37]'
  if (name === 'Platinum') return 'bg-[#9aa3ad]'
  if (name === 'Diamond') return 'bg-[#63c9f2]'
  return 'bg-[#5a7a6e]'
}

function CateringPackageBlock({ name, pricePerHead, menuA, menuB, menuC }: CateringPackageData) {
  const maxRows = Math.max(menuA.length, menuB.length, menuC.length)
  const rows = Array.from({ length: maxRows }, (_, index) => ({
    a: menuA[index] ?? '—',
    b: menuB[index] ?? '—',
    c: menuC[index] ?? '—',
  }))

  return (
    <div className="rounded-sm border border-[#d4af37]/45 bg-[#fffef9] p-2.5 flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-6 h-6 rounded-full ${packageIconBackground(name)} text-white text-[12px] leading-none flex items-center justify-center font-bold`}
            aria-hidden="true"
          >
            {packageIcon(name)}
          </span>
          <h2 className="font-serif font-bold text-[17px] leading-tight text-[#0e7c6b]">{name}</h2>
        </div>
        <div className="rounded-sm border border-[#d4af37]/50 bg-[#0e7c6b] px-2 py-1 text-right shrink-0">
          <p className="font-sans text-[8px] uppercase tracking-[0.12em] text-[#e8d5a3] opacity-95">Per Head</p>
          <p className="font-serif font-bold text-[20px] leading-none text-[#d4af37]">₱{pricePerHead}</p>
        </div>
      </div>

      <div className="mt-1 overflow-hidden rounded-sm border border-[#d4af37]/30">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-[#f5efde]">
              <th className="px-1 py-1 text-[11px] text-center font-bold text-[#0e7c6b] border-r border-b border-[#d4af37]/30">Menu A</th>
              <th className="px-1 py-1 text-[11px] text-center font-bold text-[#0e7c6b] border-r border-b border-[#d4af37]/30">Menu B</th>
              <th className="px-1 py-1 text-[11px] text-center font-bold text-[#0e7c6b] border-b border-[#d4af37]/30">Menu C</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${name}-${row.a}-${row.b}-${row.c}`}>
                <td className="px-1 py-[3px] text-[11px] leading-tight text-center text-[#2f4f45] border-r border-b border-[#d4af37]/20 break-words">
                  {row.a}
                </td>
                <td className="px-1 py-[3px] text-[11px] leading-tight text-center text-[#2f4f45] border-r border-b border-[#d4af37]/20 break-words">
                  {row.b}
                </td>
                <td className="px-1 py-[3px] text-[11px] leading-tight text-center text-[#2f4f45] border-b border-[#d4af37]/20 break-words">
                  {row.c}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PageCateringCombined({ pageNumber = 8 }: { pageNumber?: number }) {
  return (
    <div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col">
      <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

      <MenuPageHeader />

      <div className="px-6 pt-1 pb-11 flex-1 flex flex-col">
        <h1 className="font-display font-bold text-[34px] text-[#0e7c6b] leading-none text-center">Catering Packages</h1>
        <p className="font-sans text-[11px] text-[#5a7a6e] text-center uppercase tracking-[0.16em] mt-1 mb-2.5">
          Per Head Pricing & Menu Options
        </p>

        <div className="flex-1 flex flex-col gap-2.5">
          <div className="grid grid-cols-2 gap-2.5 items-start">
            <CateringPackageBlock
              name="Silver"
              pricePerHead={silverPricePerHead}
              menuA={silverCateringMenuA}
              menuB={silverCateringMenuB}
              menuC={silverCateringMenuC}
            />
            <CateringPackageBlock
              name="Gold"
              pricePerHead={goldPricePerHead}
              menuA={goldCateringMenuA}
              menuB={goldCateringMenuB}
              menuC={goldCateringMenuC}
            />
          </div>

          <div className="relative h-[120px] overflow-hidden rounded-sm border border-[#d4af37]/40 menu-banner">
            <Image
              src="/images/banners/catering.jpg"
              alt="Catering dishes banner"
              fill
              className="object-contain menu-banner-image"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5 items-start">
            <CateringPackageBlock
              name="Platinum"
              pricePerHead={platinumPricePerHead}
              menuA={platinumCateringMenuA}
              menuB={platinumCateringMenuB}
              menuC={platinumCateringMenuC}
            />
            <CateringPackageBlock
              name="Diamond"
              pricePerHead={diamondPricePerHead}
              menuA={diamondCateringMenuA}
              menuB={diamondCateringMenuB}
              menuC={diamondCateringMenuC}
            />
          </div>
        </div>
      </div>

      <MenuPageFooter />
    </div>
  )
}
