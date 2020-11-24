import { brown, grayscale3 } from '../../../styles/colors'
import { HeadlineJumbo, HeadlineTernarry } from '../../common/text'
import { JumbotronWrapper, JumbotronContent } from '../../jumbotron'

export const AboutUsJumbotron = () => {
    return (<JumbotronWrapper paddingBottom={4} paddingTop={4} noShadow image={'about-us/about-us-collage.jpg'}>
        <JumbotronContent columns>
            <HeadlineJumbo marginBottom={3} color={brown}>Start your cooking journey with us</HeadlineJumbo>
            <HeadlineTernarry color={grayscale3}>A brand new experience in kitchens design</HeadlineTernarry>
        </JumbotronContent>
    </JumbotronWrapper>)
}
