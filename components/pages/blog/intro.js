import React from 'react'
import styled from 'styled-components'

import { Text } from '../../common/text'
import { baseUnit } from '../../../common/constants'

const IntrosWrapper = styled.section`
  padding: ${2 * baseUnit}px 0;
`

export const BlogIntro = ({ intros }) => {
    if (!intros || intros.length <= 0) {
        return null
    }

    return <IntrosWrapper>
        {intros.map((intro, i) => (<Text lineHeight={2 * baseUnit} marginTop={i > 0 ? 1 : 0}>{intro}</Text>))}
    </IntrosWrapper>
}
