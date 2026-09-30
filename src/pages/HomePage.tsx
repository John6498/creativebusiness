import Services from '../components/services/Services'
import ArrowIcon from '../components/icons/ArrowIcon'
import heroImage from '../assets/service.png'

function HomePage({ query }: { query: string }) {
  return (
    <main className="flex min-h-0 flex-1 flex-col pb-[clamp(24px,6vh,52px)] max-[700px]:flex-none max-[700px]:pb-0" id="home">
      <section className="hero-wave relative mx-auto grid min-h-[360px] w-[min(1280px,calc(100%-72px))] flex-1 grid-cols-[minmax(390px,.84fr)_minmax(0,1.16fr)] items-center gap-[clamp(34px,6vw,82px)] max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] max-[980px]:gap-7 max-[700px]:my-[22px] max-[700px]:mb-[27px] max-[700px]:flex max-[700px]:w-[calc(100%-36px)] max-[700px]:flex-none max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-[25px]" aria-labelledby="hero-title">
        <div className="relative z-[1]">
          <p className="mb-[13px] text-[11px] leading-[1.4] font-extrabold tracking-[2px] text-[#6484be] uppercase">Innovative software solutions</p>
          <h1 className="m-0 max-w-[570px] text-[clamp(39px,4vw,58px)] leading-[1.06] font-extrabold text-ink max-[980px]:text-[clamp(36px,5vw,48px)] max-[700px]:text-[clamp(38px,10vw,51px)]" id="hero-title">We Build Digital<br className="max-[700px]:hidden" /> Solutions for a<br className="max-[700px]:hidden" /> <span className="bg-[linear-gradient(95deg,#04a9ed_0%,#076dff_65%,#875bff_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">Smarter Tomorrow</span></h1>
          <p className="mt-[17px] mb-5 max-w-[480px] text-sm leading-[1.55] text-copy">CBT is a technology company focused on delivering high-quality software solutions, web and mobile applications that help businesses grow, innovate and stay ahead.</p>
          <div className="flex flex-wrap gap-3 m-[1em_0]">
            <a className="inline-flex min-h-[47px] items-center justify-center gap-4 rounded-[18px] border border-transparent bg-[linear-gradient(105deg,#0765f7_0%,#00c6dc_35%,#765bff_65%,#0765f7_100%)] [background-size:250%_250%] animate-gradient-flow motion-reduce:animate-none px-[22px] text-[13px] font-bold text-white no-underline shadow-[0_7px_17px_rgba(0,121,244,.15)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,121,244,.24)]" href="#portfolio">View Our Work <ArrowIcon /></a>
            <a className="inline-flex min-h-[47px] items-center justify-center gap-4 rounded-[18px] border border-[#5aa7ff] bg-white/70 px-[22px] text-[13px] font-bold text-ink no-underline transition hover:-translate-y-0.5 hover:bg-white" href="mailto:hello@cbt.tech">Start a Project <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-image relative z-[1] aspect-[2.375] h-auto min-w-0 overflow-hidden rounded-[18px] shadow-[0_20px_50px_rgba(38,103,174,.15)] [animation:rise-in_.65s_.12s_both] max-[700px]:rounded-[15px]" id="portfolio">
          <img className="block h-full w-full object-cover object-center" src={heroImage} alt="Laptop displaying code with web, cloud, analytics, and mobile icons in a bright workspace" />
          <div className="absolute bottom-4 left-4 z-[1] flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-2 text-[11px] font-semibold text-[#17376e] shadow-sm backdrop-blur-sm max-[700px]:bottom-3 max-[700px]:left-3 max-[700px]:text-[10px]"><span className="caption-dot h-[7px] w-[7px] rounded-full bg-[#09bfc9]" /> Thoughtful technology. Real-world impact.</div>
        </div>
      </section>
      <Services query={query} />
    </main>
  )
}

export default HomePage