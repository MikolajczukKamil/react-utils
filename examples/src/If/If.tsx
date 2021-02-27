import React, {Fragment, FunctionComponent, ReactElement, ReactNode} from "react"

interface IIfProps {
    con: boolean
    children: ReactNode
}

/**
 * @example
 * <If con={value < 1}>
 *     <Then />
 *     <Component />
 *     <ElseIf con={value < 2} />
 *     <ElseIf con={value < 3} />
 *     <Else />
 * </If>
 *
 * @return filtered children, type ReactElement is only to satisfy JSX types check
 */
export function If({children, con}: IIfProps): ReactElement {
    if (!Array.isArray(children)) {
        // Simple <If> {...} </If>
        return con ? children as any : <></>
    }

    /**
     * <If>
     *     <Then>
     *     ...<ElseIf>
     *     ?<Else>
     * </If>
     */

    let lookElse: boolean = !con

    const positiveFiltered: any = children.filter((child: any): boolean => {
        // null or {0}
        if (!child) return con

        if (child.type === ElseIf) {
            if (lookElse && child.props.con) {
                lookElse = false
                return true
            }

            return false
        }

        if (child.type === Else) {
            return false
        }

        return con
    })

    /**
     * Else can be in any position in children array
     */
    return positiveFiltered.length > 0 || con ? positiveFiltered : children.filter((child: any) => child?.type === Else)
}

interface IThenOrElseProps {
    children: ReactNode
}

/**
 * Use only inside `If` else works like `React.Fragment`
 *
 * @return `children`, type `ReactElement` is only to satisfy `JSX` types check
 */
export function Else({children}: IThenOrElseProps): ReactElement {
    return children as any
}

/**
 * Use only inside `If` else works like `React.Fragment`
 *
 * @return `children`, type `ReactElement` is only to satisfy `JSX` types check
 */
export function ElseIf({children}: IIfProps): ReactElement {
    return children as any
}

/**
 * Use only inside `If` else works like `React.Fragment`
 *
 * `Then` is optional, every component different from `ElseIf` and `Else` is treated like `Then`
 */
export const Then: FunctionComponent<IThenOrElseProps> = Fragment
