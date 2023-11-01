import React, { type ReactNode } from 'react'
import Link from 'next/link'
import Headline from '@atoms/headline'

interface Props {
  children?: ReactNode
  href: string
  target?: string
  title?: string
  linkText?: string
  isLast: boolean
}

export default function Redirect ({ children, href, target, title, linkText, isLast }: Props): ReactNode {
  return (
    <Link href={href} target={target} className={`${isLast ? '' : 'mb-4'} block border-l border-l-neutral-50 dark:border-l-neutral-900 hover:border-l-emerald-600 dark:hover:dark:border-l-emerald-600 transition-all duration-300 hover:pl-4 hover:text-emerald-600`}>
      {title !== null ? <Headline option="h3">{title}</Headline> : null}
      {children}
      {linkText !== null ? <span className="text-sm font-bold inline-block md:hidden">{linkText}</span> : null}
    </Link>
  )
}
