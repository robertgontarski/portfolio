import React, { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  option: string
}

export default function Headline ({ children, option }: Props): ReactNode {
  if (option === 'h2') {
    return (
      <h2 className="text-2xl mb-6 font-bold italic">
        {children}
      </h2>
    )
  } else if (option === 'h3') {
    return (
      <h3 className="text-xl font-bold">
        {children}
      </h3>
    )
  } else {
    return null
  }
}
