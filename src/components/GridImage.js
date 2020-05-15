import React from 'react'

import './GridImage.css'

const GridImage = ({ imagePath }) => {
  return (
    <div>
      <img src={imagePath} />
    </div>
  )
}

export default GridImage
