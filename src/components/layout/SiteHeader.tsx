import { useState } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from '../../assets/blog.png'
import SiteNavigation from './SiteNavigation'

type SiteHeaderProps = {
  query: string
  onQueryChange: (query: string) => void
}

function SiteHeader({ query, onQueryChange }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10 mx-auto flex min-h-[88px] w-[min(1280px,calc(100%-72px))] shrink-0 items-center gap-[34px] max-[980px]:w-[min(calc(100%-48px),760px)] max-[980px]:gap-[22px] max-[700px]:min-h-[75px] max-[700px]:w-[calc(100%-36px)] max-[700px]:gap-3">
      <Link className="flex shrink-0 items-center gap-[14px] text-ink no-underline max-[700px]:gap-[9px]" to="/" aria-label="CBT home">
        <img className="h-[39px] w-auto object-contain max-[700px]:h-[33px]" src={siteLogo} alt="CBT" />
        <span className="h-9 w-px bg-[#8bb9ff] max-[700px]:h-[30px]" />
        <span className="font-display text-[16px] leading-[1.05] font-bold max-[700px]:text-[14px]">Creative Business<br />of Technology</span>
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

      <SiteNavigation menuOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  )
}

export default SiteHeader
