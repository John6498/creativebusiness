import footerBackground from '../../assets/foot/back.png'
import footerLogo from '../../assets/foot/logo.png'
import ArrowIcon from '../icons/ArrowIcon'

function SiteFooter() {
  return (
    <footer className="mb-3 mx-auto w-[min(1280px,calc(100%-72px))] shrink-0 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)]" aria-label="Site footer">
      <section className="rounded-xl relative flex min-h-[94px] items-center overflow-hidden px-8 text-white shadow-[0_12px_30px_rgba(22,83,153,.18)] max-[700px]:flex-wrap max-[700px]:gap-3 max-[700px]:px-5 max-[700px]:py-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-center opacity-[0.8]"
          style={{ backgroundImage: `url(${footerBackground})`, backgroundSize: '100% 100%' }}
        />
        <img className="relative z-[1] mr-4 h-11 w-auto object-contain max-[700px]:mr-2" src={footerLogo} alt="CBT logo" />
        <div className="relative z-[1] mr-7 h-[42px] w-px bg-cyan-300/80 max-[700px]:mr-0" />
        <div className="relative z-[1] mr-auto">
          <h2 className="text-[17px] font-extrabold">Let’s Build Something Great</h2>
          <p className="text-[12px] text-blue-100">Your vision. Our technology. A stronger tomorrow.</p>
        </div>
        <a className="relative z-[1] inline-flex min-h-[42px] items-center gap-3 rounded-full bg-white px-5 text-[11px] font-bold text-[#0755d7] no-underline transition hover:-translate-y-0.5" href="mailto:hello@cbt.tech?subject=Start%20a%20project">
          Start a Project <ArrowIcon />
        </a>
      </section>
    </footer>
  )
}

export default SiteFooter
