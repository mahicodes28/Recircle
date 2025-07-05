import React from 'react'
import InnerImageZoomLib from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const InnerImageZoom = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
      <InnerImageZoomLib
        src="/path/to/image.jpg"
        zoomSrc="/path/to/zoom-image.jpg"
        width="100%"
        height="auto"
        zoomType="hover"
        className="w-full h-auto object-contain"
        zoomPreload={true}
      />
    </div>
  )
}

export default InnerImageZoom