import React from 'react';
import { storiesOf } from '@storybook/react';

import Center from '../../storybook/Center';
import Text from '../../atoms/Text';
import Column from '../../layout/Column';

import { fontSizes } from '.'

export default {
  title: 'Typography',
}

const stories = storiesOf('Tokens | Typography', module)
const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

stories.add('Simple', () => {
  return (
    <Center>
      <Column anchor='left'>
        {Object.entries(fontSizes).map((size) => (
          <Text key={size[0]} size={size[0]} label={`${size[1]} - ${label}`} />
        ))}
      </Column>
    </Center>
  )
})
