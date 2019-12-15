import React from 'react';
import { storiesOf } from '@storybook/react';

import Center from '../storybook/Center';
import Block from '../storybook/Block';

export default {
  title: 'Colors',
}

const colors = {
  primary: 'rgba(27, 154, 170, 1)',
  secundary: 'rgba(239, 71, 111, 1)',
  terciary: 'rgba(255, 196, 61, 1)',
  success: 'rgba(6, 214, 160, 1)',
  warning: 'rgba(248, 255, 229, 1)',
  wrong: 'rgba(204, 41, 54, 1)'
}

const stories = storiesOf('Tokens | Colors', module)

stories.add('Simple', () => (
  <Center>
    {Object.entries(colors).map((color) => <Block key={color[0]} title={color[0]} color={color[1]} />)}
  </Center>
))
