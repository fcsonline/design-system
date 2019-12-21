import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minWidth: '400px',
  maxWidth: '600px',
  margin: 'auto',
  padding: '40px'
}

export default function Center ({ children }) {
  return (
    <div style={styles}>
      {children}
    </div>
  )
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
}
