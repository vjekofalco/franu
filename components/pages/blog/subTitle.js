import styled from 'styled-components'

import { Text } from '../../common/text'
import { grayscale4 } from '../../../styles/colors'

const SubtitleWrapper = styled.div`
  justify-content: space-between;
`

export const SubTitle = ({ subTitle, date }) => {
    if (!subTitle || !date) {
        return null
    }

    return (<SubtitleWrapper>
        <Text size={1.25} bold color={grayscale4}>{subTitle}</Text>
        <Text size={1.25} color={grayscale4}>{date}</Text>
    </SubtitleWrapper>)
}
