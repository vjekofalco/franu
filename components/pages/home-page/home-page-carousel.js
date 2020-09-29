import styled from 'styled-components'
import { Carousel } from "react-responsive-carousel"

const HomePageCarouselItemWrapper = styled.div`
  height: 100vh;
  
  ${({ image }) => image && `background-image: url('${image}');
    background-size: cover;
    background-repeat: no-repeat;
  `}
`

const HomePageCarouselItem = ({ item }) => (<HomePageCarouselItemWrapper image={item.image}>

</HomePageCarouselItemWrapper>)

export const HomePageCarousel = () => {
    const homePageCarouselItems = [
        {
            image: '/images/home-page/background.jpg',
            title: 'Franu, wo das Kochen beginnt'
        }
    ]
    return (<Carousel showArrows={false} showThumbs={false} showStatus={false} showIndicators={false}>
        {homePageCarouselItems.map(
            i => (<HomePageCarouselItem key={i.title.split(' ').join('-')} item={i}/>)
        )}
    </Carousel>)
}
