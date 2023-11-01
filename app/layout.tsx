'use client'

import './globals.css'
import React, { type ReactNode } from 'react'

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): ReactNode {
  return (
    <html data-mode="light">
      <body className="bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-100 font-medium">
      <div className="max-w-2xl mx-auto my-16 md:my-28 px-4">
        {children}
      </div>
      </body>
    </html>
  )
}
