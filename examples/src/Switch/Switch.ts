import {Children, FC, ReactNode} from "react"

interface ISwitchProps {
    children?: ReactNode
    /** like [ngSwitch]="?" */
    by: any
}

/**
 * @example
 * <Switch by={value}>
 *     <Case value={1}> <One /> </Case>
 *     <Case value={2}> <Two /> </Case>
 *
 *     <Default> <NoValue /> <Default>
 * </Switch>
 */
export const Switch: FC<ISwitchProps> = ({children, by}: ISwitchProps): any => {
    /** Default can be in any position in children array */
    const defaultChildren: ReactNode[] = []

    let isMatchInCases = false

    const caseChildren = Children.map(children, (child: ReactNode) => {
        if (!child) {
            defaultChildren.push(child)
            return null
        }

        // @ts-ignore
        if (child.type === Case) {
            // @ts-ignore
            if (child.props.value === by) {
                isMatchInCases = true
                return child
            }

            return null
        }

        defaultChildren.push(child)
        return null
    })

    return isMatchInCases ? caseChildren : defaultChildren
}

interface ICaseProps {
    value: any
    children: ReactNode
}

/** Use only inside `Switch` else works like `React.Fragment` */
export const Case: FC<ICaseProps> = ({children}: ICaseProps) => children as any

interface IDefaultProps {
    children?: ReactNode
}

/**
 * Use only inside `Switch` else works as `React.Fragment`
 * `Default` is optional, every component different from `Case` is treated as `Default`
 */
export const Default: FC<IDefaultProps> = ({children}: IDefaultProps) => children as any
