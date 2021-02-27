import React from 'react'
import {render, screen} from '@testing-library/react'

import {For} from '../For'

describe('<For /> Component', () => {
    test('Simple wrapper for rendered elements', () => {
        render(
            <For of={[1, 'b', 3]}>
                {num => num}
            </For>
        )

        expect(screen.queryByText('1b3')).toBeTruthy()
    })
})
