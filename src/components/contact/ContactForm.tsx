import type { FormEvent } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import { contactDetails, contactSubjects } from '../../data/siteData'

function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const subject = String(form.get('subject') ?? 'General Inquiry')
    const message = String(form.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="flex h-full flex-col rounded-xl border border-[#e4eef9] bg-white/90 p-5 shadow-[0_8px_24px_rgba(41,102,166,.08)] max-[980px]:p-4" aria-labelledby="message-title">
      <p className="mb-1 text-[10px] font-extrabold tracking-[1.6px] text-[#168fe8] uppercase">Send a message</p>
      <h2 className="text-[23px] leading-tight font-extrabold text-ink" id="message-title">Get In Touch</h2>
      <p className="mb-3 text-[10px] text-copy">Fill out the form below and we’ll get back to you as soon as possible.</p>

      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3 max-[500px]:grid-cols-1">
          <label className="block text-[9px] font-bold text-[#263f70]">Full Name <span className="text-rose-500">*</span>
            <input className="mt-1 h-[31px] w-full rounded-md border border-[#d9e8fa] bg-white px-3 text-[10px] font-normal text-ink placeholder:text-[#a1b1cb] focus:border-blue-400 focus:outline-none" type="text" name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label className="block text-[9px] font-bold text-[#263f70]">Email Address <span className="text-rose-500">*</span>
            <input className="mt-1 h-[31px] w-full rounded-md border border-[#d9e8fa] bg-white px-3 text-[10px] font-normal text-ink placeholder:text-[#a1b1cb] focus:border-blue-400 focus:outline-none" type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
          </label>
        </div>
        <label className="block text-[9px] font-bold text-[#263f70]">Subject <span className="text-rose-500">*</span>
          <select className="mt-1 h-[31px] w-full rounded-md border border-[#d9e8fa] bg-white px-3 text-[10px] font-normal text-[#7c8eac] focus:border-blue-400 focus:outline-none" name="subject" defaultValue="" required>
            <option value="" disabled>Select a subject</option>
            {contactSubjects.map((subject) => <option key={subject}>{subject}</option>)}
          </select>
        </label>
        <label className="block text-[9px] font-bold text-[#263f70]">Message <span className="text-rose-500">*</span>
          <textarea className="mt-1 min-h-[56px] w-full resize-y rounded-md border border-[#d9e8fa] bg-white px-3 py-2 text-[10px] font-normal text-ink placeholder:text-[#a1b1cb] focus:border-blue-400 focus:outline-none" name="message" placeholder="Tell us about your project, question, or how we can help..." required />
        </label>
        <div className="flex items-center justify-between gap-3 max-[500px]:flex-wrap">
          <button className="inline-flex min-h-[34px] items-center gap-3 rounded-full bg-[linear-gradient(100deg,#0765f7,#00c6dc)] px-5 text-[10px] font-bold text-white shadow-[0_5px_14px_rgba(0,121,244,.15)] transition hover:-translate-y-0.5" type="submit">Send Message <ArrowIcon /></button>
          <p className="inline-flex items-center gap-1.5 text-[8px] text-[#7a8eae]"><svg className="h-3.5 w-3.5 fill-none stroke-[#0b75ed] [stroke-width:1.8]" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5 13 3v4c0 3.2-2 5.5-5 7-3-1.5-5-3.8-5-7V3l5-1.5Z"/><path d="m6 7.5 1.3 1.3L10 6"/></svg>Your information is safe with us.</p>
        </div>
      </form>
    </section>
  )
}

export default ContactForm