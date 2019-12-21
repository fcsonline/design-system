import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";

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
      <Column size={select('Anchor', anchors, 'center')} >
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
