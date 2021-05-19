import styled from 'styled-components'

import { Text } from '../../common/text'
import { SubSection } from './subSection'
import { baseUnit } from '../../../common/constants'
import { HeadlineSecondary } from '../../common/text'

export const SectionWrapper = styled.div`
  margin-top: ${2 * baseUnit}px;
`

export const BlogSection = ({ section }) => {
    const { title, text, subsections } = section

    return <SectionWrapper>
        {title && <HeadlineSecondary marginBottom={1}>{title}</HeadlineSecondary>}
        {text && <Text lineHeight={2 * baseUnit}>{text}</Text>}
        {subsections && <SubSection content={subsections.content} type={subsections.type} />}
    </SectionWrapper>
}
