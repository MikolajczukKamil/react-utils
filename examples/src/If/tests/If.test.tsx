import React from 'react'
import {render, screen} from '@testing-library/react'

import {Else, ElseIf, If, Then, Unless} from '../If'

describe('<If /> Component', () => {
    describe('renders falsy values like {0} or {NaN} as normal value', () => {
        test('{0}', () => {
            render(
                <If con={true}>
                    {0}
                </If>
            )

            expect(screen.queryByText('0')).toBeTruthy()
        })

        test('{0} and {NaN}', () => {
            render(
                <If con={true}>
                    {0}{'-'}{NaN}
                </If>
            )

            expect(screen.queryByText('0-NaN')).toBeTruthy()
        })
    })

    describe('No Else', () => {
        test('simply truthy case', () => {
            render(
                <If con={true}>No then</If>
            )

            expect(screen.queryByText('No then')).toBeTruthy()
        })

        test('complex truthy case', () => {
            render(
                <If con={true}>
                    <h1 data-testid={1}>_H1_</h1>
                    <Then>
                        <p data-testid={2}>_P_</p>
                    </Then>
                    {null}
                    {false}
                    {undefined}
                    <div data-testid={3}>_DIV_</div>
                </If>
            )

            expect(screen.queryByTestId(1)).toBeTruthy()
            expect(screen.queryByTestId(2)).toBeTruthy()
            expect(screen.queryByTestId(3)).toBeTruthy()
        })

        test('simply falsy case', () => {
            render(
                <If con={false}>No then</If>
            )

            expect(screen.queryByText('No then')).toBeNull()
        })

        test('complex falsy case', () => {
            render(
                <If con={false}>
                    <h1 data-testid={1}>_H1_</h1>
                    <Then>
                        <p data-testid={2}>_P_</p>
                    </Then>
                    {null}
                    {false}
                    {undefined}
                    <div data-testid={3}>_DIV_</div>
                </If>
            )

            expect(screen.queryByTestId(1)).toBeNull()
            expect(screen.queryByTestId(2)).toBeNull()
            expect(screen.queryByTestId(3)).toBeNull()
        })
    })

    describe('ElseIf and Else', () => {
        test('else if cascade - Then', () => {
            render(
                <If con={true}>
                    <Then>Then</Then>

                    <ElseIf con={false}>ElseIf1</ElseIf>
                    <ElseIf con={false}>ElseIf2</ElseIf>

                    <Else>Else</Else>

                    <ElseIf con={true}>ElseIf3</ElseIf>
                    <ElseIf con={false}>ElseIf4</ElseIf>
                    <ElseIf con={true}>ElseIf5</ElseIf>

                    <Else>2</Else>

                    AndNoThen
                </If>
            )

            expect(screen.queryByText('ThenAndNoThen')).toBeTruthy()
        })

        test('else if cascade - ElseIf', () => {
            render(
                <If con={false}>
                    <Then>Then</Then>

                    <ElseIf con={false}>ElseIf1</ElseIf>
                    <ElseIf con={false}>ElseIf2</ElseIf>

                    <Else>Else</Else>

                    <ElseIf con={true}>ElseIf3</ElseIf>

                    <ElseIf con={true}>ElseIf4</ElseIf>
                    <ElseIf con={false}>ElseIf5</ElseIf>

                    <Else>2</Else>

                    AndNoThen
                </If>
            )

            expect(screen.queryByText('ElseIf3')).toBeTruthy()
        })

        test('else if cascade - Else', () => {
            render(
                <If con={false}>
                    <Then>Then</Then>

                    <ElseIf con={false}>ElseIf1</ElseIf>
                    <ElseIf con={false}>ElseIf2</ElseIf>

                    <Else>Else</Else>

                    <ElseIf con={false}>ElseIf3</ElseIf>
                    <ElseIf con={false}>ElseIf4</ElseIf>
                    <ElseIf con={false}>ElseIf5</ElseIf>

                    <Else>2</Else>

                    AndNoThen
                </If>
            )

            expect(screen.queryByText('Else2')).toBeTruthy()
        })
    })

    describe('<Unless /> Component, opposite of <If />', () => {
        test('Truthy case', () => {
            render(
                <Unless con={true}>Unless</Unless>
            )

            expect(screen.queryByText('Unless')).toBeNull()
        })

        test('Falsy case', () => {
            render(
                <Unless con={false}>Unless</Unless>
            )

            expect(screen.queryByText('Unless')).toBeTruthy()
        })
    })
})


