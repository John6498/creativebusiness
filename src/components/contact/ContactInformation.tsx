import { contactMethods, contactSocialLinks } from '../../data/siteData'

const contactIconStyles = {
  blue: 'bg-[linear-gradient(145deg,#14c7ed,#086bff)]',
  violet: 'bg-[linear-gradient(145deg,#a052ff,#5632df)]',
  cyan: 'bg-[linear-gradient(145deg,#12d5dc,#00a6c9)]',
}

export function ContactIcon({ type }: { type: 'phone' | 'mail' | 'pin' | 'share' }) {
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

function ContactInformation() {
  return (
    <aside className="flex h-full flex-col rounded-xl border border-[#e4eef9] bg-white/90 p-5 shadow-[0_8px_24px_rgba(41,102,166,.08)] max-[980px]:p-4">
      <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Get in touch</p>
      <h1 className="mb-2 text-[23px] leading-[1.08] font-extrabold text-ink">Our Contact<br />Information</h1>
      <p className="mb-3 text-[10px] leading-[1.45] text-copy">You can reach us through any of the channels below. We’re always happy to help!</p>

      <div className="space-y-2.5">
        {contactMethods.map((method) => (
          <div className="flex items-start gap-3" key={method.type}>
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${contactIconStyles[method.accent]}`}><ContactIcon type={method.type} /></span>
            <div className="pt-0.5">
              <p className="text-[10px] font-bold text-[#17376e]">{method.label}</p>
              {method.href ? <a className="block text-[10px] font-semibold text-brand no-underline" href={method.href}>{method.value}</a> : <p className="text-[9px] leading-[1.4] text-[#7186a8]">{method.value}<br />{method.detail}</p>}
              {method.note && <p className="text-[8px] text-[#7a8eae]">{method.note}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(145deg,#a052ff,#5632df)]"><ContactIcon type="share" /></span>
        <div><p className="mb-1 text-[9px] font-bold text-[#17376e]">Follow Us</p><div className="flex gap-3 text-[12px] font-extrabold text-brand">{contactSocialLinks.map((social) => <a href={social.href} aria-label={social.label} key={social.label}>{social.text}</a>)}</div></div>
      </div>
    </aside>
  )
}

export default ContactInformation