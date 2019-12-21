import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Row from '../layout/Row';

import Center from '../storybook/Center';
import Block from '../storybook/Block';

export default {
  title: 'useMultiselection',
}

function useMultiselection(init) {
  const [selected, setState] = useState(init)

  const onToggle = (item) => {
    // TODO xor/lodash
    const index = selected.indexOf(item)

    if (index < 0) {
      setState([
        ...selected,
        item
      ])
    } else {
      const removed = [...selected.slice(0, index), ...selected.slice(index + 1)]

      setState(removed)
    }
  }

  return [selected, onToggle]
}

const stories = storiesOf('Hooks | useMultiselection', module)

stories.add('Choose', () => {
  const colors = ['red', 'magenta', 'green', 'blue']
  const [selected, onToggle] = useMultiselection([colors[0]])

  return (
    <Center>
      <Row>
        {colors.map((color) => (
          <Block
            key={color}
            title={selected.includes(color) ? color.toUpperCase() : color}
            color={color}
            onClick={() => onToggle(color)}
          />
        ))}
      </Row>

      <p>
        Selected:
        <b>
          {selected.join(' ')}
        </b>
      </p>
    </Center>
  )
})
