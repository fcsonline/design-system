import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";

import { spaces } from '../../tokens/Spaces'

import Center from '../../storybook/Center';
import Block from '../../storybook/Block';

import Row from '.';

export default {
  title: 'Row'
}

const stories = storiesOf('Core | Layout', module)

stories.addDecorator(withKnobs)

stories.add('Row', () => {
  const colors = ['red', 'magenta', 'green', 'blue']
  const anchors = ['top', 'center', 'bottom']

  return (
    <Center>
      <Row
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
      </Row>
    </Center>
  )
})
