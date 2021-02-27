import React from 'react'
import {render, screen} from '@testing-library/react'

import {Switch, Case, Default} from '../Switch'

describe('<Switch /> Component', () => {
    describe('renders falsy values like {0} or {NaN} as normal value', () => {
        test('{0}', () => {
            render(
                <Switch by={0}>
                    {0}
                </Switch>
            )

            expect(screen.queryByText('0')).toBeTruthy()
        })

        test('{0} and {NaN}', () => {
            render(
                <Switch by={0}>
                    {0}{'-'}{NaN}
                </Switch>
            )

            expect(screen.queryByText('0-NaN')).toBeTruthy()
        })
    })

    // Multiple values (EValues.c) with different positions
    describe('cascade of values', () => {
        enum EValues {a, b, c, d}

        test('enum cascade - case', () => {
            render(
                <Switch by={EValues.c}>
                    <Case value={EValues.a}>A</Case>
                    <Case value={EValues.a}>3</Case>
                    <Case value={EValues.b}>B</Case>
                    <Default>Default</Default>
                    <Case value={EValues.c}>C</Case>

                    AndNoDefault

                    <Case value={EValues.c}>2</Case>
                </Switch>
            )

            expect(screen.queryByText('C2')).toBeTruthy()
        })

        test('enum cascade - Default', () => {
            render(
                <Switch by={EValues.d}>
                    <Case value={EValues.a}>A</Case>
                    <Case value={EValues.a}>3</Case>
                    <Case value={EValues.b}>B</Case>
                    <Default>Default</Default>
                    <Case value={EValues.c}>C</Case>

                    AndNoDefault
                </Switch>
            )

            expect(screen.queryByText('DefaultAndNoDefault')).toBeTruthy()
        })
    })
})


