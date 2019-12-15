import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  color: 'white',
  width: '100px',
  height: '100px'
}

export default function Block ({ color, title, onClick }) {
  const blockStyles = {
    ...styles,
    backgroundColor: color,
    cursor: onClick ? 'pointer' : 'default'
  }

  const extraProps = onClick ? { role: 'button' } : {}

  return (
    <div style={blockStyles} title={title} onClick={onClick} {...extraProps}>
      {title}
    </div>
  )
}

Block.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
