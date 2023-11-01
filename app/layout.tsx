'use client'

import './globals.css'
import React, { type ReactNode } from 'react'
import { useTheme } from '@/components/hooks/useTheme'

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): ReactNode {
  const isDarkMode = useTheme()

  return (
    <html data-mode={isDarkMode ? 'dark' : 'light'}>
      <body className="bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-100 font-medium">
      <div className="max-w-2xl mx-auto my-16 md:my-28 px-4">
        {children}
      </div>
      </body>
    </html>
  )
}
