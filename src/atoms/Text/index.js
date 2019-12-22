import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { fontSizes, lineHeights, fontWeights } from '../../tokens/Typography'

const StyledText = styled.span`
  text-align: left;
  ${props =>
    props.size &&
    css`
      font-size: ${fontSizes[props.size]}px;
      line-height: ${lineHeights[props.size]}px;
    `}
  ${props =>
    props.weight &&
    css`
      font-weight: ${fontWeights[props.weight]};
    `}
`

export default function Text ({ label, size, weight = 'normal' }) {
  return (
    <StyledText size={size} weight={weight}>
      {label}
    </StyledText>
  )
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string
}
