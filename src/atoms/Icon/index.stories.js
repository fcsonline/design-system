import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";

import { sizes } from '../../tokens/Sizes'

import Center from '../../storybook/Center';
import Content from '../../storybook/Content';

import Icon from '.';

export default {
  title: 'Icon'
}

const stories = storiesOf('Core | Icon', module)

stories.addDecorator(withKnobs)

const url = 'https://api.github.com/repos/sschoger/heroicons-ui/contents/svg'

stories.add('Catalog', () => {
  const size = select('Size', Object.keys(sizes), 'small')
  const [icons, setIcons] = useState([])
  const [search, setSearch] = useState('')

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

  const filtered = icons.filter((icon) => (!search || icon.name.match(search)))

  return (
    <>
      <Center>
        <label><b>Search:</b> <input onChange={(e) => setSearch(e.target.value)} /></label>
      </Center>
      <Center>
        <Content>
          {filtered.map((icon) => (
            <Icon
              key={icon.name}
              src={icon.download_url.replace(/raw.githubusercontent.com/, 'cdn.rawgit.com')}
              title={icon.name.replace(/.svg$/, '')}
              size={size}
            />
          ))}
        </Content>
      </Center>
    </>
  )
})
