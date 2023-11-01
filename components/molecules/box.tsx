import { type ReactNode } from 'react'
import Headline from '@atoms/headline'

interface Props {
  children: ReactNode
  title?: string
  isLast: boolean
}

export default function Box ({ children, title, isLast }: Props): ReactNode {
  return (
    <div className={`${isLast ? '' : 'mb-4'}`}>
      {(title !== null) ? <Headline option="h3">{title}</Headline> : null}
      {children}
    </div>
  )
}
