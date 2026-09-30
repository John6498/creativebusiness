import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type SiteNavigationProps = {
  menuOpen: boolean
  onNavigate: () => void
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function SiteNavigation({ menuOpen, onNavigate }: SiteNavigationProps) {
  const navRef = useRef<HTMLElement | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const location = useLocation()
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const activePath = location.pathname === '/' ? '/' : location.pathname

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const activeLink = linkRefs.current[activePath] ?? linkRefs.current['/'] ?? null
    if (!activeLink) return

    const navRect = nav.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()

    const normalizedWidth = Math.max(42, Math.min(linkRect.width * 0.82, 90))

    setIndicator({
      left: linkRect.left - navRect.left + (linkRect.width - normalizedWidth) / 2,
      width: normalizedWidth,
    })
  }, [activePath, menuOpen])

  const navClass = 'relative z-[1] py-[10px] text-[13px] text-[#314472] no-underline transition-colors duration-300 hover:text-brand max-[700px]:py-[11px]'

  return (
    <nav ref={navRef} className={`relative ml-auto flex h-full items-center gap-[clamp(22px,3.7vw,54px)] max-[980px]:gap-[19px] max-[700px]:absolute max-[700px]:top-[67px] max-[700px]:right-0 max-[700px]:left-0 max-[700px]:h-auto max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-0 max-[700px]:rounded-[14px] max-[700px]:border max-[700px]:border-[#e1ebf7] max-[700px]:bg-white max-[700px]:px-4 max-[700px]:py-[9px] max-[700px]:shadow-[0_16px_35px_rgba(31,74,128,.14)] ${menuOpen ? 'max-[700px]:flex' : 'max-[700px]:hidden'}`} aria-label="Main navigation">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 h-[3px] rounded-[3px] bg-brand transition-[left,width] duration-300 ease-out max-[700px]:bottom-4 max-[700px]:h-1.5 max-[700px]:w-1.5 max-[700px]:rounded-full"
        style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
      />

      {navItems.map((item) => (
        <NavLink
          key={item.to}
          ref={(node) => {
            linkRefs.current[item.to] = node
          }}
          end={item.to === '/'}
          className={({ isActive }) => `${navClass} ${isActive ? 'text-brand' : ''}`}
          to={item.to}
          onClick={onNavigate}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default SiteNavigation