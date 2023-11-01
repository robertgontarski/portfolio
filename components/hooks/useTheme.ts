import { useEffect, useState } from 'react'

export const useTheme = (): boolean => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useState(mq.matches)
  const handleChange = (e: MediaQueryListEvent): void => { setIsDark(e.matches) }

  useEffect(() => {
    mq.addEventListener('change', handleChange)
    return () => { mq.removeEventListener('change', handleChange) }
  }, [])

  return isDark
}
