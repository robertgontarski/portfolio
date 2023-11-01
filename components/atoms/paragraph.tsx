import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  isLast: boolean
}

export default function Paragraph ({ children, isLast }: Props): ReactNode {
  return (
    <p className={`${isLast ? '' : 'mb-4'} text-neutral-500 dark:text-neutral-400`}>
      {children}
    </p>
  )
}
