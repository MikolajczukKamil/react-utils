import React from 'react'

import {Else, ElseIf, If, Then, Unless} from "../If"

export default function IfDemo() {
    const magicNumber = Math.round(Math.random() * 10)

    return (
        <p>
            value = {' '}

            <If con={magicNumber < 4}>
                <Then> Too little 💚 </Then>

                <ElseIf con={magicNumber <= 6}> Average 💎 </ElseIf>

                <Else> Many 🧡 </Else>
            </If>

            <Unless con={magicNumber === 0}>
                <p>Positive value: ${magicNumber * 123}.99</p>
            </Unless>
        </p>
    )
}
