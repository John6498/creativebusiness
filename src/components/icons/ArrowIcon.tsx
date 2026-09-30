type ArrowIconProps = {
  external?: boolean
}

function ArrowIcon({ external = false }: ArrowIconProps) {
  if (external) {
    return (
      <svg className="h-3.5 w-3.5 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M9 3h4v4m0-4L7 9" />
        <path d="M11 9v4H3V5h4" />
      </svg>
    )
  }

  return (
    <svg className="h-4 w-4 fill-none stroke-current [stroke-width:1.8]" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

export default ArrowIcon