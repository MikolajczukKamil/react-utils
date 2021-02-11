import React, {Fragment, FunctionComponent, ReactNode} from "react";

interface IForProps<T> {
    of: T[]
    children: (element: T, index: number) => ReactNode
}

/**
 * Then is optional, every component different from ElseIf and Else is like Then
 *
 * @example
 * <For of={[1, 2, 3]}>{
 *  (nb) => nb ** 2
 * }</If>
 */
export function For<T>({children, of}: IForProps<T>) {
    return <>{of.map((el, i) => children(el, i))}</>
}
