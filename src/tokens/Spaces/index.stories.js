import React from 'react';
import { storiesOf } from '@storybook/react';

import Spacer from '../../storybook/Spacer';
import Center from '../../storybook/Center';

export default {
  title: 'Spaces',
}

const stories = storiesOf('Tokens | Spaces', module)

stories.add('Simple', () => (
  <Center>
    <Spacer space='small' />
    <Spacer space='medium' />
    <Spacer space='large' />
  </Center>
))
