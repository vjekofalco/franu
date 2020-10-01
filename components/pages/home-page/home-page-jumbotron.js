import styled from 'styled-components'

import { HeadlineJumbo } from "../../text";
import { PAGE_CONTENT_NARROW_WIDTH } from "../../../common/constants";

const HomePageJumbotronWrapper = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  
  ${({ image }) => image && `&:after {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-image: url('/images/home-page/background.jpg');
  background-repeat: no-repeat;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  }`}
`

const HomePageJubotronContent = styled.div`
  z-index: 100;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

export const HomePageJumbotron = () => {
    return (<HomePageJumbotronWrapper image={'/images/home-page/background.jpg'}>
        <HomePageJubotronContent>
            <HeadlineJumbo>Franu, wo das Kochen beginnt</HeadlineJumbo>
        </HomePageJubotronContent>
    </HomePageJumbotronWrapper>)
}
