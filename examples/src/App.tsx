import React, {useCallback, useState} from 'react'

import {If, ElseIf, Else} from "./If"
import {Switch, Case} from "./Switch"
import {For} from "./For"

function ToEnglish({num}: { num: number }) {
    return <Switch by={num}>
        <Case value={0}>Zero</Case>
        <Case value={1}>One</Case>
        <Case value={2}>Two</Case>
        <Case value={3}>Three</Case>

        Unknown
    </Switch>
}

export default function App() {
    const [numbers, setNumbers] = useState([0])

    const addNumber = useCallback(() => {
        setNumbers(l => [...l, l[l.length - 1] + 1])
    }, [])

    const removeNumber = useCallback(() => {
        setNumbers(([_, ...l]) => l)
    }, [])

    return (
        <>
            <h2>{numbers[0]} - {numbers[numbers.length - 1]}</h2>

            <If con={numbers.length >= 5}>
                <button onClick={removeNumber}>-</button>

                <ElseIf con={numbers.length === 1}>
                    Start!
                </ElseIf>

                <Else>
                    <hr/>
                </Else>
            </If>

            <For of={numbers}>
                {(n) => (
                    <p key={n}>
                        {n} - <ToEnglish num={n}/>
                    </p>
                )}
            </For>

            <If con={numbers.length < 5}>
                <button onClick={addNumber}>+</button>

                <Else>
                    <hr/>
                </Else>
            </If>
        </>
    )
}
