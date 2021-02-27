import {ReactElement, ReactNode} from "react"

interface IForProps<T> {
    of: T[]
    /** Should add key prop to every element */
    children: (element: T, index: number, array: T[]) => ReactNode
}

/**
 * Should add `key` prop to every Component element
 *
 * @example
 * <For of={[1, 2, 3]}>{
 *  (nb) => nb ** 2
 * }</If>
 *
 * @return Array of rendered values, type `ReactElement` is only to satisfy `JSX` types check
 */
export function For<T>({children, of}: IForProps<T>): ReactElement {
    return of.map(children) as any
}
