import React from 'react'
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'

const CartComponent = ({ title, id, image, removeFromCart }) => {
  return (
    <List selection divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button color="red" onClick={removeFromCart.bind(this, id)}>Удалить</Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  )
}

const MenuComponent = ({ totalPrice, count, handleItemClick, items }) => {
  return (
    <Menu>
      <Menu.Item
        name='browse'
        onClick={handleItemClick}
      >
        Магазин книг
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='submit'
          onClick={handleItemClick}
        >
          Итого: &nbsp;<b>{totalPrice}</b>руб.
        </Menu.Item>

        <Popup
          trigger={
            <Menu.Item
              name='help'
              onClick={handleItemClick}
            >
              Корзина &nbsp;(<b>{count}</b>)
            </Menu.Item>
          }
          content={items.length > 0 ? items.map(book => <CartComponent {...book} />) : 'Нет книг в корзине'}
          on="click"
          hideOnScroll
        />


      </Menu.Menu>
    </Menu>
  )
}

export default MenuComponent