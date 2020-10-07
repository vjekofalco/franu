export const ImageOptimized = ({ relativeUrl, alt }) => {
    return (
        <picture>
            <source srcSet={require('../../public/images/' + relativeUrl + '?webp')} type="image/webp" />
            <source srcSet={require('../../public/images/' + relativeUrl)} />
            <img src={require('../../public/images/' + relativeUrl)} alt={alt || ''}/>
        </picture>
    )
}

export const ImageOptimizedSvg = ({ relativeUrl, alt }) => {
    return (<img src={require('../../public/images/' + relativeUrl)} alt={alt || ''}/>)
}
