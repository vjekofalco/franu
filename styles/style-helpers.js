import { baseUnit } from "../common/constants";

export const decMarginAuto = () => 'margin-auto {margin: auto};'
export const decMargin = (marginType, multiplier) => `${marginType}: ${baseUnit * multiplier}px;`
export const decPadding = (paddingType, multiplier) => `${paddingType}: ${baseUnit * multiplier}px;`

export const decWithMargins = (props) => {
    return `
    ${addMarginAuto(props.marginAuto)}
    ${addMargin('margin', props.margin)}
    ${addMargin('margin-top', props.marginTop)}
    ${addMargin('margin-left', props.marginLeft)}
    ${addMargin('margin-right', props.marginRight)}
    ${addMargin('margin-bottom', props.marginBottom)}
 `
}

export const decWithPadding = (props) => {
    return `
    ${addPadding('padding', props.padding)}
    ${addPadding('padding-top', props.paddingTop)}
    ${addPadding('padding-left', props.paddingLeft)}
    ${addPadding('padding-right', props.paddingRight)}
    ${addPadding('padding-bottom', props.paddingBottom)}
 `
}

function addMargin (marginType, value) {
    return (value && decMargin(marginType, value)) || ''
}

function addPadding (paddingType, value) {
    return (value && decPadding(paddingType, value)) || ''
}

function addMarginAuto (value) {
    return (value && 'margin: auto;') || ''
}
