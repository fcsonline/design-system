import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexDirection: 'column'
}

const anchors = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
}

export default function Column ({ children, anchor = 'center' }) {
  const columnStyles = {
    ...styles,
    alignItems: anchors[anchor]
  }

  return (
    <div style={columnStyles}>
      {children}
    </div>
  )
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.string,
}
