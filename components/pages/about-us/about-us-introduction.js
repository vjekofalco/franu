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

const VisionMissionText = styled(Text)`
  span {
    font-weight: 600;
    color: ${brown};
  }
`

export const AboutUsIntroduction = ({ f }) => {
    return (<AboutUsIntroductionSection>
        <HeadlineTernarry color={brown} marginBottom={3}>{f('description.title')}</HeadlineTernarry>
        <AboutUsIntroductionWrapper>
            <SeparationLineCustom marginTop={0.70} color={grayscale4} maxWidth={300}/>
            <AboutUsDescriptionWrapper>
                <Text size={1.2}>{f('description.descriptionOne')}</Text>
                <Text size={1.2} marginTop={0.5}>{f('description.descriptionTwo')}</Text>
                <VisionMissionWrapper>
                    <VisionMissionText size={1.2} paddingLeft={1} dangerouslySetInnerHTML={{ __html: f('description.missionStatement') }}></VisionMissionText>
                </VisionMissionWrapper>
                <VisionMissionWrapper>
                    <VisionMissionText size={1.2} paddingLeft={1} dangerouslySetInnerHTML={{ __html: f('description.visionStatement') }}></VisionMissionText>
                </VisionMissionWrapper>
            </AboutUsDescriptionWrapper>
        </AboutUsIntroductionWrapper>
    </AboutUsIntroductionSection>)
}
