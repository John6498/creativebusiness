import ArrowIcon from '../components/icons/ArrowIcon'
import LineIcon from '../components/icons/LineIcon'
import { aboutHero, aboutMissionVision, aboutStats, aboutStory } from '../data/siteData'

function AboutPage() {
  return (
    <main className="flex-1 about-page mx-auto flex min-h-[calc(100svh-234px)] w-[min(1280px,calc(100%-72px))] flex-col gap-3 pb-3 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:min-h-0 max-[700px]:w-[calc(100%-36px)] max-[700px]:gap-5 max-[700px]:pb-5">
      <section className="hero-wave relative grid min-h-[250px] flex-1 grid-cols-[.9fr_1.1fr] items-center gap-8 max-[980px]:min-h-[220px] max-[980px]:gap-5 max-[700px]:my-1 max-[700px]:flex-none max-[700px]:grid-cols-1 max-[700px]:gap-5" aria-labelledby="about-title">
        <div className="relative z-[1] py-1 max-[700px]:py-0">
          <p className="mb-2 text-[12px] font-extrabold tracking-[2px] text-[#4387e8] uppercase max-[700px]:text-[11px]">{aboutHero.eyebrow}</p>
          <h1 className="mb-2 text-[clamp(36px,3.7vw,46px)] leading-[1.04] font-extrabold text-ink max-[980px]:text-[36px] max-[700px]:text-[38px]" id="about-title">
            {aboutHero.title}<br />{aboutHero.titleSecondLine} <span className="bg-[linear-gradient(95deg,#04a9ed,#076dff_65%,#875bff)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">{aboutHero.titleAccent}</span>
          </h1>
          <p className="mb-3 max-w-[440px] text-[14px] leading-[1.45] text-copy max-[980px]:text-[13px] max-[700px]:text-[14px]">{aboutHero.description}</p>
          <a className="inline-flex min-h-[40px] items-center gap-3 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-4 text-[12px] font-bold text-white no-underline shadow-[0_7px_17px_rgba(0,121,244,.16)] transition hover:-translate-y-0.5" href={aboutHero.actionHref}>{aboutHero.actionLabel} <ArrowIcon /></a>
        </div>
        <div className="hero-image relative z-[1] h-[238px] overflow-hidden rounded-xl shadow-[0_16px_44px_rgba(38,103,174,.13)] max-[980px]:h-[210px] max-[700px]:h-auto max-[700px]:aspect-[1.6]">
          <img className="h-full w-full object-cover object-center" src={aboutHero.image} alt={aboutHero.imageAlt} />
          <div className="absolute right-5 bottom-5 rotate-[-7deg] text-right text-[20px] leading-[1.02] font-extrabold text-cyan-300 drop-shadow-[0_2px_5px_rgba(0,29,80,.8)] max-[700px]:text-[16px]">{aboutHero.imageMessage.map((line) => <span className="block" key={line}>{line}</span>)}</div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-3 max-[500px]:grid-cols-2" aria-label="Company metrics">
        {aboutStats.map((stat, index) => (
          <article className="flex min-h-[88px] items-center gap-3 rounded-xl border border-[#e7f0fb] bg-white/85 px-4 py-3 shadow-[0_8px_24px_rgba(41,102,166,.07)] max-[980px]:gap-2 max-[980px]:px-2.5 max-[500px]:min-h-[76px]" key={stat.label}>
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${index % 3 === 1 ? 'bg-[linear-gradient(145deg,#9567ff,#4233ed)]' : index % 3 === 2 ? 'bg-[linear-gradient(145deg,#04d5de,#00aebf)]' : 'bg-[linear-gradient(145deg,#51a1ff,#086bff)]'}`}><LineIcon name={stat.icon} /></span>
            <span className="min-w-0"><strong className="block text-[22px] leading-none font-extrabold text-[#112958] max-[700px]:text-[19px]">{stat.count}</strong><span className="mt-1 block text-[12px] font-semibold text-[#536b96]">{stat.label}</span><span className="mt-1 block text-[11px] leading-tight text-[#7186a8] max-[700px]:hidden">{stat.detail}</span></span>
          </article>
        ))}
      </section>

      <section className="grid min-h-[190px] grid-cols-[1.05fr_1fr_.95fr] items-stretch gap-4 rounded-xl bg-white/65 p-2 max-[980px]:gap-3 max-[700px]:grid-cols-1 max-[700px]:gap-4" aria-labelledby="story-title">
        <div className="overflow-hidden rounded-lg max-[700px]:h-[180px]">
          <img className="h-[190px] min-h-0 w-full object-cover object-center max-[700px]:h-full" src={aboutStory.image} alt={aboutStory.imageAlt} />
        </div>
        <div className="flex flex-col justify-center px-2 py-2">
          <p className="mb-1 text-[12px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">{aboutStory.eyebrow}</p>
          <h2 className="mb-1.5 text-[20px] leading-[1.06] font-extrabold text-ink max-[980px]:text-[18px]" id="story-title">{aboutStory.title[0]}<br />{aboutStory.title[1]}</h2>
          <p className="text-[13px] leading-[1.45] text-copy max-[700px]:text-[12px]">{aboutStory.description}</p>
          <a className="mt-1.5 inline-flex w-fit items-center gap-2 rounded-full border border-[#64a8ff] px-3 py-1 text-[12px] font-bold text-brand no-underline hover:bg-white" href={aboutStory.learnMoreHref}>{aboutStory.learnMoreLabel} <ArrowIcon /></a>
        </div>
        <div className="flex flex-col justify-center divide-y divide-[#e7eff8] pl-4 max-[700px]:pl-0">
          {aboutMissionVision.map((item) => (
            <article className="flex items-center gap-3 py-3 first:pt-1 last:pb-1" key={item.title}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#14c7ed,#086bff)] text-white"><LineIcon name={item.icon} /></span>
              <div><h3 className="text-[13px] font-extrabold text-ink">{item.title}</h3><p className="mt-1 text-[12px] leading-[1.35] text-copy max-[700px]:text-[11px]">{item.description}</p></div>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}

export default AboutPage