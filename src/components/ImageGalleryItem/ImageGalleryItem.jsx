import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ src, alt, largeImage, getLargeImage }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={getLargeImage}
        src={src}
        alt={alt}
        data-image={largeImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  getLargeImage: PropTypes.func.isRequired,
};
