import React from 'react';
import { storiesOf } from '@storybook/react';

import Center from '../storybook/Center';

export default {
  title: 'Typography',
}

const stories = storiesOf('Tokens | Typography', module)

stories.add('Simple', () => (
  <Center>
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
  </Center>
))
