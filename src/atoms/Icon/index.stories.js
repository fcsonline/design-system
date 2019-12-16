import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";

import Center from '../../storybook/Center';

import Icon from '.';

export default {
  title: 'Icon'
}

const stories = storiesOf('Core | Icon', module)

stories.addDecorator(withKnobs)

const url = 'https://api.github.com/repos/sschoger/heroicons-ui/contents/svg'

stories.add('Catalog', () => {
  const size = select('Size', ['small', 'medium', 'large'], 'large')
  const [icons, setIcons] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)

      if(response.ok) {
        const json = await response.json();

        setIcons(json)
      }
    }

    fetchData()
  }, [])

  return (
    <Center>
      {icons.map((icon) => (
        <Icon
          key={icon.name}
          src={icon.download_url.replace(/raw.githubusercontent.com/, 'cdn.rawgit.com')}
          title={icon.name.replace(/.svg$/, '')}
          size={size}
        />
      ))}
    </Center>
  )
})
