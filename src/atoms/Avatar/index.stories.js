import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { sizes } from '../../tokens/Sizes'

import Center from '../../storybook/Center'

import Avatar from '.'

export default {
  title: 'Avatar'
}

const stories = storiesOf('Core | Avatar', module)

stories.addDecorator(withKnobs)

stories.add('Simple', () => (
  <Center>
    <Avatar
      src='https://api.adorable.io/avatars/262/abott@adorable.png'
      title={text('Title', 'Paco Merlo')}
      size={select('Size', Object.keys(sizes), 'medium')}
    />
  </Center>
))
