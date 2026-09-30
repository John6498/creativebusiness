import ArrowIcon from '../icons/ArrowIcon'
import { featuredServices, type FeaturedService } from '../../data/siteData'

function ServiceIcon({ name }: { name: FeaturedService['icon'] }) {
  const iconClass = 'h-[29px] w-[29px] fill-none stroke-white [stroke-width:2.1] [stroke-linecap:round] [stroke-linejoin:round]'

  if (name === 'mobile') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
        <rect x="9" y="3.5" width="14" height="25" rx="2.5" />
        <path d="M13 7h6m-4 17.5h2" />
      </svg>
    )
  }

  if (name === 'cloud') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9 24.5h14a5 5 0 0 0 .6-10 7.5 7.5 0 0 0-14.4-1.4A5.8 5.8 0 0 0 9 24.5Z" />
      </svg>
    )
  }

  return (
    <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
      <path d="m11.5 9-7 7 7 7m9-14 7 7-7 7m-2.5-17-5 20" />
    </svg>
  )
}

function Services({ query }: { query: string }) {
  const filteredServices = featuredServices.filter((service) =>
    `${service.title} ${service.description}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section className="mx-auto grid w-[min(1280px,calc(100%-72px))] grid-cols-[repeat(3,minmax(0,1fr))] gap-[18px] max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:gap-3 max-[700px]:w-[calc(100%-36px)] max-[700px]:grid-cols-1" id="services" aria-label="Our services">
      {filteredServices.length > 0 ? filteredServices.map((service, index) => (
        <article className={`service-card relative isolate min-h-[207px] overflow-hidden rounded-[17px] border border-[rgba(215,232,249,.65)] bg-white/85 px-6 pt-[19px] pb-[18px] shadow-[0_9px_24px_rgba(41,102,166,.09)] [animation:rise-in_.5s_both] motion-reduce:animate-none max-[980px]:px-[18px] max-[700px]:min-h-[180px] max-[700px]:px-5 service-${service.accent}`} key={service.title} style={{ animationDelay: `${index * 90}ms` }}>
          <div className="service-icon mb-[10px] grid h-[54px] w-[54px] place-items-center rounded-[20px]"><ServiceIcon name={service.icon} /></div>
          <h2 className="mb-[7px] text-[21px] leading-[1.2] font-extrabold text-[#112958] max-[980px]:text-lg">{service.title}</h2>
          <p className="mb-[10px] min-h-[42px] max-w-[320px] text-[13px] leading-[1.55] text-[#536b96] max-[700px]:min-h-0 max-[700px]:max-w-[360px]">{service.description}</p>
          <a href={service.href} className="inline-flex items-center gap-[10px] text-xs font-bold text-[#006cff] no-underline hover:text-[#5a53fa]">Learn More <ArrowIcon /></a>
        </article>
      )) : (
        <p className="col-span-full p-7 text-center text-copy">No services match “{query}”. Try web, mobile, or cloud.</p>
      )}
    </section>
  )
}

export default Services