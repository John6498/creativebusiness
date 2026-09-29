import { useState } from 'react'

type ProjectCategory = 'Web Development' | 'Mobile Applications' | 'Cloud & DevOps' | 'UI/UX Design' | 'Custom Software'

type Project = {
  name: string
  category: ProjectCategory
  description: string
  image: string
}

const categories = ['All Projects', 'Web Development', 'Mobile Applications', 'Cloud & DevOps', 'UI/UX Design', 'Custom Software'] as const

const projects: Project[] = [
  { name: 'TravelVista', category: 'Web Development', description: 'A modern travel booking platform with real-time availability, secure payments, and personalized recommendations.', image: 'photo-1464822759023-fed622ff2c3b' },
  { name: 'FitTrack', category: 'Mobile Applications', description: 'A fitness and wellness app with personalized workouts, nutrition plans, and progress tracking.', image: 'photo-1512941937669-90a1b58e7e9c' },
  { name: 'SkyManage', category: 'Cloud & DevOps', description: 'A cloud-based infrastructure management platform with automated deployment and monitoring.', image: 'photo-1558494949-ef010cbdcc31' },
  { name: 'ShopEase', category: 'Web Development', description: 'A scalable e-commerce solution with seamless checkout and inventory management.', image: 'photo-1556742049-0cfed4f6a45d' },
  { name: 'HealthPlus', category: 'UI/UX Design', description: 'A healthcare dashboard with intuitive UI for patient and clinic management.', image: 'photo-1460925895917-afdab827c52f' },
  { name: 'Nova Creative', category: 'Web Development', description: 'A digital agency website with engaging visuals, portfolio showcases, and lead generation tools.', image: 'photo-1467232004584-a241de8bcf5d' },
  { name: 'LinguaLearn', category: 'Mobile Applications', description: 'A language learning app with interactive lessons, AI-powered feedback, and progress tracking.', image: 'photo-1516321318423-f06f85e504b3' },
  { name: 'SafeLogix', category: 'Custom Software', description: 'A logistics management system with real-time tracking, route optimization, and delivery analytics.', image: 'photo-1586528116311-ad8dd3c8310d' },
  { name: 'Finora', category: 'Cloud & DevOps', description: 'A secure digital banking platform with transaction management and financial insights.', image: 'photo-1551288049-bebda4e38f71' },
]

const categoryStyles: Record<ProjectCategory, string> = {
  'Web Development': 'bg-[#ddf5ff] text-[#087bb5]',
  'Mobile Applications': 'bg-[#ece6ff] text-[#6341d9]',
  'Cloud & DevOps': 'bg-[#dcfbfa] text-[#078a92]',
  'UI/UX Design': 'bg-[#eee9ff] text-[#6247c5]',
  'Custom Software': 'bg-[#e2efff] text-[#185db6]',
}

function ArrowIcon({ external = false }: { external?: boolean }) {
  return external ? (
    <svg className="h-3.5 w-3.5 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 16 16" aria-hidden="true"><path d="M9 3h4v4m0-4L7 9"/><path d="M11 9v4H3V5h4"/></svg>
  ) : (
    <svg className="h-4 w-4 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10h12m-5-5 5 5-5 5" /></svg>
  )
}

