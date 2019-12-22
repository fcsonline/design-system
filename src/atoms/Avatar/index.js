import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  borderRadius: '10px',
}

import { sizes } from '../../tokens/Sizes'

export default function Avatar ({ src, title, size }) {
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

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}
