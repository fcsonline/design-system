import React from 'react';
import { storiesOf } from '@storybook/react';
import { withActions, action } from '@storybook/addon-actions';
import { withKnobs, text} from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import Center from '../../storybook/Center';

import Button from './';

export default {
  title: 'Button'
}

const stories = storiesOf('Core | Button', module)

stories.addDecorator(withKnobs)
// FIXME: stories.addDecorator(withActions)
stories.addDecorator(withA11y)

stories.add('Simple', () => (
  <Center>
    <Button
      onClick={action('clicked')}
      label={text('Label', 'Submit')}
    />
  </Center>
))
