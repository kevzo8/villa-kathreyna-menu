import {
  FacebookPromoCateringPost,
  FacebookPromoPanTraysPost,
} from "../../../components/menu/facebook-promo-posts"
import { PrintButton } from "../../../components/menu/print-button"
import { SocialDownloadButton } from "../../../components/menu/social-download-button"

export default function FacebookPromosPage() {
  return (
    <main className="min-h-screen bg-[#0e7c6b] py-8">
      <PrintButton />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4">
        <h1 className="text-center font-display text-3xl font-bold text-[#d4af37]">Facebook Promotional Graphics</h1>

        <section className="rounded-lg border border-[#d4af37]/40 bg-[#0b6b5d] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="font-sans text-sm uppercase tracking-[0.08em] text-[#d4af37]">Catering Post • 1080 x 1080</p>
            <SocialDownloadButton targetId="fb-promo-catering" label="Download Catering PNG" />
          </div>
          <div className="overflow-auto rounded-sm border border-[#d4af37]/30 bg-[#083f37] p-3">
            <FacebookPromoCateringPost />
          </div>
        </section>

        <section className="rounded-lg border border-[#d4af37]/40 bg-[#0b6b5d] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="font-sans text-sm uppercase tracking-[0.08em] text-[#d4af37]">Pan Trays Post • 1080 x 1080</p>
            <SocialDownloadButton targetId="fb-promo-pan-trays" label="Download Pan Trays PNG" />
          </div>
          <div className="overflow-auto rounded-sm border border-[#d4af37]/30 bg-[#083f37] p-3">
            <FacebookPromoPanTraysPost />
          </div>
        </section>
      </div>
    </main>
  )
}