type ServiceItem = {
  title: string
  description: string
  accent: 'blue' | 'violet' | 'cyan'
  icon: 'code' | 'mobile' | 'cloud' | 'gear' | 'chart' | 'shield'
}

const serviceItems: ServiceItem[] = [
  { title: 'Web Development', description: 'Modern, responsive and scalable websites that turn visitors into loyal customers.', accent: 'blue', icon: 'code' },
  { title: 'Mobile Applications', description: 'Powerful and user-friendly mobile apps for iOS and Android platforms.', accent: 'violet', icon: 'mobile' },
  { title: 'Cloud & DevOps', description: 'Reliable infrastructure, deployment and automation for high performance.', accent: 'cyan', icon: 'cloud' },
  { title: 'Custom Software Development', description: 'Tailored solutions that fit your business processes and unique goals.', accent: 'violet', icon: 'gear' },
  { title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces that deliver great user experiences.', accent: 'cyan', icon: 'chart' },
  { title: 'IT Consulting & Support', description: 'Strategic guidance and ongoing support to keep your business ahead.', accent: 'violet', icon: 'shield' },
]

function ServiceIcon({ name }: { name: ServiceItem['icon'] }) {
  const common = 'h-8 w-8 fill-none stroke-white [stroke-width:2.2] [stroke-linecap:round] [stroke-linejoin:round]'

  switch (name) {
    case 'mobile':
      return <svg className={common} viewBox="0 0 32 32" aria-hidden="true"><rect x="9" y="3.5" width="14" height="25" rx="2.5" /><path d="M13 7h6m-4 17.5h2" /></svg>
    case 'cloud':
      return <svg className={common} viewBox="0 0 32 32" aria-hidden="true"><path d="M9 24.5h14a5 5 0 0 0 .6-10 7.5 7.5 0 0 0-14.4-1.4A5.8 5.8 0 0 0 9 24.5Z" /></svg>
    case 'gear':
      return <svg className={common} viewBox="0 0 32 32" aria-hidden="true"><path d="m13 4 1-2h4l1 2 3 1 2-1 3 3-1 2 1 3 2 1v4l-2 1-1 3 1 2-3 3-2-1-3 1-1 2h-4l-1-2-3-1-2 1-3-3 1-2-1-3-2-1v-4l2-1 1-3-1-2 3-3 2 1 3-1Z" /><circle cx="16" cy="15" r="4" /></svg>
    case 'chart':
      return <svg className={common} viewBox="0 0 32 32" aria-hidden="true"><path d="M5 26V17h6v9m5 0V9h6v17m5 0V4h5v22" /></svg>
    case 'shield':
      return <svg className={common} viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 27 7v8c0 7-4.5 11.5-11 14-6.5-2.5-11-7-11-14V7l11-4Z" /><path d="m11 16 3.5 3.5L21 13" /></svg>
    default:
      return <svg className={common} viewBox="0 0 32 32" aria-hidden="true"><path d="m11.5 9-7 7 7 7m9-14 7 7-7 7m-2.5-17-5 20" /></svg>
  }
}

function ArrowIcon() {
  return <svg className="h-[17px] w-[17px] fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10h12m-5-5 5 5-5 5" /></svg>
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className={`service-card relative isolate flex min-h-[126px] items-start gap-4 overflow-hidden rounded-xl border border-[rgba(215,232,249,.65)] bg-white/85 p-4 shadow-[0_9px_24px_rgba(41,102,166,.09)] [animation:rise-in_.5s_both] max-[1100px]:gap-3 max-[1100px]:p-3 service-${item.accent}`}>
      <div className="service-icon relative z-[1] grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[17px] max-[1100px]:h-11 max-[1100px]:w-11 max-[1100px]:rounded-[14px]"><ServiceIcon name={item.icon} /></div>
      <div className="relative z-[1] min-w-0 pt-1">
        <h2 className="mb-1 text-[16px] leading-tight font-extrabold text-[#112958] max-[1100px]:whitespace-nowrap max-[1100px]:text-[13px]">{item.title}</h2>
        <p className="mb-2 max-w-[260px] text-[12px] leading-[1.5] text-[#536b96] max-[1100px]:line-clamp-2 max-[1100px]:text-[11px]">{item.description}</p>
        <a className="inline-flex items-center gap-2 text-[11px] font-bold text-[#006cff] no-underline hover:text-[#5a53fa]" href={`mailto:hello@cbt.tech?subject=${encodeURIComponent(`Service inquiry: ${item.title}`)}`}>Learn More <ArrowIcon /></a>
      </div>
    </article>
  )
}

