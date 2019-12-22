import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { sizes } from '../tokens/Sizes'

const StyledBlock = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  ${props =>
    props.size &&
    css`
      width: ${sizes[props.size]}px;
      height: ${sizes[props.size]}px;
    `}

  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
      cursor: ${props.onClick ? 'pointer' : 'default'};
    `}
`

export default function Block ({ color, title, size = 'medium', onClick }) {
  const extraProps = onClick ? { role: 'button' } : {}

  return (
    <StyledBlock
      color={color}
      title={title}
      size={size}
      onClick={onClick}
      {...extraProps}
    >
      {title}
    </StyledBlock>
  )
}

Block.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func
}
