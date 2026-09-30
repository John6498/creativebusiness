import { useEffect, useRef, useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import { portfolioProjects, projectCategories } from '../../data/siteData'

function ProjectCarousel({ query }: { query: string }) {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>('All Projects')
  const [activeIndex, setActiveIndex] = useState(0)
  const lastWheelAt = useRef(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const carouselRef = useRef<HTMLElement | null>(null)
  const normalizedQuery = query.trim().toLowerCase()
  const visibleProjects = portfolioProjects.filter((project) => {
    const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory
    const matchesQuery = !normalizedQuery || `${project.name} ${project.category} ${project.description}`.toLowerCase().includes(normalizedQuery)
    return matchesCategory && matchesQuery
  })
  const currentIndex = Math.min(activeIndex, visibleProjects.length - 1)
  const carouselState = useRef({ currentIndex, projectCount: visibleProjects.length })

  const moveSlide = (direction: -1 | 1) => {
    setActiveIndex((index) => Math.max(0, Math.min(visibleProjects.length - 1, index + direction)))
  }

  useEffect(() => {
    carouselState.current = { currentIndex, projectCount: visibleProjects.length }
  }, [currentIndex, visibleProjects.length])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return
      const { currentIndex: index, projectCount } = carouselState.current
      if (projectCount < 2) return
      const direction = event.deltaY > 0 ? 1 : -1
      const canMove = direction > 0 ? index < projectCount - 1 : index > 0
      if (!canMove) return
      event.preventDefault()
      const now = Date.now()
      if (now - lastWheelAt.current < 650) return
      lastWheelAt.current = now
      setActiveIndex((active) => Math.max(0, Math.min(projectCount - 1, active + direction)))
    }

    carousel.addEventListener('wheel', handleWheel, { passive: false })
    return () => carousel.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section
      ref={carouselRef}
      className="portfolio-carousel relative isolate h-[calc(100svh-88px)] overflow-hidden bg-[#081b36] text-white max-[980px]:h-[calc(100svh-64px)] max-[700px]:h-[calc(100svh-75px)] min-[701px]:h-auto min-[701px]:min-h-0"
      aria-label="Featured portfolio projects"
      aria-roledescription="carousel"
      onTouchStart={(event) => {
        const touch = event.touches[0]
        touchStart.current = { x: touch.clientX, y: touch.clientY }
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current
        const touch = event.changedTouches[0]
        touchStart.current = null
        if (!start || Math.abs(touch.clientY - start.y) < 48 || Math.abs(touch.clientY - start.y) < Math.abs(touch.clientX - start.x)) return
        const direction = touch.clientY < start.y ? 1 : -1
        const canMove = direction > 0 ? currentIndex < visibleProjects.length - 1 : currentIndex > 0
        if (canMove) moveSlide(direction)
      }}
    >
      <div className="absolute inset-0" aria-live="polite">
        {visibleProjects.length ? visibleProjects.map((project, index) => (
          <article
            className={`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,.8,.25,1)] ${index < currentIndex ? '-translate-x-full' : index > currentIndex ? 'translate-x-full' : 'translate-x-0'}`}
            key={project.name}
            aria-hidden={index !== currentIndex}
            inert={index !== currentIndex}
            aria-label={`${index + 1} of ${visibleProjects.length}: ${project.name}`}
          >
            <img className="absolute inset-0 h-full w-full object-cover object-center" src={project.image.replace('w=700&h=340', 'w=2000&h=1200')} alt="" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,39,.88)_0%,rgba(4,18,39,.66)_42%,rgba(4,18,39,.08)_100%),linear-gradient(0deg,rgba(4,18,39,.55),transparent_45%)]" />
            <div className="relative mx-auto flex h-full w-[min(1280px,calc(100%-72px))] flex-col justify-center pb-8 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)] max-[700px]:justify-end max-[700px]:pb-16">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold tracking-[2px] text-cyan-200 uppercase"><span className="h-px w-9 bg-cyan-300" />Selected work · {String(index + 1).padStart(2, '0')}</p>
              <span className="mb-4 w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm">{project.category}</span>
              <h2 className="max-w-[760px] text-[clamp(48px,8vw,104px)] leading-[.92] font-extrabold tracking-[-2px] text-white max-[700px]:text-[clamp(46px,13vw,76px)]">{project.name}</h2>
              <p className="mt-6 max-w-[490px] text-[15px] leading-[1.65] text-white/80 max-[700px]:mt-4 max-[700px]:text-[13px]">{project.description}</p>
              <a className="mt-7 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-white px-5 text-[12px] font-extrabold text-[#102c59] no-underline transition hover:bg-cyan-100" href={`mailto:hello@cbt.tech?subject=${encodeURIComponent(`Project inquiry: ${project.name}`)}`}>Discuss a similar project <ArrowIcon /></a>
            </div>
          </article>
        )) : <div className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-white/75">No projects match this filter. Try another category or search term.</div>}
      </div>

      <div className="absolute top-0 right-0 left-0 z-10 mx-auto flex w-[min(1280px,calc(100%-72px))] items-center justify-between gap-4 pt-6 max-[980px]:w-[min(calc(100%-48px),760px)] max-[700px]:w-[calc(100%-36px)] max-[700px]:items-start max-[700px]:pt-4">
        <div className="flex max-w-full gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-bold transition ${activeCategory === category ? 'border-white bg-white text-[#102c59]' : 'border-white/30 bg-[#071a31]/35 text-white/85 hover:border-white/70 hover:bg-white/10'}`} type="button" key={category} aria-pressed={activeCategory === category} onClick={() => { setActiveCategory(category); setActiveIndex(0) }}>{category}</button>
          ))}
        </div>
        <span className="shrink-0 pt-2 text-[10px] font-bold tabular-nums text-white/75 max-[700px]:hidden">{visibleProjects.length ? `${String(currentIndex + 1).padStart(2, '0')} / ${String(visibleProjects.length).padStart(2, '0')}` : '00 / 00'}</span>
      </div>

      {visibleProjects.length > 1 && <div className="absolute right-[max(18px,calc((100vw-1280px)/2))] bottom-7 z-10 flex items-center gap-2 max-[700px]:right-[18px] max-[700px]:bottom-5">
        <button className="grid h-11 w-11 rotate-180 place-items-center rounded-full border border-white/40 bg-[#071a31]/40 text-white backdrop-blur transition hover:bg-white hover:text-[#102c59] disabled:cursor-not-allowed disabled:opacity-40" type="button" aria-label="Previous project" onClick={() => moveSlide(-1)} disabled={currentIndex === 0}><ArrowIcon /></button>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-[#071a31]/40 text-white backdrop-blur transition hover:bg-white hover:text-[#102c59] disabled:cursor-not-allowed disabled:opacity-40" type="button" aria-label="Next project" onClick={() => moveSlide(1)} disabled={currentIndex === visibleProjects.length - 1}><ArrowIcon /></button>
      </div>}
    </section>
  )
}

export default ProjectCarousel