function PortfolioPage({ query }: { query: string }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All Projects')
  const normalizedQuery = query.trim().toLowerCase()
  const visibleProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory
    const matchesQuery = !normalizedQuery || `${project.name} ${project.category} ${project.description}`.toLowerCase().includes(normalizedQuery)
    return matchesCategory && matchesQuery
  })

  return (
    <main className="mx-auto w-[min(1280px,calc(100%-72px))] pb-6 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)] max-[700px]:pb-5">
      <section className="hero-wave relative grid min-h-[246px] grid-cols-[.86fr_1.14fr] items-center gap-8 max-[980px]:min-h-[225px] max-[980px]:gap-5 max-[700px]:my-5 max-[700px]:grid-cols-1 max-[700px]:gap-5" aria-labelledby="portfolio-title">
        <div className="relative z-[1] py-3">
          <p className="mb-2 text-[11px] font-extrabold tracking-[2px] text-[#4387e8] uppercase">Our Portfolio</p>
          <h1 className="mb-3 text-[clamp(34px,4vw,51px)] leading-[1.02] font-extrabold text-ink max-[700px]:text-[38px]" id="portfolio-title">Turning Ideas into Powerful Digital Experiences</h1>
          <p className="mb-4 max-w-[440px] text-[12px] leading-[1.5] text-copy">Explore our latest projects, from modern websites and mobile apps to custom software and cloud solutions. Each project reflects our commitment to innovation, quality, and real business impact.</p>
          <a className="inline-flex min-h-[40px] items-center gap-3 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-4 text-[11px] font-bold text-white no-underline shadow-[0_7px_17px_rgba(0,121,244,.16)] transition hover:-translate-y-0.5" href="mailto:hello@cbt.tech?subject=Portfolio%20consultation">Get a Free Consultation <ArrowIcon /></a>
        </div>
        <div className="hero-image relative z-[1] h-[225px] overflow-hidden rounded-2xl shadow-[0_16px_44px_rgba(38,103,174,.13)] max-[980px]:h-[205px] max-[700px]:h-auto max-[700px]:aspect-[1.7]">
          <img className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85" alt="Laptop and phone showing digital product designs" />
          <div className="absolute top-4 right-4 max-w-[155px] rotate-[-7deg] text-right text-[19px] leading-[1.05] font-extrabold text-blue-600 drop-shadow-sm max-[700px]:text-[16px]">Real Projects.<br />Real Impact.</div>
        </div>
      </section>

      <section className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[700px]:-mx-2 max-[700px]:px-2" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button className={`shrink-0 rounded-full border px-4 py-1.5 text-[10px] font-bold transition ${activeCategory === category ? 'border-transparent bg-[linear-gradient(100deg,#0765f7,#00c6dc)] text-white shadow-[0_5px_12px_rgba(0,121,244,.15)]' : 'border-[#d8e6f8] bg-white/70 text-[#4f6489] hover:border-[#73b8ff] hover:text-brand'}`} type="button" key={category} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-3.5 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1" aria-label="Portfolio projects" aria-live="polite">
        {visibleProjects.length ? visibleProjects.map((project, index) => (
          <article className="overflow-hidden rounded-lg border border-[#e3edf8] bg-white/90 shadow-[0_7px_20px_rgba(41,102,166,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(41,102,166,.13)]" key={project.name} style={{ animationDelay: `${index * 50}ms` }}>
            <img className="aspect-[2.1] w-full object-cover" src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=700&h=340&q=80`} alt={`${project.name} project preview`} loading={index > 2 ? 'lazy' : 'eager'} />
            <div className="p-3">
              <span className={`mb-1 inline-flex rounded-full px-2 py-0.5 text-[8px] font-bold ${categoryStyles[project.category]}`}>{project.category}</span>
              <h2 className="text-[13px] leading-tight font-extrabold text-[#17376e]">{project.name}</h2>
              <p className="mt-1 min-h-[32px] text-[9px] leading-[1.4] text-[#7186a8]">{project.description}</p>
              <a className="mt-2 inline-flex items-center gap-1.5 text-[9px] font-bold text-brand no-underline hover:text-[#5a53fa]" href={`mailto:hello@cbt.tech?subject=${encodeURIComponent(`Project inquiry: ${project.name}`)}`}>View Project <ArrowIcon /><ArrowIcon external /></a>
            </div>
          </article>
        )) : <p className="col-span-full py-10 text-center text-sm text-copy">No projects match this filter. Try another category or search term.</p>}
      </section>

      <section className="mt-4 grid min-h-[72px] grid-cols-[1.1fr_repeat(4,1fr)] items-center rounded-xl bg-[linear-gradient(105deg,#102c59_0%,#1554a8_66%,#225fff_86%,#04bddd_100%)] px-5 py-2 text-white shadow-[0_10px_24px_rgba(22,83,153,.16)] max-[700px]:grid-cols-2 max-[700px]:gap-y-3 max-[700px]:py-4">
        <h2 className="pr-3 text-[13px] leading-tight font-extrabold">Our Impact<br />in Numbers</h2>
        {[
          { value: '100+', label: 'Projects Delivered', icon: '▣' },
          { value: '50+', label: 'Happy Clients', icon: '♧' },
          { value: '5+', label: 'Years of Experience', icon: '☆' },
          { value: '99%', label: 'Client Satisfaction', icon: '◉' },
        ].map((stat) => <div className="border-l border-white/30 px-3 text-center" key={stat.label}><span className="mx-auto mb-1 grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[14px]" aria-hidden="true">{stat.icon}</span><strong className="block text-[15px] leading-none font-extrabold">{stat.value}</strong><span className="text-[8px] text-blue-100">{stat.label}</span></div>)}
      </section>

      <section className="mt-3 grid grid-cols-[1.2fr_.8fr] gap-3 max-[700px]:grid-cols-1">
        <blockquote className="flex items-center gap-3 rounded-xl bg-white/75 px-4 py-3">
          <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" alt="Sophia Garcia" loading="lazy" />
          <div><span className="text-xl leading-none font-black text-blue-500">“</span><p className="text-[9px] leading-[1.4] text-copy">CBT delivered exactly what we needed: a modern, fast, and reliable platform. Their team is professional, creative, and always responsive.</p><cite className="mt-1 block text-[8px] font-bold not-italic text-[#17376e]">Sophia Garcia <span className="font-normal text-[#7186a8]">· CEO, Nova Creative</span></cite></div>
        </blockquote>
        <div className="flex items-center gap-3 rounded-xl bg-[#eaf6ff] px-4 py-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[20px] text-blue-500">✧</span>
          <div className="mr-auto"><h2 className="text-[10px] font-extrabold text-ink">Have a Project in Mind?</h2><p className="text-[8px] text-copy">Let’s turn your idea into a powerful digital solution.</p><a className="mt-1 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-3 py-1 text-[8px] font-bold text-white no-underline" href="mailto:hello@cbt.tech">Get in Touch <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="relative mt-3 flex min-h-[66px] items-center overflow-hidden rounded-lg bg-[linear-gradient(105deg,#102c59_0%,#1554a8_66%,#04bddd_100%)] px-6 text-white shadow-[0_10px_24px_rgba(22,83,153,.16)] max-[500px]:flex-wrap max-[500px]:gap-2 max-[500px]:px-4 max-[500px]:py-3" id="contact">
        <div className="mr-4 bg-[linear-gradient(110deg,#00d7e7_8%,#0878fa_50%,#fff_92%)] bg-clip-text text-[30px] leading-none font-black text-transparent [-webkit-text-fill-color:transparent]">CBT</div>
        <div className="mr-4 h-8 w-px bg-cyan-300/80 max-[500px]:hidden" />
        <div className="relative z-[1] mr-auto"><h2 className="text-[12px] font-extrabold">Let’s Build Something Great</h2><p className="text-[8px] text-blue-100">Your vision. Our technology. A stronger tomorrow.</p></div>
        <a className="relative z-[1] inline-flex min-h-[34px] items-center gap-2 rounded-full bg-white px-4 text-[9px] font-bold text-[#0755d7] no-underline" href="mailto:hello@cbt.tech">Get in Touch <ArrowIcon /></a>
      </section>

      <footer className="flex items-center justify-between py-2 text-[8px] text-[#7a8eae]"><span>© 2026 CBT. All rights reserved.</span><div className="flex gap-3 font-bold" aria-label="Social links"><span>in</span><span>◎</span><span>♥</span><span>◉</span></div></footer>
    </main>
  )
}

export default PortfolioPage