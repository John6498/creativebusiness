import type { FormEvent } from 'react'

function ContactIcon({ type }: { type: 'phone' | 'mail' | 'pin' | 'share' }) {
  const common = 'h-5 w-5 fill-none stroke-white [stroke-width:1.8] [stroke-linecap:round] [stroke-linejoin:round]'

  switch (type) {
    case 'phone':
      return <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2Z" /></svg>
    case 'mail':
      return <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6" /></svg>
    case 'pin':
      return <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5" /></svg>
    case 'share':
      return <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.6 6.8-4.2m-6.8 7 6.8 4.2" /></svg>
  }
}

function ArrowIcon() {
  return <svg className="h-4 w-4 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10h12m-5-5 5 5-5 5" /></svg>
}

function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const subject = String(form.get('subject') ?? 'General Inquiry')
    const message = String(form.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:hello@cbt.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="mx-auto flex w-[min(1160px,calc(100%-72px))] flex-1 flex-col pb-3 max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:flex-none max-[700px]:w-[calc(100%-36px)] max-[700px]:pb-6">
      <section className="grid grid-cols-[.72fr_1.45fr] gap-3 pt-3 max-[700px]:grid-cols-1" aria-label="Contact information and message form">
        <aside className="rounded-xl border border-[#e4eef9] bg-white/90 p-5 shadow-[0_8px_24px_rgba(41,102,166,.08)] max-[980px]:p-4">
          <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Get in touch</p>
          <h1 className="mb-2 text-[23px] leading-[1.08] font-extrabold text-ink">Our Contact<br />Information</h1>
          <p className="mb-3 text-[10px] leading-[1.45] text-copy">You can reach us through any of the channels below. We’re always happy to help!</p>

          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#14c7ed,#086bff)]"><ContactIcon type="phone" /></span>
              <div className="pt-0.5"><p className="text-[10px] font-bold text-[#17376e]">Phone</p><a className="block text-[10px] font-semibold text-brand no-underline" href="tel:+15551234567">+1 (555) 123-4567</a><p className="text-[8px] text-[#7a8eae]">Mon–Fri, 9:00 AM–6:00 PM (GMT+7)</p></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#a052ff,#5632df)]"><ContactIcon type="mail" /></span>
              <div className="pt-0.5"><p className="text-[10px] font-bold text-[#17376e]">Email</p><a className="block text-[10px] font-semibold text-brand no-underline" href="mailto:hello@cbt.tech">hello@cbt.tech</a><p className="text-[8px] text-[#7a8eae]">We reply within 24 hours</p></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#12d5dc,#00a6c9)]"><ContactIcon type="pin" /></span>
              <div className="pt-0.5"><p className="text-[10px] font-bold text-[#17376e]">Office Address</p><p className="text-[9px] leading-[1.4] text-[#7186a8]">123 Innovation Drive, Tech City,<br />Bangkok 10110, Thailand</p></div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(145deg,#a052ff,#5632df)]"><ContactIcon type="share" /></span>
            <div><p className="mb-1 text-[9px] font-bold text-[#17376e]">Follow Us</p><div className="flex gap-3 text-[12px] font-extrabold text-brand"><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://x.com/" aria-label="X">𝕏</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://www.youtube.com/" aria-label="YouTube">▶</a></div></div>
          </div>
        </aside>

        <section className="rounded-xl border border-[#e4eef9] bg-white/90 p-5 shadow-[0_8px_24px_rgba(41,102,166,.08)] max-[980px]:p-4" aria-labelledby="message-title">
          <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Send a message</p>
          <h2 className="text-[23px] leading-tight font-extrabold text-ink" id="message-title">Get In Touch</h2>
          <p className="mb-3 text-[10px] text-copy">Fill out the form below and we’ll get back to you as soon as possible.</p>

          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3 max-[500px]:grid-cols-1">
              <label className="block text-[9px] font-bold text-[#263f70]">Full Name <span className="text-rose-500">*</span>
                <input className="mt-1 h-[31px] w-full rounded-md border border-[#d9e8fa] bg-white px-3 text-[10px] font-normal text-ink placeholder:text-[#a1b1cb] focus:border-blue-400 focus:outline-none" type="text" name="name" autoComplete="name" placeholder="Your name" required />
              </label>
              <label className="block text-[9px] font-bold text-[#263f70]">Email Address <span className="text-rose-500">*</span>
                <input className="mt-1 h-[31px] w-full rounded-md border border-[#d9e8fa] bg-white px-3 text-[10px] font-normal text-ink placeholder:text-[#a1b1cb] focus:border-blue-400 focus:outline-none" type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label className="block text-[9px] font-bold text-[#263f70]">Subject <span className="text-rose-500">*</span>
              <select className="mt-1 h-[31px] w-full rounded-md border border-[#d9e8fa] bg-white px-3 text-[10px] font-normal text-[#7c8eac] focus:border-blue-400 focus:outline-none" name="subject" defaultValue="" required>
                <option value="" disabled>Select a subject</option>
                <option>General Inquiry</option>
                <option>Web Development</option>
                <option>Mobile Applications</option>
                <option>Cloud & DevOps</option>
                <option>UI/UX Design</option>
                <option>Custom Software</option>
              </select>
            </label>
            <label className="block text-[9px] font-bold text-[#263f70]">Message <span className="text-rose-500">*</span>
              <textarea className="mt-1 min-h-[56px] w-full resize-y rounded-md border border-[#d9e8fa] bg-white px-3 py-2 text-[10px] font-normal text-ink placeholder:text-[#a1b1cb] focus:border-blue-400 focus:outline-none" name="message" placeholder="Tell us about your project, question, or how we can help..." required />
            </label>
            <div className="flex items-center justify-between gap-3 max-[500px]:flex-wrap">
              <button className="inline-flex min-h-[34px] items-center gap-3 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-5 text-[10px] font-bold text-white shadow-[0_5px_14px_rgba(0,121,244,.15)] transition hover:-translate-y-0.5" type="submit">Send Message <ArrowIcon /></button>
              <p className="inline-flex items-center gap-1.5 text-[8px] text-[#7a8eae]"><svg className="h-3.5 w-3.5 fill-none stroke-[#0b75ed] [stroke-width:1.8]" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5 13 3v4c0 3.2-2 5.5-5 7-3-1.5-5-3.8-5-7V3l5-1.5Z"/><path d="m6 7.5 1.3 1.3L10 6"/></svg>Your information is safe with us.</p>
            </div>
          </form>
        </section>
      </section>

      <section className="mt-3 grid grid-cols-[1.4fr_.8fr] gap-3 max-[700px]:grid-cols-1" aria-label="Office location and connection">
        <div className="grid min-h-[112px] grid-cols-[1.2fr_1fr] overflow-hidden rounded-xl border border-[#e4eef9] bg-white/90 shadow-[0_8px_24px_rgba(41,102,166,.08)] max-[500px]:grid-cols-1">
          <iframe className="h-full min-h-[112px] w-full border-0 max-[500px]:h-[150px]" title="Map showing our Bangkok office" src="https://www.openstreetmap.org/export/embed.html?bbox=100.475%2C13.735%2C100.525%2C13.78&layer=mapnik&marker=13.7563%2C100.5018" loading="lazy" />
          <div className="flex items-center gap-3 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6f2ff] text-brand"><ContactIcon type="pin" /></span>
            <div><h2 className="text-[11px] font-extrabold text-ink">Our Office</h2><p className="mt-1 text-[9px] leading-[1.4] text-[#7186a8]">123 Innovation Drive,<br />Tech City, Bangkok 10110,<br />Thailand</p><a className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#69aaff] px-3 py-1 text-[8px] font-bold text-brand no-underline" href="https://maps.google.com/?q=13.7563,100.5018" target="_blank" rel="noreferrer">Get Directions <ArrowIcon /></a></div>
          </div>
        </div>
        <div className="relative flex min-h-[112px] items-center gap-3 overflow-hidden rounded-xl border border-[#e4eef9] bg-[#f1f8ff] p-4">
          <div className="pointer-events-none absolute -right-14 -bottom-24 h-48 w-48 rounded-full border-[14px] border-cyan-200/50 shadow-[0_0_0_14px_rgba(89,161,255,.12)]" />
          <span className="relative z-[1] grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#20d4eb,#086bff)] text-white"><svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.8 3.2 18.5 20c-.25 1.2-.9 1.5-1.8.95l-5-3.7-2.4 2.3c-.26.27-.48.49-.98.49l.36-5.1 9.3-8.4c.4-.36-.09-.56-.63-.2L5.85 13.6.9 12.05c-1.08-.34-1.1-1.08.23-1.6L20.5 2.9c.9-.33 1.7.22 1.3.3Z"/></svg></span>
          <div className="relative z-[1]"><h2 className="text-[14px] font-extrabold text-ink">Let’s Connect</h2><p className="mt-1 max-w-[250px] text-[9px] leading-[1.45] text-copy">We’re excited to hear about your ideas and explore how we can work together.</p><a className="mt-2 inline-flex items-center gap-2 text-[9px] font-bold text-brand no-underline" href="mailto:hello@cbt.tech">hello@cbt.tech <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="relative mt-3 flex min-h-[58px] items-center overflow-hidden rounded-lg bg-[linear-gradient(105deg,#102c59_0%,#1554a8_66%,#04bddd_100%)] px-6 text-white shadow-[0_10px_24px_rgba(22,83,153,.16)] max-[500px]:flex-wrap max-[500px]:gap-2 max-[500px]:px-4 max-[500px]:py-3">
        <div className="mr-4 bg-[linear-gradient(110deg,#00d7e7_8%,#0878fa_50%,#fff_92%)] bg-clip-text text-[28px] leading-none font-black text-transparent [-webkit-text-fill-color:transparent]">CBT</div>
        <div className="mr-4 h-7 w-px bg-cyan-300/80 max-[500px]:hidden" />
        <div className="relative z-[1] mr-auto"><h2 className="text-[11px] font-extrabold">Let’s Build Something Great</h2><p className="text-[8px] text-blue-100">Your vision. Our technology. A stronger tomorrow.</p></div>
        <a className="relative z-[1] inline-flex min-h-[32px] items-center gap-2 rounded-full bg-white px-4 text-[8px] font-bold text-[#0755d7] no-underline" href="mailto:hello@cbt.tech">Get in Touch <ArrowIcon /></a>
      </section>

      <footer className="flex items-center justify-between py-2 text-[8px] text-[#7a8eae]"><span>© 2026 CBT. All rights reserved.</span><div className="flex gap-3 font-bold text-[#507ab1]" aria-label="Social links"><span>in</span><span>f</span><span>𝕏</span><span>◎</span></div></footer>
    </main>
  )
}

export default ContactPage