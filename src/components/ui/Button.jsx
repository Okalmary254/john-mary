export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  disabled,
  type = 'button',
  download,
  className = '',
}) {
  const base = 'inline-block text-[12px] tracking-widest font-mono transition-colors disabled:opacity-50 cursor-pointer'

  const variants = {
    primary: 'bg-ink dark:bg-white text-bg dark:text-ink px-6 py-2.5 hover:bg-accent dark:hover:bg-accent dark:hover:text-white',
    outline: 'border border-ink dark:border-gray-400 text-ink dark:text-gray-200 px-6 py-2.5 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent',
    ghost:   'text-ink dark:text-gray-200 border-b border-ink dark:border-gray-400 pb-px hover:text-accent hover:border-accent dark:hover:text-accent dark:hover:border-accent',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (as === 'a') {
    return (
      <a href={href} className={cls} download={download}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
