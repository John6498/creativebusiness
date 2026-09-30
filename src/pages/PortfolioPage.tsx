import ProjectCarousel from '../components/portfolio/ProjectCarousel'
import ReviewCarousel from '../components/portfolio/ReviewCarousel.tsx'
import ArrowIcon from '../components/icons/ArrowIcon'
import { portfolioImpact } from '../data/siteData'

function PortfolioPage({ query }: { query: string }) {
  return (
    <main className="flex-1 w-full pb-6 max-[700px]:pb-5 min-[701px]:grid min-[701px]:h-[calc(100svh-234px)] min-[701px]:min-h-0 min-[701px]:grid-rows-[minmax(0,1fr)_auto_auto] min-[701px]:gap-2 min-[701px]:overflow-hidden min-[701px]:pb-2">
      <ProjectCarousel query={query} />

      <section className="mx-auto mt-4 grid w-[min(1280px,calc(100%-72px))] min-h-[72px] grid-cols-[1.1fr_repeat(4,1fr)] items-center rounded-xl bg-[linear-gradient(105deg,#102c59_0%,#1554a8_66%,#225fff_86%,#04bddd_100%)] px-5 py-2 text-white shadow-[0_10px_24px_rgba(22,83,153,.16)] max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)] max-[700px]:grid-cols-2 max-[700px]:gap-y-3 max-[700px]:py-4 min-[701px]:mt-0">
        <h2 className="pr-3 text-[16px] leading-tight font-extrabold max-[700px]:text-[14px]">Our Impact<br />in Numbers</h2>
        {portfolioImpact.map((stat) => <div className="border-l border-white/30 px-3 text-center" key={stat.label}><span className="mx-auto mb-1 grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[14px]" aria-hidden="true">{stat.icon}</span><strong className="block text-[18px] leading-none font-extrabold">{stat.value}</strong><span className="text-[11px] text-blue-100">{stat.label}</span></div>)}
      </section>

      <section className="mx-auto mt-3 grid w-[min(1280px,calc(100%-72px))] grid-cols-[1.2fr_.8fr] gap-3 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)] max-[700px]:grid-cols-1 min-[701px]:mt-0">
        <ReviewCarousel />
        <div className="flex items-center gap-3 rounded-xl bg-[#eaf6ff] px-6 py-6">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white text-[20px] text-blue-500">✧</span>
          <div className="mr-auto"><h2 className="text-[1em] font-extrabold text-ink">Have a Project in Mind?</h2><p className="text-[14px] text-copy p-1">Let’s turn your idea into a powerful digital solution.</p><a className="mt-1 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-6 py-2 text-[13px] font-bold text-white no-underline" href="/contact">Get in Touch <ArrowIcon /></a></div>
        </div>
      </section>

    </main>
  )
}

export default PortfolioPage