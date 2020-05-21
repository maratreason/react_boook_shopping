import React, { Component } from 'react'
import axios from 'axios'

import Menu from '../../containers/MenuContainer'
import { Container, Card } from 'semantic-ui-react'
import BookCard from '../../containers/BookCartContainer'
import './App.css'
import Filter from '../../containers/FilterContainer'

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }

  render() {
    const { books, isReady } = this.props
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          { !isReady ? 'Загрузка...' : books.map((book, index) => <BookCard key={index} {...book} />) }
        </Card.Group>
      </Container>
    )
  }
}

export default App