import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { Popup } from '../popup'

export const PopupGallery = ({ galleryTitle, images, onClose }) => {
    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }

    return (<Popup title={galleryTitle} onClose={() => onClose()}>
        <Zoom {...zoomInProperties}>
            {images.map((i, index) => (
                <div key={index} style={{width: "100%"}}>
                    <img style={{ objectFit: "cover", width: "100%" }} src={i.url} />
                </div>
            ))}
        </Zoom>
    </Popup>)
}
