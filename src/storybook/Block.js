import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

const StyledBlock = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  width: 100px;
  height: 100px;

  ${props => props.color && css`
    background-color: ${props.color};
    cursor: ${props.onClick ? 'pointer' : 'default'};
  `}
`

export default function Block ({ color, title, onClick }) {
  const extraProps = onClick ? { role: 'button' } : {}

  return (
    <StyledBlock color={color} title={title} onClick={onClick} {...extraProps}>
      {title}
    </StyledBlock>
  )
}

Block.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
