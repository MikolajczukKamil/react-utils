import { createContext, useContext, Provider } from 'react'

interface StrictContextOptions {
  errorMessage?: string
  name?: string
}

export function createStrictContext<T>(options: StrictContextOptions = {}) {
  const Context = createContext<T | null>(null)
  Context.displayName = options.name

  function useStrictContext() {
    const context = useContext(Context)

    if (context === null) {
      throw new Error(
        options.errorMessage ||
          `${options.name || ''} Context Provider is missing`
      )
    }

    return context
  }

  return [Context.Provider, useStrictContext] as [Provider<T>, () => T]
}
