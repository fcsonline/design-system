import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

import { spaces } from '../../tokens/Spaces'

export const anchors = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center'
}

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;

  ${props => props.anchor && css`
    align-items: ${anchors[props.anchor]};
  `}


  ${props => props.space && css`
    > * {
      margin-right: ${spaces[props.space]}px;
    }

    *:last-child {
      margin-right: 0;
    }
  `}

`

export default function Row ({ children, space = 'medium', anchor = 'center' }) {
  return (
    <StyledRow space={space} anchor={anchor}>
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.string,
  anchor: PropTypes.string,
}
