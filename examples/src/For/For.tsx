import React, {ReactNode} from "react";

interface IForProps<T> {
    of: T[]
    /** Should add key prop to every element */
    children: (element: T, index: number) => ReactNode
}

/**
 * Should add key prop to every Component element
 *
 * @example
 * <For of={[1, 2, 3]}>{
 *  (nb) => nb ** 2
 * }</If>
 */
export function For<T>({children, of}: IForProps<T>) {
    return <>{of.map((el, i) => children(el, i))}</>
}
