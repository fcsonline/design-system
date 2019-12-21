import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";

import { spaces } from '../../tokens/Spaces'

import Center from '../../storybook/Center';
import Block from '../../storybook/Block';

import Column from '.';

export default {
  title: 'Column'
}

const stories = storiesOf('Core | Layout', module)

stories.addDecorator(withKnobs)

stories.add('Column', () => {
  const colors = ['red', 'magenta', 'green', 'blue']
  const anchors = ['left', 'center', 'right']

  return (
    <Center>
      <Column
        anchor={select('Anchor', anchors, 'center')}
        space={select('Space', Object.keys(spaces), 'medium')}
      >
        {colors.map((color) => (
          <Block
            key={color}
            title={color}
            color={color}
          />
        ))}
      </Column>
    </Center>
  )
})
