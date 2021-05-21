import { createStrictContext } from '../strictContext'

const [NumberProvider, useNumber] = createStrictContext<number>({
  errorMessage: 'Użyj NumberProvider',
})

function Provider({ children }: any) {
  return <NumberProvider value={Math.random()}>{children}</NumberProvider>
}

function NumberP() {
  const number = useNumber()

  return <p>{number}</p>
}

export default function ContextDemo() {
  return (
    <Provider>
      <NumberP />
    </Provider>
  )
}
