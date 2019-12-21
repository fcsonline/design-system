import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexDirection: 'row',
}

const anchors = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center'
}

export default function Row ({ children, anchor }) {
  const rowStyles = {
    ...styles,
    alignItems: anchors[anchor]
  }

  return (
    <div style={rowStyles}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.string,
}
