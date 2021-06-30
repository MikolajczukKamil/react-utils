import { useDarkTheme } from '../theme'

export default function ThemeDemo() {
  const isDarkTheme = useDarkTheme()

  return (
    <div style={{ backgroundColor: isDarkTheme ? 'gray' : 'lightgrey' }}>
      {isDarkTheme ? 'dark' : 'light'}
    </div>
  )
}
