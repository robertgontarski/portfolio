import React, { type ReactNode } from 'react'
import Headline from '@atoms/headline'

interface Props {
  children: ReactNode
  title: string | null
}

export default function Section ({ children, title }: Props): ReactNode {
  return (
    <section className="border-b pb-10 mb-10 md:pb-16 md:mb-16">
      {(title !== null) ? <Headline option="h2">{title}</Headline> : null}
      {children}
    </section>
  )
}
