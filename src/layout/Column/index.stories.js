import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";

import { spaces } from '../../tokens/Spaces'
import { sizes } from '../../tokens/Sizes'

import Center from '../../storybook/Center';
import Block from '../../storybook/Block';

import Column, { anchors } from '.';

export default {
  title: 'Column'
}

const stories = storiesOf('Core | Layout', module)

stories.addDecorator(withKnobs)

stories.add('Column', () => {
  const colors = ['red', 'magenta', 'green', 'blue']
  const sizeKeys = Object.keys(sizes)

  return (
    <Center>
      <Column
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
      </Column>
    </Center>
  )
})
