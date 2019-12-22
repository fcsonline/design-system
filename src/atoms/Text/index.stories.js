import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import { fontSizes, fontWeights } from '../../tokens/Typography'

import Center from '../../storybook/Center';

import Text from './';

export default {
  title: 'Text'
}

const stories = storiesOf('Core | Text', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withA11y)

const example = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

stories.add('Simple', () => (
  <Center>
    <Text
      label={text('Label', example)}
      size={select('Size', Object.keys(fontSizes), 'medium')}
      weight={select('Weight', Object.keys(fontWeights), 'normal')}
    />
  </Center>
))
