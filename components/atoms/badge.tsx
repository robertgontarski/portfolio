import { type ReactNode } from 'react'

interface Props {
  names: string[]
}
export default function Badge ({ names }: Props): ReactNode {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {names.map((name, index) => (
        <span key={index}
              className="bg-emerald-600 dark:bg-emerald-800 text-neutral-50 dark:text-neutral-300 rounded-full px-2 py-1 text-xs font-bold mb-2">{name}</span>
      ))}
    </div>
  )
}
