export type LineIconName = 'people' | 'code' | 'calendar' | 'star' | 'bulb' | 'shield' | 'target' | 'eye'

function LineIcon({ name }: { name: LineIconName }) {
  const iconClass = 'h-6 w-6 fill-none stroke-current [stroke-width:1.8] [stroke-linecap:round] [stroke-linejoin:round]'

  switch (name) {
    case 'people':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.5a4 4 0 0 1 0 7.5m2 4h1a4 4 0 0 1 4 4v2" /></svg>
    case 'code':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></svg>
    case 'calendar':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m-13 4 2 2 4-4" /></svg>
    case 'star':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
    case 'bulb':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.7c.6.4 1 1 1 1.8h6c0-.8.4-1.4 1-1.8A7 7 0 0 0 12 2Z" /><path d="M12 5v2m-4 1 1.5 1.5m6.5-1.5L14.5 9" /></svg>
    case 'shield':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4" /></svg>
    case 'target':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><path d="m21 3-8.5 8.5M16 3h5v5" /></svg>
    case 'eye':
      return <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3" /></svg>
  }
}

export default LineIcon