import { useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import { portfolioReviews } from '../../data/siteData'

function ReviewCarousel() {
  const [activeReview, setActiveReview] = useState(0)

  const moveReview = (direction: -1 | 1) => {
    setActiveReview((index) => (index + direction + portfolioReviews.length) % portfolioReviews.length)
  }

  return (
    <div className="flex min-w-0 flex-col justify-between gap-3 rounded-xl border border-white/15 bg-[#081b36] p-4 text-white shadow-[0_14px_34px_rgba(18,55,103,.24)]" role="region" aria-roledescription="carousel" aria-label="Client reviews">
      <div className="overflow-hidden" aria-live="polite">
        <div className="flex transition-transform duration-500 ease-[cubic-bezier(.22,.8,.25,1)] motion-reduce:transition-none" style={{ transform: `translateX(-${activeReview * 100 / portfolioReviews.length}%)` }}>
          {portfolioReviews.map((review, index) => (
            <blockquote className="flex min-w-0 shrink-0 basis-full items-center gap-3" key={`${review.name}-${index}`} aria-hidden={index !== activeReview} inert={index !== activeReview}>
              <img className="h-20 w-20 shrink-0 rounded-full object-cover" src={review.image} alt={review.name} loading="lazy" />
              <div className="min-w-0"><span className="mb-1 block text-[9px] font-bold uppercase text-cyan-200">Client review · {String(index + 1).padStart(2, '0')}</span><span className="text-xl leading-none font-black text-cyan-200" aria-hidden="true">“</span><p className="text-[12px] leading-[1.45] text-white/85">{review.quote}</p><cite className="mt-1 block text-[11px] font-bold not-italic text-white">{review.name} <span className="font-normal text-cyan-100/70">· {review.role}</span></cite></div>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/20 pt-2">
        <span className="text-[11px] font-semibold text-white/75" aria-live="polite">Review {activeReview + 1} of {portfolioReviews.length}</span>
        <div className="flex items-center gap-2">
          <button className="grid h-9 w-9 rotate-180 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#102c59]" type="button" aria-label="Previous review" onClick={() => moveReview(-1)}><ArrowIcon /></button>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#102c59]" type="button" aria-label="Next review" onClick={() => moveReview(1)}><ArrowIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel