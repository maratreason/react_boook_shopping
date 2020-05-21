import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as booksActions from '../actions/books'
import App from '../components/App/App'
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy, searchQuery) => {
  let finded = books
  switch(filterBy) {
    case 'all':
      finded = books
      break
    case 'price_high':
      finded =  orderBy(books, 'price', 'desc')
      break
    case 'price_low':
      finded =  orderBy(books, 'price', 'asc')
      break
    case 'author':
      finded =  orderBy(books, 'author', 'asc')
      break
    default:
      return books
  }

  return finded.filter(
    obj => obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
    obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  )
}

const mapStateToProps = ({ books, filter }) => ({
  books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)