import ArrowIcon from '../components/icons/ArrowIcon'
import ServiceCard, { ServiceIcon } from '../components/services/ServiceCard'
import { serviceCatalog } from '../data/siteData'

function ServicesPage({ query }: { query: string }) {
  const filtered = serviceCatalog.filter((service) => `${service.title} ${service.description}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <main className="mx-auto flex min-h-0 w-[min(1280px,calc(100%-72px))] flex-1 flex-col pb-[clamp(24px,6vh,52px)] max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:flex-none max-[700px]:w-[calc(100%-36px)] max-[700px]:pb-8">
      <section className="hero-wave relative grid min-h-[250px] flex-1 grid-cols-[.9fr_1.1fr] items-center gap-10 max-[980px]:min-h-[230px] max-[980px]:gap-6 max-[700px]:my-5 max-[700px]:flex-none max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-5" aria-labelledby="services-title">
        <div className="relative z-[1] py-5 max-[700px]:py-0">
          <p className="mb-2 text-[11px] font-extrabold tracking-[2px] text-[#4387e8] uppercase">Our Services</p>
          <h1 className="mb-3 text-[clamp(34px,4vw,52px)] leading-[1.04] font-extrabold tracking-[-1px] text-ink max-[700px]:text-[38px]" id="services-title">Technology Solutions<br className="max-[700px]:hidden" /> Built for Your Success</h1>
          <p className="mb-4 max-w-[440px] text-[14px] leading-[1.5] text-copy">We provide end-to-end software development services that help businesses innovate, optimize and grow in the digital world.</p>
          <a className="inline-flex min-h-[47px] items-center justify-center gap-4 rounded-[18px] border border-transparent bg-[linear-gradient(105deg,#0765f7_0%,#00c6dc_35%,#765bff_65%,#0765f7_100%)] [background-size:250%_250%] animate-gradient-flow motion-reduce:animate-none px-[22px] text-[13px] font-bold text-white no-underline shadow-[0_7px_17px_rgba(0,121,244,.15)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,121,244,.24)]" href="mailto:hello@cbt.tech?subject=Free%20consultation">Get a Free Consultation <ArrowIcon /></a>
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
    </main>
  )
}

export default ServicesPage