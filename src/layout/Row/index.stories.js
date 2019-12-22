import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { spaces } from '../../tokens/Spaces'
import { sizes } from '../../tokens/Sizes'

import Center from '../../storybook/Center'
import Block from '../../storybook/Block'

import Row, { anchors } from '.'

export default {
  title: 'Row'
}

const stories = storiesOf('Core | Layout', module)

stories.addDecorator(withKnobs)

stories.add('Row', () => {
  const colors = ['red', 'magenta', 'green', 'blue']
  const sizeKeys = Object.keys(sizes)

  return (
    <Center>
      <Row
        anchor={select('Anchor', Object.keys(anchors), 'center')}
        space={select('Space', Object.keys(spaces), 'medium')}
      >
        {colors.map((color, i) => (
          <Block
            key={color}
            title={color}
            color={color}
            size={sizeKeys[i % sizeKeys.length]}
          />
        ))}
      </Row>
    </Center>
  )
})
