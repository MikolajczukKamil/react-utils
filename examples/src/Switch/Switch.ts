import {Fragment, ReactElement, ReactNode} from "react"

interface ISwitchProps<T> {
    by: T
    children: ReactNode
}

/**
 * @example
 * <Switch by={value}>
 *     <Case value={1} />
 *     <Case value={2} />
 *     {...}
 *     ?<Default />
 * </If>
 *
 * @return filtered `children`, type `ReactElement` is only to satisfy `JSX` types check
 */
export function Switch<T>({children, by}: ISwitchProps<T>): ReactElement {
    // <Switch><Case /></Switch>
    const candidates: ReactNode[] = Array.isArray(children) ? children : [children]

    return candidates.find(
        (child: any): boolean => child?.type === Case && child.props.value === by
        ) ||
        candidates.filter(
            (child: any): boolean => !child || child.type !== Case
        ) as any
}

interface ICaseProps<T> {
    value: T
    children: ReactNode
}

/**
 * Use only inside `Switch` else works like `React.Fragment`
 *
 * @return `children`, type `ReactElement` is only to satisfy `JSX` types check
 */
export function Case<T>({children}: ICaseProps<T>): ReactElement {
    return children as any
}

/**
 * Use only inside `Switch` else works like `React.Fragment`
 *
 * `Default` is optional, every component different from `Case` is treated like `Default`
 */
export const Default = Fragment
