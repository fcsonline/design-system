import React from 'react';
import { storiesOf } from '@storybook/react';

import { spaces } from '.'

import Spacer from '../../storybook/Spacer';
import Center from '../../storybook/Center';

export default {
  title: 'Spaces',
}

const stories = storiesOf('Tokens | Spaces', module)

stories.add('Simple', () => (
  <Center>
    {Object.entries(spaces).map((space) => (
      <Spacer key={space[0]} space={space[0]} />
    ))}
  </Center>
))
