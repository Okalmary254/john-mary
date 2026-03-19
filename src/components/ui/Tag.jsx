export default function Tag({ children }) {
  return (
    <span className="text-[10px] text-muted dark:text-gray-400 border border-rule dark:border-gray-600 px-2 py-0.5 tracking-wide">
      {children}
    </span>
  )
}
