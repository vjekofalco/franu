import { HeadlineJumbo } from '../../common/text'

export const BlogHeadline = ({ title, subtitle, image }) => (
    <>
        {title && <HeadlineJumbo>{title}</HeadlineJumbo>}
    </>
)
