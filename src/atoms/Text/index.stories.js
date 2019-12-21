import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select} from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import Center from '../../storybook/Center';

import Text from './';

export default {
  title: 'Text'
}

const stories = storiesOf('Core | Text', module)

stories.addDecorator(withKnobs)
// FIXME: stories.addDecorator(withActions)
stories.addDecorator(withA11y)

const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

stories.add('Simple', () => (
  <Center>
    <Text
      label={label}
      size={select('Size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'large')}
    />
  </Center>
))
