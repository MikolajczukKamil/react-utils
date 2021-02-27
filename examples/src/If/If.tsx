import {FC, Children, ReactNode} from "react"

interface IIfProps {
    /** condition like *ngIf="?" */
    con: boolean
    children?: ReactNode
}

/**
 * Children other then `ElseIf` and `Else` are treated as `Then`
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
export const If: FC<IIfProps> = ({children, con}: IIfProps): any => {
    /** Whether the condition has already been met */
    let lookElse: boolean = !con

    /** Else can be in any position in children array */
    const elseChildren: ReactNode[] = []

    const thenAndElseIfChildren = Children.map(children, (child: ReactNode) => {
        if (!child) {
            return con ? child : null
        }

        // @ts-ignore
        if (child.type === ElseIf) {
            // @ts-ignore
            if (lookElse && child.props.con) {
                lookElse = false
                return child
            }

            return null
        }

        // @ts-ignore
        if (child.type === Else) {
            elseChildren.push(child)
            return null
        }

        return con ? child : null
    })

    return lookElse ? elseChildren : thenAndElseIfChildren
}

/** not If */
export const Unless: FC<IIfProps> = ({con, ...props}: IIfProps) => If({...props, con: !con})


/** Use only inside `If` else works as `React.Fragment` */
export const ElseIf: FC<IIfProps> = ({children}: IIfProps) => children as any


interface IThenOrElseProps {
    children?: ReactNode
}

/** Use only inside `If` else works as `React.Fragment` */
export const Else: FC<IThenOrElseProps> = ({children}: IThenOrElseProps) => children as any

/**
 * Use only inside `If` else works as `React.Fragment`
 * `Then` is optional, every component different from `ElseIf` and `Else` is treated as `Then`
 */
export const Then: FC<IThenOrElseProps> = ({children}: IThenOrElseProps) => children as any
