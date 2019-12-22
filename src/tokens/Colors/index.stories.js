import React from 'react'
import { storiesOf } from '@storybook/react'

import Center from '../../storybook/Center'
import Block from '../../storybook/Block'

import { colors } from '.'

export default {
  title: 'Colors'
}

const stories = storiesOf('Tokens | Colors', module)

stories.add('Simple', () => (
  <Center>
    {Object.entries(colors).map(color => (
      <Block key={color[0]} title={color[0]} color={color[1]} />
    ))}
  </Center>
))
