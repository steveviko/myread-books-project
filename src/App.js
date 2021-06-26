import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/Header';
import Shelves from './components/Shelves';
import Search from './components/Search';
import SearchButton from './components/SearchButton';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    query: ""
  }

  updateSearch = state => {
    console.log("provide Results ", state)
    this.setState({showSearchPage: state})
  }


  componentDidMount() {
    BooksAPI.getAll().then((resp) => this.setState({books: resp}));
  }
  changeBookShelf =(book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(response => {
        let newList = this
          .state
          .books.
          slice(0);
        const books = newList.filter(listBook => listBook.id === book.id);
        if (books.length) {
          books[0].shelf = shelf;
        } else {
          newList.push(book);
          // newList = BookUtils.sortAllBooks(newList);
        }
        this.setState({books: newList});
      })
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (

             <Search showSearchPage={this.updateSearch} />

        ) : (
          <div className="list-books">

              <Header />
              <Shelves allBooks={this.state.books} changeShelf={this.changeBookShelf}/>
              <SearchButton showSearchPage={this.updateSearch}/>

          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
