import { Zoom, Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { Popup } from '../popup'

export const PopupGallery = ({ galleryTitle, images, onClose, defaultIndex= 0 }) => {
    if (!images || images.length <= 0) return null

    const zoomInProperties = {
        indicators: false,
        scale: 1.4,
        defaultIndex
    }

    return (<Popup title={galleryTitle} onClose={() => onClose()}>
        <Zoom {...zoomInProperties}>
            {images.map((i, index) => (
                <div key={index} style={{width: "100%", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                    <img style={{ maxWidth: "100%", objectFit: "cover", maxHeight: "75vh" }} src={i.url} />
                </div>
            ))}
        </Zoom>
    </Popup>)
}
