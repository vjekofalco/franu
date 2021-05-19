import styled from 'styled-components'
import { Text } from '../../common/text'
import {baseUnit} from "../../../common/constants";

const BlogList = styled.ul`
  list-style: none;
`

const BlogListItem = styled.li`
  padding: ${baseUnit}px 0 0 ${2 * baseUnit}px;
  position: relative;
  line-height: 24px;
  
  &::before {
    content: "-";
    margin-right: ${baseUnit}px;
    position: absolute;
    left: ${baseUnit}px;
  }
`

const ListSubSection = ({ content }) => {
    if (!content || content.length <= 0) {
        return null
    }

    return <BlogList>
        {content.map(c => (<BlogListItem>{c}</BlogListItem>))}
    </BlogList>
}

const TextSubSection = ({ content }) => {
    if (!content || content.length <= 0) {
        return null
    }

    return <>
        {content.map(c => (<Text marginTop={1} lineHeight={2 * baseUnit}>{c}</Text>))}
    </>
}

export const SubSection = ({ content, type }) => {
    switch (type) {
        case 'list':
            return <ListSubSection content={content}/>
        case 'text':
            return <TextSubSection content={content}/>
        default:
            return null
    }
}
