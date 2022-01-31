export const ImageOptimized = ({ relativeUrl, alt, url, width, height }) => {
  if (!url && !relativeUrl) {
    return (
      <picture>
        <source
          srcSet={require("../../images/placeholder-image.png?webp")}
          type="image/webp"
        />
        <source srcSet={require("../../images/placeholder-image.png")} />
        <img
          src={require("../../images/placeholder-image.png")}
          alt={alt || ""}
        />
      </picture>
    )
  }

  if (url) {
    return <img src={url} alt={alt || ""} width={width} height={height} />
  }

  return (
    <picture>
      <source
        srcSet={require("../../images/" + relativeUrl + "?webp")}
        type="image/webp"
      />
      <source srcSet={require("../../images/" + relativeUrl)} />
      <img
        src={require("../../images/" + relativeUrl)}
        alt={alt || ""}
        width={width}
        height={height}
      />
    </picture>
  )
}

export const ImageOptimizedSvg = ({ relativeUrl, alt }) => {
  return <img src={require("../../images/" + relativeUrl)} alt={alt || ""} />
}
