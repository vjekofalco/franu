import Link from "next/link"
import styled from "styled-components"

import { Section } from "../../common/section"
import { ButtonPrimary } from "../../common/buttons"
import { HeadlineSecondary } from "../../common/text"
import { baseUnit } from "../../../common/constants"
import { white, brown } from "../../../styles/colors"

const AboutUsCtaBannerWrapper = styled(Section)`
  text-align: center;
  background-color: ${white};
  padding-top: ${2 * baseUnit}px;
  padding-bottom: ${2 * baseUnit}px;
  box-shadow: 12px 12px 108px -12px rgba(79, 79, 79, 1);
`

export const AboutUsCtaBanner = ({ f }) => (
  <AboutUsCtaBannerWrapper>
    <HeadlineSecondary color={brown}>{f("teaser.title")}</HeadlineSecondary>
    <Link href={"/contact"}>
      <ButtonPrimary big marginTop={3}>
        {f("teaser.cta")}
      </ButtonPrimary>
    </Link>
  </AboutUsCtaBannerWrapper>
)
