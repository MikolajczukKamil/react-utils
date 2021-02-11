import React, {Fragment, FunctionComponent, ReactNode} from "react";

interface IIfProps {
    con: boolean
    children: ReactNode
}

/**
 * Then is optional, every component different from ElseIf and Else is like Then
 *
 * @example
 * <If con={value < 1}>
 *     <Then />
 *     <Component />
 *     <ElseIf con={value < 2} />
 *     <ElseIf con={value < 3} />
 *     <Else />
 * </If>
 */
export function If({children, con}: IIfProps) {
    if (!Array.isArray(children)) {
        // Simple <If> {...} </If>
        return <>{con ? children : null}</>
    }

    /**
     * <If>
     *     <Then>
     *     ...<ElseIf>
     *     ?<Else>
     * </If>
     */

    let lookElse: boolean = !con;

    return <>{
        children.filter((child: any) => {
            // null
            if (!child) return false;

            if (child.type === ElseIf) {
                if (lookElse && child.props.con) {
                    lookElse = false;
                    return true;
                }

                return false;
            }

            if (child.type === Else) {
                return lookElse && !con;
            }

            return con;
        })
    }</>
}

interface IThenOrElseProps {
    children: ReactNode
}

/**
 * Use only inside If else works like React.Fragment
 *
 * Optional,
 * every component different from ElseIf and Else is like Then,
 * default value if condition is true
 */
export const Then: FunctionComponent<IThenOrElseProps> = Fragment;

/**
 * Use only inside If else works like React.Fragment
 */
export function Else({children}: IThenOrElseProps) {
    return <>{children}</>;
}

/**
 * Use only inside If else works like React.Fragment
 */
export function ElseIf({children}: IIfProps) {
    return <>{children}</>;
}

