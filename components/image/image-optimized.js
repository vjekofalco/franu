export const ImageOptimized = ({ relativeUrl, alt, url }) => {
    if (!url && !relativeUrl) {
        return (<picture>
            <source srcSet={require('../../images/placeholder-image.png?webp')} type="image/webp" />
            <source srcSet={require('../../images/placeholder-image.png')} />
            <img src={require('../../images/placeholder-image.png')} alt={alt || ''}/>
        </picture>)
    }

    if (url) {
        return (<img src={url} alt={alt || ''}/>)
    }

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
