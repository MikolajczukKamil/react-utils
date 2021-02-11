import React from 'react';
import {If, Then, ElseIf, Else} from "./If";
import {For} from "./For";

function Test() {
    const value = Math.random() * 4
    const value2 = Math.random() * 2

    return (
        <If con={value < 1}>
            <b>S</b>t<Then>art</Then>

            <If con={value2 < 1}>
                {' '}Value 2 is {value2};

                <Else>
                    Value 2 is too big
                </Else>
            </If>

            <ElseIf con={value < 2}>
                ElseIf 1
            </ElseIf>

            <ElseIf con={value < 3}>
                ElseIf 2
            </ElseIf>

            <Else>
                Else
            </Else>

            {null}
        </If>
    );
}

export default function App() {
    return <div>
        <If con={Math.random() < 0.5}>
            <For of={Array(10).fill(0)}>
                {
                    (_, i) => <div key={i}>
                        {i.toString().padStart(2, '_')}
                        <Test/>
                    </div>
                }
            </For>

            <Else>
                <For of={Array(20).fill(0)}>
                    {
                        (_, i) => <div key={i}>
                            {i.toString().padStart(2, '-')}
                            <Test/>
                        </div>
                    }
                </For>
            </Else>
        </If>
    </div>
}
