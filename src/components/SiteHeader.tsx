import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type SiteHeaderProps = {
  query: string
  onQueryChange: (query: string) => void
}

function SiteHeader({ query, onQueryChange }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const homePage = pathname === '/'
  const navClass = 'relative py-[10px] text-[13px] text-[#314472] no-underline transition-colors hover:text-brand max-[700px]:py-[11px]'
  const activeClass = 'text-brand after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:rounded-[3px] after:bg-brand max-[700px]:after:bottom-4 max-[700px]:after:left-auto max-[700px]:after:h-1.5 max-[700px]:after:w-1.5 max-[700px]:after:rounded-full'

  return (
    <header className={`relative z-10 mx-auto flex min-h-[88px] w-[min(1280px,calc(100%-72px))] shrink-0 items-center gap-[34px] max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:gap-[22px] max-[700px]:min-h-[75px] max-[700px]:w-[calc(100%-36px)] max-[700px]:gap-3 ${pathname === '/about' || pathname === '/portfolio' ? 'max-[980px]:min-h-[64px]' : ''}`}>
      <Link className="flex shrink-0 items-center gap-[14px] text-ink no-underline max-[700px]:gap-[9px]" to="/" aria-label="CBT home">
        <span className="bg-[linear-gradient(110deg,#00d7e7_8%,#0868fa_50%,#112b76_92%)] bg-clip-text text-[39px] leading-none font-black text-transparent [-webkit-text-fill-color:transparent] max-[700px]:text-[33px]">CBT</span>
        <span className="h-9 w-px bg-[#8bb9ff] max-[700px]:h-[30px]" />
        <span className="text-[13px] leading-[1.2] font-bold max-[700px]:text-[11px]">Creative Business<br />of Technology</span>
      </Link>

      <label className="flex h-[39px] w-[214px] items-center gap-[10px] rounded-[13px] bg-[#edf5ff] px-[13px] text-[#243b73] max-[980px]:ml-auto max-[980px]:w-[180px] max-[700px]:h-[39px] max-[700px]:w-[39px] max-[700px]:justify-center max-[700px]:bg-transparent max-[700px]:p-0 max-[700px]:has-[:focus]:absolute max-[700px]:has-[:focus]:right-[46px] max-[700px]:has-[:focus]:w-[min(220px,calc(100vw-210px))] max-[700px]:has-[:focus]:justify-start max-[700px]:has-[:focus]:bg-[#edf5ff] max-[700px]:has-[:focus]:px-3">
        <svg className="h-4 w-4 shrink-0 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.8" cy="8.8" r="5.6" /><path d="m13 13 4 4" /></svg>
        <input
          className="w-full min-w-0 bg-transparent text-[13px] text-ink outline-none placeholder:text-[#8da2c9] max-[700px]:w-0 max-[700px]:opacity-0 max-[700px]:focus:w-full max-[700px]:focus:opacity-100"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search services..."
          aria-label="Search services"
        />
      </label>

      <button
        className="hidden h-[38px] w-[38px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-xl border border-[#d7e7fa] bg-white p-2 max-[700px]:flex"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="h-0.5 w-5 rounded-sm bg-[#17376e]" /><span className="h-0.5 w-5 rounded-sm bg-[#17376e]" />
      </button>

      <nav className={`ml-auto flex h-full items-center gap-[clamp(22px,3.7vw,54px)] max-[980px]:gap-[19px] max-[700px]:absolute max-[700px]:top-[67px] max-[700px]:right-0 max-[700px]:left-0 max-[700px]:h-auto max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-0 max-[700px]:rounded-[14px] max-[700px]:border max-[700px]:border-[#e1ebf7] max-[700px]:bg-white max-[700px]:px-4 max-[700px]:py-[9px] max-[700px]:shadow-[0_16px_35px_rgba(31,74,128,.14)] ${menuOpen ? 'max-[700px]:flex' : 'max-[700px]:hidden'}`} aria-label="Main navigation">
        <NavLink className={`${navClass} ${homePage ? activeClass : ''}`} to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink className={({ isActive }) => `${navClass} ${isActive ? activeClass : ''}`} to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink className={({ isActive }) => `${navClass} ${isActive ? activeClass : ''}`} to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
        <NavLink className={({ isActive }) => `${navClass} ${isActive ? activeClass : ''}`} to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink className={({ isActive }) => `${navClass} ${isActive ? activeClass : ''}`} to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  )
}

export default SiteHeader
