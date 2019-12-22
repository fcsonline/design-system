import React from 'react'
import { storiesOf } from '@storybook/react'

import { sizes } from '../../tokens/Sizes'

import Center from '../../storybook/Center'
import Block from '../../storybook/Block'

import Column from '../../layout/Column'

export default {
  title: 'Sizes'
}

const stories = storiesOf('Tokens | Sizes', module)

stories.add('Simple', () => (
  <Center>
    <Column space='medium'>
      {Object.entries(sizes).map(size => (
        <Block key={size[0]} title={size[0]} color='#aaa' size={size[0]} />
      ))}
    </Column>
  </Center>
))
