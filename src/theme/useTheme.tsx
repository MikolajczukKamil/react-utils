import { useEffect, useState } from 'react'

const darkThemeQuery: MediaQueryList = window.matchMedia(
  '(prefers-color-scheme: dark)'
)

/**
 * @returns `isDarkTheme`
 */
export function useDarkTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    darkThemeQuery.matches
  )

  useEffect(() => {
    const handleChangeTheme = (e: MediaQueryListEvent) =>
      setIsDarkTheme(e.matches)

    darkThemeQuery.addEventListener('change', handleChangeTheme)
    return () => darkThemeQuery.removeEventListener('change', handleChangeTheme)
  }, [])

  return isDarkTheme
}
