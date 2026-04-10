import { MenuPageFooter } from "./menu-page-footer"
import { MenuPageHeader } from "./menu-page-header"
import { SectionHeader } from "./section-header"

interface CateringPackageCardProps {
	packageName: string
	menuA: string[]
	menuB: string[]
	menuC: string[]
	pricePerHead: number
	pageNumber?: number
	compact?: boolean
	className?: string
}

function CateringMenuColumn({ title, items, compact = false }: { title: string; items: string[]; compact?: boolean }) {
	return (
		<div className={`rounded-sm border border-[#d4af37]/30 bg-[#fffdf8] ${compact ? "p-2.5" : "p-3"}`}>
			<h3 className={`font-serif text-[#0e7c6b] text-center tracking-wide ${compact ? "text-lg" : "text-xl"}`}>{title}</h3>
			<div className={`bg-[#d4af37] mx-auto opacity-60 ${compact ? "w-7 h-px my-1.5" : "w-10 h-px my-2"}`} />
			<ul className={compact ? "space-y-0.5" : "space-y-1"}>
				{items.map((item) => (
					<li key={`${title}-${item}`} className={`font-sans text-[#2f4f45] text-center ${compact ? "text-[12px] leading-tight" : "text-[13px] leading-snug"}`}>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export function CateringPackageCard({
	packageName,
	menuA,
	menuB,
	menuC,
	pricePerHead,
	pageNumber = 1,
	compact = false,
	className,
}: CateringPackageCardProps) {
	const content = (
		<>
			<div className={`flex items-center justify-between ${compact ? "mb-2" : "mb-4 mt-1"}`}>
				<h2 className={`font-display text-[#0e7c6b] ${compact ? "text-[28px]" : "text-3xl"}`}>{packageName}</h2>
				<div className={`rounded-sm border border-[#d4af37]/40 bg-[#0e7c6b] text-center ${compact ? "px-4 py-1.5" : "px-6 py-2"}`}>
					<p className={`font-sans uppercase text-[#e8d5a3] opacity-90 ${compact ? "text-[12px] tracking-[0.12em]" : "text-sm tracking-[0.2em]"}`}>Per Head</p>
					<p className={`font-serif text-[#d4af37] leading-none mt-1 ${compact ? "text-[26px]" : "text-3xl"}`}>₱{pricePerHead}</p>
				</div>
			</div>

			<p className={`font-sans text-[#5a7a6e] text-center uppercase ${compact ? "text-[12px] tracking-[0.1em] mb-2" : "text-[12px] tracking-[0.15em] mb-3"}`}>
				Choose from Menu A, Menu B, or Menu C
			</p>

			<div className={`grid grid-cols-3 ${compact ? "gap-2.5" : "gap-3"}`}>
				<CateringMenuColumn title="Menu A" items={menuA} compact={compact} />
				<CateringMenuColumn title="Menu B" items={menuB} compact={compact} />
				<CateringMenuColumn title="Menu C" items={menuC} compact={compact} />
			</div>
		</>
	)

	if (compact) {
		return <div className={`rounded-sm border border-[#d4af37]/40 bg-[#fffef9] p-3 h-full ${className ?? ""}`}>{content}</div>
	}

	return (
		<div className="menu-page w-[210mm] h-[297mm] mx-auto relative bg-[#faf8f3] overflow-hidden flex flex-col" data-page-name={`catering-${packageName.toLowerCase()}`}>
			<div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-[#d4af37] opacity-30 z-10" />
			<div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-[#d4af37] opacity-30 z-10" />
			<div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-[#d4af37] opacity-30" />
			<div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-[#d4af37] opacity-30" />

			<MenuPageHeader />

			<div className="px-7 pt-2 pb-12 flex-1 flex flex-col">
				<SectionHeader title={`${packageName} Catering Package`} />
				{content}
			</div>

			<MenuPageFooter pageNumber={pageNumber} />
		</div>
	)
}
