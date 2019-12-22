import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { spaces } from '../../tokens/Spaces'

export const anchors = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
}

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;

  ${props =>
    props.anchor &&
    css`
      align-items: ${anchors[props.anchor]};
    `}

  ${props =>
    props.space &&
    css`
      > * {
        margin-bottom: ${spaces[props.space]}px;
      }

      *:last-child {
        margin-bottom: 0;
      }
    `}
`

export default function Column ({
  children,
  space = 'medium',
  anchor = 'center'
}) {
  return (
    <StyledColumn space={space} anchor={anchor}>
      {children}
    </StyledColumn>
  )
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.string,
  anchor: PropTypes.string
}
