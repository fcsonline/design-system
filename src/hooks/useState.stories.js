import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Center from '../storybook/Center'
import Block from '../storybook/Block'

export default {
  title: 'useState'
}

const stories = storiesOf('Hooks | useState', module)

stories.add('Counter', () => {
  const [count, setState] = useState(0)

  return (
    <Center>
      <Block
        title={count}
        color='magenta'
        onClick={() => setState(count + 1)}
      />
    </Center>
  )
})

stories.add('Toggle', () => {
  const [value, setState] = useState(false)

  return (
    <Center>
      <Block
        title={String(value)}
        color='#333'
        onClick={() => setState(!value)}
      />
    </Center>
  )
})

stories.add('Field', () => {
  const [value, setState] = useState('foo')

  return (
    <Center>
      <input value={value} onChange={e => setState(e.target.value)} />
    </Center>
  )
})
