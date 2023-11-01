import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  isLast: boolean
}

export default function List ({ children, isLast }: Props): ReactNode {
  return (
    <ul className={`${isLast ? '' : 'mb-4'} list-disc list-inside text-neutral-500 dark:text-neutral-400`}>
      {children}
    </ul>
  )
}
