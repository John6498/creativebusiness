import ArrowIcon from '../components/icons/ArrowIcon'
import ContactForm from '../components/contact/ContactForm'
import ContactInformation, { ContactIcon } from '../components/contact/ContactInformation'
import { contactDetails } from '../data/siteData'

function ContactPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <main className="mx-auto flex min-h-0 w-[min(1280px,calc(100%-72px))] flex-1 flex-col pt-[22px] pb-[31px] max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:flex-none max-[980px]:pt-3 max-[980px]:pb-6 max-[700px]:w-[calc(100%-36px)]">
      <section className="grid min-h-0 flex-1 grid-cols-[.72fr_1.45fr] items-stretch gap-3 max-[700px]:flex-none max-[700px]:grid-cols-1" aria-label="Contact information and message form">
        <ContactInformation />

        <ContactForm />
      </section>

      <section className="mt-3 grid h-[143px] shrink-0 grid-cols-[1.4fr_.8fr] items-stretch gap-3 max-[980px]:h-auto max-[700px]:grid-cols-1" aria-label="Office location and connection">
        <div className="grid h-full min-h-[112px] grid-cols-[1.2fr_1fr] overflow-hidden rounded-xl border border-[#e4eef9] bg-white/90 shadow-[0_8px_24px_rgba(41,102,166,.08)] max-[500px]:grid-cols-1">
          <iframe className="h-full min-h-[112px] w-full border-0 max-[500px]:h-[150px]" title={contactDetails.mapTitle} src={contactDetails.mapUrl} loading="lazy" />
          <div className="flex items-center gap-3 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6f2ff] text-brand"><ContactIcon type="pin" /></span>
            <div><h2 className="text-[14px] font-extrabold text-ink">{contactDetails.officeName}</h2><p className="mt-1 text-[12px] leading-[1.45] text-[#7186a8]">{contactDetails.officeAddress.map((line) => <span className="block" key={line}>{line}</span>)}</p><a className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#69aaff] px-3 py-1 text-[11px] font-bold text-brand no-underline" href={contactDetails.directionsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowIcon /></a></div>
          </div>
        </div>
        <div className="relative flex h-full min-h-[112px] items-center gap-3 overflow-hidden rounded-xl border border-[#e4eef9] bg-[#f1f8ff] p-4">
          <div className="pointer-events-none absolute -right-14 -bottom-24 h-48 w-48 rounded-full border-[14px] border-cyan-200/50 shadow-[0_0_0_14px_rgba(89,161,255,.12)]" />
          <span className="relative z-[1] grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#20d4eb,#086bff)] text-white"><svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.8 3.2 18.5 20c-.25 1.2-.9 1.5-1.8.95l-5-3.7-2.4 2.3c-.26.27-.48.49-.98.49l.36-5.1 9.3-8.4c.4-.36-.09-.56-.63-.2L5.85 13.6.9 12.05c-1.08-.34-1.1-1.08.23-1.6L20.5 2.9c.9-.33 1.7.22 1.3.3Z"/></svg></span>
          <div className="relative z-[1]"><h2 className="text-[16px] font-extrabold text-ink">Let’s Connect</h2><p className="mt-1 max-w-[250px] text-[13px] leading-[1.45] text-copy">We’re excited to hear about your ideas and explore how we can work together.</p><a className="mt-2 inline-flex items-center gap-2 text-[12px] font-bold text-brand no-underline" href={`mailto:${contactDetails.email}`}>{contactDetails.email} <ArrowIcon /></a></div>
        </div>
      </section>

      </main>
    </div>
  )
}

export default ContactPage