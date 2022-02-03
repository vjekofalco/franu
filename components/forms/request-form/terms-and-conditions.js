import { WarningMessage } from "../../warning-message"
import { FormInputField } from "../common"

export const TermsAndConditions = (props) => (
  <>
    <FormInputField
      name="termsAndConditions"
      label={`${props.f("common.termsAndConditionsClaim")}`}
      type="checkbox"
      {...props}
    />
    <WarningMessage message={`${props.f("common.locationDisclaimer")}`} bold />
  </>
)
