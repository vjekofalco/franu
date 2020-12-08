import styled from 'styled-components'

import { Text } from '../../common/text'
import { Section } from '../../common/section'
import { HeadlineTernarry } from '../../common/text'
import { brown, grayscale4 } from '../../../styles/colors'
import { mediaBreakpointDown } from '../../../styles/breakpoionts'
import { SeparationLineCustom } from '../../common/separation-line'
import {baseUnit, PAGE_CONTENT_NARROW_WIDTH} from '../../../common/constants'

const AboutUsIntroductionSection = styled(Section)`
  margin-left: auto;
  margin-right: auto;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const AboutUsIntroductionWrapper = styled.div`
  display: flex;
`

const AboutUsDescriptionWrapper = styled.div`
  padding-left: ${5 * baseUnit}px;
  
  @media ${mediaBreakpointDown.s} {
    padding-left: ${2 * baseUnit}px;
  }
`

const VisionMissionWrapper = styled.div`
  margin-top: ${2 * baseUnit}px;
`

const VisionMissionTitle = styled.span`
  font-weight: 600;
  color: ${brown};
`

export const AboutUsIntroduction = () => {
    return (<AboutUsIntroductionSection>
        <HeadlineTernarry color={brown} marginBottom={3}>Everything you ever want at one place</HeadlineTernarry>
        <AboutUsIntroductionWrapper>
            <SeparationLineCustom marginTop={0.70} color={grayscale4} maxWidth={300}/>
            <AboutUsDescriptionWrapper>
                <Text size={1.2}>
                    Kitchen is not just one more room in your home. It is center of your living space, a place where you will share not only a great meal, but also unforgivable moments with your love ones.
                </Text>
                <Text size={1.2} marginTop={0.5}>
                    Because of that, we, at Franu understand that your kitchen needs to be perfect. Not only It needs to fulfil your everyday needs it should reflect your life style.
                </Text>
                <VisionMissionWrapper>
                    <Text size={1.2} paddingLeft={1}><VisionMissionTitle>The mission</VisionMissionTitle> of Franu is dedication to the high quality and fast delivery while keeping in focus our customers needs and wishes.</Text>
                </VisionMissionWrapper>
                <VisionMissionWrapper>
                    <Text size={1.2} paddingLeft={1}><VisionMissionTitle>Our vision</VisionMissionTitle> is to bring inspiration and innovation to every single kitchen we build.</Text>
                </VisionMissionWrapper>
            </AboutUsDescriptionWrapper>
        </AboutUsIntroductionWrapper>
    </AboutUsIntroductionSection>)
}
