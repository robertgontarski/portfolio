import { useEffect, useState } from 'react'

export const useTheme = (): boolean => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent): void => { setIsDark(e.matches) }

    setIsDark(mq.matches)
    mq.addEventListener('change', handleChange)
    return () => { mq.removeEventListener('change', handleChange) }
  }, [])

  return isDark
}
