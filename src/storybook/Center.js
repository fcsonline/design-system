import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  textAlign: 'center',
  maxWidth: '400px',
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
