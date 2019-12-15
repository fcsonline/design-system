import React from 'react';
import { storiesOf } from '@storybook/react';

import Center from '../storybook/Center';
import UnderConstruction from '../storybook/UnderConstruction';

export default {
  title: 'Distances',
}

const stories = storiesOf('Tokens | Distances', module)

stories.add('Simple', () => (
  <Center>
    <UnderConstruction />
  </Center>
))
