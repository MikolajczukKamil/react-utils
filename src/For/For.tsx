import {ReactElement, ReactNode} from "react"

interface IForProps<T> {
    /** array to iterate over */
    of: T[]
    /** Should add key prop to every element */
    children: (element: T, index: number, array: T[]) => ReactNode
}

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
export function For<T>({children, of}: IForProps<T>): ReactElement {
    // type `ReactElement` is only to satisfy `JSX` types check
    return of.map(children) as any
}
