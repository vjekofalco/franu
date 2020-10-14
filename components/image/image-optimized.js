export const ImageOptimized = ({ relativeUrl, alt }) => {
    return (
        <picture>
            <source srcSet={require('../../images/' + relativeUrl + '?webp')} type="image/webp" />
            <source srcSet={require('../../images/' + relativeUrl)} />
            <img src={require('../../images/' + relativeUrl)} alt={alt || ''}/>
        </picture>
    )
}

export const ImageOptimizedSvg = ({ relativeUrl, alt }) => {
    return (<img src={require('../../images/' + relativeUrl)} alt={alt || ''}/>)
}
