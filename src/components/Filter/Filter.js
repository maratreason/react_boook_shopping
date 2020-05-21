import React from 'react'
import { Menu , Input } from 'semantic-ui-react'
import { setSearchQuery } from '../../actions/filter'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {

  return (
    <Menu secondary>
      <Menu.Item
        content='Все'
        active={filterBy === 'all'}
        onClick={setFilter.bind(this, 'all')}
      />
      <Menu.Item
        content='Популярные'
        active={filterBy === 'popular'}
        onClick={setFilter.bind(this, 'popular')}
      />
      <Menu.Item
        content='Цена (дорогие)'
        active={filterBy === 'price_high'}
        onClick={setFilter.bind(this, 'price_high')}
      />
      <Menu.Item
        content='Цена (дешевые)'
        active={filterBy === 'price_low'}
        onClick={setFilter.bind(this, 'price_low')}
      />
      <Menu.Item
        content='По автору'
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}
      />
      <Menu.Item>
        <Input
          icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Введите запрос..."
        ></Input>
      </Menu.Item>
    </Menu>
  )
}


export default Filter