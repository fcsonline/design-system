import React from 'react';
import PropTypes from 'prop-types';

const styles = {}

export default function Content ({ children }) {
  return (
    <div style={styles}>
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}
