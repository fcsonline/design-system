import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  borderRadius: '10px',
}

const sizes = {
  small: 16,
  medium: 32,
  large: 64,
}

export default function Icon ({ src, title, size }) {
  const width = sizes[size]
  const height = sizes[size]

  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={title}
      title={title}
      style={styles}
    />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}
