import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from "./ImageGallery.module.css"

export function ImageGallery({ images, getLargeImage }) {
 
  return ( 

  <ul className={css.ImageGallery}>
    
    {images.map(image => 
        (
<ImageGalleryItem getLargeImage={getLargeImage} key={image.id} src={image.webformatURL} largeImage={image.largeImageURL} alt={image.tags}/>
        )
    )}
    
  
  </ul>
  )
}

ImageGallery.propTypes = {};
