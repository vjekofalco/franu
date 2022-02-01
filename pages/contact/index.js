import { useIntl } from "react-intl"
import styled from "styled-components"

import { ContactPageRequestForm } from "../../components/forms/contact-page-request-form"
import { PAGE_CONTENT_NARROW_WIDTH, baseUnit } from "../../common/constants"

const HomePageStepsBarWrapper = styled.div`
  margin: 0 auto;
  padding: ${2 * baseUnit}px ${baseUnit}px ${3 * baseUnit}px ${baseUnit}px;
  max-width: ${PAGE_CONTENT_NARROW_WIDTH}px;
`

const ContactPage = () => {
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <HomePageStepsBarWrapper>
      <ContactPageRequestForm f={f} />
    </HomePageStepsBarWrapper>
  )
}

export default ContactPage
