type IconName = 'people' | 'code' | 'calendar' | 'star' | 'bulb' | 'shield' | 'target'

const team = [
  { name: 'Daniel Kim', role: 'CEO & Founder', image: 'photo-1500648767791-00dcc994a43e' },
  { name: 'Michael Chen', role: 'CTO', image: 'photo-1506794778202-cad84cf45f1d' },
  { name: 'Jason Lee', role: 'Lead Developer', image: 'photo-1507003211169-0a1dd7228f2d' },
  { name: 'Sophia Garcia', role: 'UI/UX Designer', image: 'photo-1534528741775-53994a69daeb' },
  { name: 'Emily Wilson', role: 'Project Manager', image: 'photo-1544005313-94ddf0286df2' },
]

const values = [
  { title: 'Innovation', text: 'We turn fresh ideas into powerful solutions.', icon: 'bulb' as const, accent: 'blue' },
  { title: 'Integrity', text: 'We do what’s right, always.', icon: 'shield' as const, accent: 'cyan' },
  { title: 'Collaboration', text: 'Great results come from great teams.', icon: 'people' as const, accent: 'blue' },
  { title: 'Excellence', text: 'We’re committed to delivering the best.', icon: 'target' as const, accent: 'violet' },
]

function LineIcon({ name }: { name: IconName }) {
  const iconClass = 'h-6 w-6 fill-none stroke-current [stroke-width:1.8] [stroke-linecap:round] [stroke-linejoin:round]'

  switch (name) {
    case 'people':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.5a4 4 0 0 1 0 7.5m2 4h1a4 4 0 0 1 4 4v2" /></svg>
    case 'code':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></svg>
    case 'calendar':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m-13 4 2 2 4-4" /></svg>
    case 'star':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
    case 'bulb':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.7c.6.4 1 1 1 1.8h6c0-.8.4-1.4 1-1.8A7 7 0 0 0 12 2Z" /><path d="M12 5v2m-4 1 1.5 1.5m6.5-1.5L14.5 9" /></svg>
    case 'shield':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4" /></svg>
    case 'target':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><path d="m21 3-8.5 8.5M16 3h5v5" /></svg>
  }
}

function ArrowIcon() {
  return <svg className="h-4 w-4 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10h12m-5-5 5 5-5 5" /></svg>
}

