import styled from 'styled-components'
import { useRouter } from "next/router"

import { MobileHeader } from './mobile-header'
import { DesktopHeader } from './desktop-header'
import { PAGE_CONTENT_NARROW_WIDTH, baseUnit } from '../../common/constants'

const HeaderWrapper = styled.div`
  ${({absolute}) => absolute && `
    position: absolute;
    left: 0;
    right: 0;
    z-index:100;
    background-color: rgba(255, 255, 255, 0.3);
  `}
`

export const Header = () => {
    const router = useRouter()
    const isHomePage = router.pathname === '/'

    const slideOnHomePage = (id) => {
        if (!document) return

        const route = `/#${id}`

        if (!isHomePage) {
            router.push(route)
        } else {
            const elem = document.getElementById(id)
            elem.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        }
    }

    return (<HeaderWrapper absolute={isHomePage}>
        <DesktopHeader slideOnHomePage={slideOnHomePage}/>
        <MobileHeader slideOnHomePage={slideOnHomePage}/>
    </HeaderWrapper>)
}
