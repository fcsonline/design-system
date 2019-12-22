import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

import { spaces } from '../../tokens/Spaces'
import { colors } from '../../tokens/Colors'

const StyledTable = styled.table`
  border: 1px solid ${colors.primary};
  border-collapse: separate;
  border-spacing: 0;

  ${props => props.space && css`
    border-spacing: ${spaces[props.space]}px;
  `}

  thead > tr {
    background: ${colors.terciary};
  }

  tbody > tr {
    background: ${colors.secundary};
  }

  tbody > tr > td {
    border: 0;
  }

  tbody > tr:hover {
    background: ${colors.wrong};
  }
`


export default function Table ({ label, space }) {
  return (
    <StyledTable space={space}>
      <thead>
        <tr>
          <th>
            {label}
          </th>
          <th>
            {label}
          </th>
          <th>
            {label}
          </th>
          <th>
            {label}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {label}
          </td>
          <td>
            {label}
          </td>
          <td>
            {label}
          </td>
          <td>
            {label}
          </td>
        </tr>
        <tr>
          <td>
            {label}
          </td>
          <td>
            {label}
          </td>
          <td>
            {label}
          </td>
          <td>
            {label}
          </td>
        </tr>
      </tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  label: PropTypes.string.isRequired,
  space: PropTypes.string.isRequired
}
