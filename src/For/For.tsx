import { ReactElement, ReactNode } from 'react'

interface ForProps<T> {
  /** array to iterate over */
  of?: T[] | null
  /** Should add key prop to every element */
  children: (element: T, index: number, array: T[]) => ReactNode
}

const empty: [] = []

/**
 * Should add `key` prop to every Component element
 *
 * @example
 * <For of={[1, 2, 3]}>{
 *  (nb) => <p>{ nb ** 2 }</p>
 * }</If>
 *
 * @return Array of rendered values
 */
export function For<T>({
  children: iteratee,
  of: array,
}: ForProps<T>): ReactElement<any, any> {
  if (!array) return empty as any

  let index = -1
  const length = array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }

  return result as any
}
