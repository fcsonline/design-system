import React from 'react';
import { storiesOf } from '@storybook/react';

import Center from '../../storybook/Center';
import UnderConstruction from '../../storybook/UnderConstruction';

export default {
  title: 'Sizes',
}

const stories = storiesOf('Tokens | Sizes', module)

stories.add('Simple', () => (
  <Center>
    <UnderConstruction />
  </Center>
))
