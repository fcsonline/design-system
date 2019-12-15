import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Center from '../storybook/Center';
import Block from '../storybook/Block';

export default {
  title: 'useLocalStorage',
}

function useLocalStorage(key, defaultValue = null) {
  const stored = localStorage.getItem(key)
  const [value, setState] = useState(stored ? JSON.parse(stored) : defaultValue)

  const setValue = (value) => {
    setState(value)
    localStorage.setItem(key, JSON.stringify(value)) }

  return [value, setValue]
}

const stories = storiesOf('Hooks | useLocalStorage', module)

stories.add('Simple', () => {
  const [count, setValue] = useLocalStorage('visits', 0)

  return (
    <Center>
      <Block
        title={`Visit: ${count}`}
        color={'#8a8'}
        onClick={() => setValue(count + 1)}
      />
    </Center>
  )
})
