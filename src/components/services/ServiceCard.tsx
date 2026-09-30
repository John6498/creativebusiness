import ArrowIcon from '../icons/ArrowIcon'
import type { ServiceCatalogItem } from '../../data/siteData'

export function ServiceIcon({ name }: { name: ServiceCatalogItem['icon'] }) {
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

function ServiceCard({ item }: { item: ServiceCatalogItem }) {
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

export default ServiceCard