function ServicesPage({ query }: { query: string }) {
  const filtered = serviceItems.filter((service) => `${service.title} ${service.description}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <main className="mx-auto flex min-h-0 w-[min(1280px,calc(100%-72px))] flex-1 flex-col pb-5 max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:flex-none max-[700px]:w-[calc(100%-36px)] max-[700px]:pb-8">
      <section className="hero-wave relative grid min-h-[250px] flex-1 grid-cols-[.9fr_1.1fr] items-center gap-10 max-[980px]:min-h-[230px] max-[980px]:gap-6 max-[700px]:my-5 max-[700px]:flex-none max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-5" aria-labelledby="services-title">
        <div className="relative z-[1] py-5 max-[700px]:py-0">
          <p className="mb-2 text-[11px] font-extrabold tracking-[2px] text-[#4387e8] uppercase">Our Services</p>
          <h1 className="mb-3 text-[clamp(34px,4vw,52px)] leading-[1.04] font-extrabold tracking-[-1px] text-ink max-[700px]:text-[38px]" id="services-title">Technology Solutions<br className="max-[700px]:hidden" /> Built for Your Success</h1>
          <p className="mb-4 max-w-[440px] text-[14px] leading-[1.5] text-copy">We provide end-to-end software development services that help businesses innovate, optimize and grow in the digital world.</p>
          <a className="inline-flex min-h-[43px] items-center gap-3 rounded-[14px] bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-5 text-[12px] font-bold text-white no-underline shadow-[0_7px_17px_rgba(0,121,244,.16)] transition hover:-translate-y-0.5" href="mailto:hello@cbt.tech?subject=Free%20consultation">Get a Free Consultation <ArrowIcon /></a>
        </div>
        <div className="hero-image relative z-[1] h-[260px] overflow-hidden rounded-2xl shadow-[0_16px_44px_rgba(38,103,174,.13)] max-[980px]:h-[225px] max-[700px]:h-auto max-[700px]:aspect-[1.75]">
          <img className="block h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85" alt="Laptop displaying code in a bright development workspace" />
          <div className="absolute inset-0 grid grid-cols-2 items-start justify-items-end gap-3 bg-gradient-to-r from-transparent via-transparent to-[#e9f8ff]/25 p-4 max-[700px]:p-2">
            {(['code', 'cloud', 'chart', 'mobile'] as const).map((icon, index) => <div className={`service-icon grid h-12 w-12 place-items-center rounded-[14px] shadow-lg ${index % 2 ? 'mt-7' : ''}`} key={icon}><ServiceIcon name={icon} /></div>)}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3.5 max-[980px]:grid-cols-2 max-[700px]:grid-cols-1" aria-label="All services">
        {filtered.length ? filtered.map((item) => <ServiceCard item={item} key={item.title} />) : <p className="col-span-full py-8 text-center text-copy">No services match “{query}”. Try web, mobile, cloud, design, software, or support.</p>}
      </section>

      <section className="relative mt-4 flex min-h-[94px] items-center overflow-hidden rounded-xl bg-[linear-gradient(105deg,#102c59_0%,#1554a8_66%,#04bddd_100%)] px-8 text-white shadow-[0_12px_30px_rgba(22,83,153,.18)] max-[700px]:flex-wrap max-[700px]:gap-3 max-[700px]:px-5 max-[700px]:py-4">
        <div className="mr-7 bg-[linear-gradient(110deg,#00d7e7_8%,#0878fa_50%,#fff_92%)] bg-clip-text text-[38px] leading-none font-black text-transparent [-webkit-text-fill-color:transparent] max-[700px]:mr-2">CBT</div>
        <div className="mr-7 h-[42px] w-px bg-cyan-300/80 max-[700px]:mr-0" />
        <div className="relative z-[1] mr-auto">
          <h2 className="text-[17px] font-extrabold">Let’s Build Something Great</h2>
          <p className="text-[12px] text-blue-100">Your vision. Our technology. A stronger tomorrow.</p>
        </div>
        <a className="relative z-[1] inline-flex min-h-[42px] items-center gap-3 rounded-full bg-white px-5 text-[11px] font-bold text-[#0755d7] no-underline transition hover:-translate-y-0.5" href="mailto:hello@cbt.tech?subject=Start%20a%20project">Start a Project <ArrowIcon /></a>
        <div className="pointer-events-none absolute -right-3 -bottom-24 h-44 w-80 -skew-x-12 rounded-full border-[18px] border-cyan-300/40" />
      </section>
    </main>
  )
}

export default ServicesPage