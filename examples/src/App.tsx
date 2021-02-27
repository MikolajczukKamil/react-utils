import React from 'react'

import SwitchDemo from "./examples/switch"
import IfAndUnlessDemo from "./examples/if"
import ForDemo from "./examples/for"

export default function App() {
    return (
        <main>
            <h1>➣ Demo</h1>

            <section>
                <h2>Switch Case Default</h2>

                <SwitchDemo/>
            </section>

            <section>
                <h2>If ElseIf Else, Unless</h2>

                <IfAndUnlessDemo/>
            </section>

            <section>
                <h2>For</h2>

                <ForDemo/>
            </section>
        </main>
    )
}
