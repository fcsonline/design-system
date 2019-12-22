import React from 'react';
import PropTypes from 'prop-types';

import { sizes } from '../../tokens/Sizes'

const styles = {
  borderRadius: '10px',
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
