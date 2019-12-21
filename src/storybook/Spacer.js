import React from 'react';
import PropTypes from 'prop-types';

import { spaces } from '../tokens/Spaces'

const styles = {
  display: 'block'
}

export default function Spacer ({ space }) {
  const value = spaces[space]
  const spacerStyles = {
    ...styles,
    height: `${value}px`,
    width: `${value}px`
  }

  return (
    <div style={spacerStyles}>
      <svg width={value} height={value} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <text x="40" y="35" style={{ fill: "red" }}>{value}</text>
        <line x1="0" y1="50" x2="100" y2="50" style={{ stroke: "red", strokeWidth: 2}} />
      </svg>
    </div>
  )
}

Spacer.propTypes = {
  space: PropTypes.string.isRequired,
}
