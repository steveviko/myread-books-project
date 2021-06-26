import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    state = {  }

    

    render() { 
        const shelfBooks = this.props.books;
        return ( 

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map( book => (
                    <li key={book.id}>
                    <Book
                        book={book}
                        changeShelf= {this.props.changeShelf}
                        assignedShelf={book.shelf}

                    />
                    </li>

                ))}
                </ol>
                </div>
      </div>

         );
    }
}
 
export default Shelf;