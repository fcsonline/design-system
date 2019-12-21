import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  lineHeight: '20px',
}

const sizes = {
  xsmall: 11,
  small: 13,
  medium: 16,
  large: 18,
  xlarge: 20,
}

export default function Text ({ label, size }) {
  const textStyle = {
    ...styles,
    fontSize: `${sizes[size]}px`
  }

  return (
    <span style={textStyle}>
      {label}
    </span>
  )
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}
