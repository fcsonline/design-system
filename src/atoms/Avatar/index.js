import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sizes } from '../../tokens/Sizes'

const StyledImage = styled.img`
  border-radius: 10px;
`

export default function Avatar ({ src, title, size }) {
  const width = sizes[size]
  const height = sizes[size]

  return (
    <StyledImage
      src={src}
      width={width}
      height={height}
      alt={title}
      title={title}
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}
