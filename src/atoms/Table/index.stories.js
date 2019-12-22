import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import { spaces } from '../../tokens/Spaces'

import Center from '../../storybook/Center';

import Table from './';

export default {
  title: 'Table'
}

const stories = storiesOf('Core | Table', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withA11y)

const example = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

stories.add('Simple', () => (
  <Center>
    <Table
      label={text('Label', example)}
      space={select('Space', Object.keys(spaces), 'medium')}
    >
    </Table>
  </Center>
))
