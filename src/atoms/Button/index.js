import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '600',
  height: '50px',
  padding: '13px 23px',
  backgroundColor: '#7c73e6',
  border: '2px solid transparent',
  color: 'white',
  borderRadius: '5px',
  outline: 'none',
  cursor: 'pointer',
}

export default function Button ({ label }) {
  return (
    <button
      style={styles}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
