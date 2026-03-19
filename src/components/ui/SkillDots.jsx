export default function SkillDots({ level, max = 5 }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < level
              ? 'bg-ink dark:bg-gray-200'
              : 'bg-rule dark:bg-gray-600'
          }`}
        />
      ))}
    </span>
  )
}