function AboutPage() {
  return (
    <main className="mx-auto w-[min(1280px,calc(100%-72px))] pb-7 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)] max-[700px]:pb-5">
      <section className="hero-wave relative grid min-h-[270px] grid-cols-[.88fr_1.12fr] items-center gap-8 max-[980px]:min-h-[225px] max-[980px]:grid-cols-[.85fr_1.15fr] max-[980px]:gap-5 max-[700px]:my-5 max-[700px]:grid-cols-1 max-[700px]:gap-5" aria-labelledby="about-title">
        <div className="relative z-[1] py-4 max-[980px]:py-2 max-[700px]:py-0">
          <p className="mb-2 text-[11px] font-extrabold tracking-[2px] text-[#4387e8] uppercase">About us</p>
          <h1 className="mb-3 text-[clamp(32px,3.6vw,46px)] leading-[1.04] font-extrabold text-ink max-[980px]:text-[28px] max-[700px]:text-[38px]" id="about-title">We’re a Team of<br className="hidden max-[980px]:block" />Innovators, Builders,<br className="hidden max-[980px]:block" />and <span className="bg-[linear-gradient(95deg,#04a9ed,#076dff_65%,#875bff)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">Problem Solvers.</span></h1>
          <p className="mb-4 max-w-[430px] text-[13px] leading-[1.55] text-copy max-[980px]:mb-3 max-[980px]:text-[11px]">CBT is a passionate team of developers, designers, and problem-solvers. We build digital solutions that help businesses grow, innovate and stay ahead in an ever-changing world.</p>
          <a className="inline-flex min-h-[40px] items-center gap-3 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-4 text-[11px] font-bold text-white no-underline shadow-[0_7px_17px_rgba(0,121,244,.16)] transition hover:-translate-y-0.5" href="#contact">Get in Touch <ArrowIcon /></a>
        </div>
        <div className="hero-image relative z-[1] h-[238px] overflow-hidden rounded-xl shadow-[0_16px_44px_rgba(38,103,174,.13)] max-[980px]:h-[190px] max-[700px]:h-auto max-[700px]:aspect-[1.6]">
          <img className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" alt="A collaborative team sharing ideas around a table" />
          <div className="absolute top-4 right-4 max-w-[150px] rotate-[-7deg] text-right text-[20px] leading-[1.05] font-extrabold text-blue-600 drop-shadow-sm max-[700px]:text-[16px]">Together<br />We Build<br />the Future</div>
        </div>
      </section>

      <section className="grid grid-cols-[.58fr_1.42fr] items-center gap-8 py-3 max-[980px]:gap-5 max-[980px]:py-2 max-[700px]:grid-cols-1 max-[700px]:gap-4" aria-labelledby="story-title">
        <div>
          <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Our Story</p>
          <h2 className="mb-2 text-[22px] leading-[1.05] font-extrabold text-ink max-[980px]:text-[19px]" id="story-title">Turning Ideas<br />into Impact</h2>
          <p className="max-w-[290px] text-[11px] leading-[1.5] text-copy max-[980px]:text-[9px] max-[980px]:leading-[1.35]">CBT was founded with a simple belief: technology can make life easier, businesses stronger, and ideas bigger. Since our founding, we’ve been on a mission to deliver custom software, web, and mobile solutions that solve real problems and create lasting value.</p>
          <a className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#64a8ff] px-3 py-1 text-[10px] font-bold text-brand no-underline hover:bg-white max-[980px]:mt-2" href="/services">Learn More <ArrowIcon /></a>
        </div>
        <div className="grid grid-cols-4 rounded-xl border border-[#e7f0fb] bg-white/85 px-2 py-4 shadow-[0_8px_26px_rgba(41,102,166,.08)] max-[980px]:py-3 max-[500px]:grid-cols-2">
          {[
            { icon: 'people' as const, count: '50+', label: 'Happy Clients', detail: 'Trusted by businesses worldwide' },
            { icon: 'code' as const, count: '100+', label: 'Projects Delivered', detail: 'From idea to real impact' },
            { icon: 'calendar' as const, count: '5+', label: 'Years of Experience', detail: 'Building digital success' },
            { icon: 'star' as const, count: '25+', label: 'Skilled Professionals', detail: 'Designers, developers, and strategists' },
          ].map((stat) => (
            <div className="flex flex-col items-start border-r border-[#e8f0fa] px-3 last:border-0 max-[980px]:px-2 max-[500px]:mb-3 max-[500px]:border-r-0 max-[500px]:even:border-l max-[500px]:even:border-[#e8f0fa]" key={stat.label}>
              <span className="mb-2 grid h-9 w-9 place-items-center rounded-full bg-[#e5f2ff] text-brand max-[980px]:mb-1.5 max-[980px]:h-8 max-[980px]:w-8"><LineIcon name={stat.icon} /></span>
              <strong className="text-[21px] leading-none font-extrabold text-[#075bed] max-[980px]:text-[18px]">{stat.count}</strong>
              <span className="mt-1 text-[10px] font-bold text-[#17376e] max-[980px]:text-[9px]">{stat.label}</span>
              <span className="mt-1 text-[9px] leading-[1.35] text-[#7186a8] max-[980px]:text-[8px]">{stat.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="my-5 grid grid-cols-[.62fr_1.38fr] items-center gap-5 rounded-xl bg-[#eaf6ff] p-5 max-[980px]:my-4 max-[980px]:gap-4 max-[980px]:p-4 max-[700px]:grid-cols-1" aria-labelledby="values-title">
        <div>
          <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Our Values</p>
          <h2 className="mb-2 text-[22px] leading-tight font-extrabold text-ink" id="values-title">What Drives Us</h2>
          <p className="max-w-[310px] text-[11px] leading-[1.5] text-copy max-[980px]:text-[10px] max-[980px]:leading-[1.35]">We believe in collaboration, continuous learning, and a customer-first mindset. These values shape how we work and help us deliver solutions that truly make a difference.</p>
          <div className="mt-3 h-px w-14 rotate-[-8deg] bg-blue-500" />
        </div>
        <div className="grid grid-cols-4 gap-2.5 max-[500px]:grid-cols-2">
          {values.map((value) => (
            <article className="min-h-[126px] rounded-lg border border-[#edf3fb] bg-white/90 p-3 shadow-[0_5px_16px_rgba(41,102,166,.05)] max-[980px]:min-h-[110px] max-[980px]:p-2.5" key={value.title}>
              <span className={`mb-2 grid h-9 w-9 place-items-center rounded-full bg-[#e6f3ff] max-[980px]:mb-1.5 max-[980px]:h-8 max-[980px]:w-8 ${value.accent === 'violet' ? 'text-violet-500' : value.accent === 'cyan' ? 'text-cyan-500' : 'text-blue-500'}`}><LineIcon name={value.icon} /></span>
              <h3 className="mb-1 text-[12px] font-extrabold text-ink">{value.title}</h3>
              <p className="text-[10px] leading-[1.4] text-[#7085a7]">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-1" aria-labelledby="team-title">
        <div className="mb-3 flex items-end justify-between gap-4 max-[980px]:mb-2">
          <div>
            <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Our Team</p>
            <h2 className="text-[22px] leading-tight font-extrabold text-ink" id="team-title">Meet the People Behind CBT</h2>
            <p className="mt-1 max-w-[500px] text-[11px] leading-[1.45] text-copy max-[980px]:text-[10px]">Our team is a diverse group of creative thinkers, skilled developers, and strategic minds, united by a passion for technology and a commitment to excellence.</p>
          </div>
          <a className="mb-1 inline-flex shrink-0 items-center gap-2 text-[10px] font-bold text-brand no-underline max-[500px]:hidden" href="mailto:hello@cbt.tech?subject=Meet%20the%20team">View All Team Members <ArrowIcon /></a>
        </div>
        <div className="grid grid-cols-5 gap-3 max-[980px]:gap-2 max-[700px]:grid-cols-3 max-[500px]:grid-cols-2">
          {team.map((person) => (
            <article className="overflow-hidden rounded-lg border border-[#e6eff9] bg-white shadow-[0_7px_18px_rgba(41,102,166,.07)]" key={person.name}>
              <img className="aspect-[1.12] w-full object-cover object-center" src={`https://images.unsplash.com/${person.image}?auto=format&fit=crop&w=500&h=430&q=80`} alt={person.name} loading="lazy" />
              <div className="p-2.5 max-[980px]:p-2">
                <h3 className="text-[11px] font-extrabold text-[#17376e]">{person.name}</h3>
                <p className="mt-0.5 text-[9px] text-[#7186a8]">{person.role}</p>
                <div className="mt-2 flex gap-2 text-[9px] font-bold text-[#4e74ac]" aria-label={`${person.name} social links`}><span aria-hidden="true">in</span><span aria-hidden="true">◎</span><span aria-hidden="true">♥</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mt-5 flex min-h-[76px] items-center overflow-hidden rounded-xl bg-[linear-gradient(105deg,#102c59_0%,#1554a8_66%,#04bddd_100%)] px-7 text-white shadow-[0_12px_30px_rgba(22,83,153,.18)] max-[980px]:mt-4 max-[980px]:min-h-[68px] max-[700px]:flex-wrap max-[700px]:gap-3 max-[700px]:px-4 max-[700px]:py-3" id="contact">
        <div className="mr-5 bg-[linear-gradient(110deg,#00d7e7_8%,#0878fa_50%,#fff_92%)] bg-clip-text text-[32px] leading-none font-black text-transparent [-webkit-text-fill-color:transparent]">CBT</div>
        <div className="mr-5 h-9 w-px bg-cyan-300/80 max-[500px]:hidden" />
        <div className="relative z-[1] mr-auto"><h2 className="text-[15px] font-extrabold">Let’s Build Something Great</h2><p className="text-[10px] text-blue-100">Your vision. Our technology. A stronger tomorrow.</p></div>
        <a className="relative z-[1] inline-flex min-h-[38px] items-center gap-2 rounded-full bg-white px-4 text-[10px] font-bold text-[#0755d7] no-underline transition hover:-translate-y-0.5" href="mailto:hello@cbt.tech">Get in Touch <ArrowIcon /></a>
      </section>

      <footer className="flex items-center justify-between py-3 text-[9px] text-[#7a8eae]"><span>© 2026 CBT. All rights reserved.</span><div className="flex gap-3 font-bold" aria-label="Social links"><span>in</span><span>◎</span><span>♥</span><span>◉</span></div></footer>
    </main>
  )
}

export default AboutPage