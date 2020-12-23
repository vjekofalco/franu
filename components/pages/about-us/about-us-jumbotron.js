import { brown, grayscale3 } from '../../../styles/colors'
import { HeadlineJumbo, HeadlineTernarry } from '../../common/text'
import { JumbotronWrapper, JumbotronContent } from '../../jumbotron'

export const AboutUsJumbotron = ({ f }) => {
    return (<JumbotronWrapper paddingBottom={4} paddingTop={4} noShadow image={'about-us/about-us-collage.jpg'}>
        <JumbotronContent columns>
            <HeadlineJumbo marginBottom={3} color={brown}>{f('jumbotron.title')}</HeadlineJumbo>
            <HeadlineTernarry color={grayscale3}>{f('jumbotron.subTitle')}</HeadlineTernarry>
        </JumbotronContent>
    </JumbotronWrapper>)
}
