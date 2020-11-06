import styled from 'styled-components'

export const HomePageGalleryItemContent = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: rgba(242, 242, 242, 0);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  ${({ active }) => active && `
      visibility: visible;
      transition: background-color 300ms;
      background-color: rgba(242, 242, 242, 0.6);
  `}
`

