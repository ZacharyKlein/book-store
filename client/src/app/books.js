import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

require('./../css/style.css');
require('whatwg-fetch');

import BookList from './book-list';
import BookForm from './book-form';
import {SERVER_URL} from '../config';

class Books extends Component {

  constructor() {
    super();
    this.state = {books: []};
  }

  componentDidMount() {
    fetch(`${SERVER_URL}/api/book`)
      .then(r => r.json())
      .then(json => this.setState({books: json}))
      .catch(ex => console.error('parsing failed', ex))
  }

  submitNewBook = (book) => {
    fetch(`${SERVER_URL}/api/book`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(book)
    }).then(r => r.json())
      .then(json => this.addBook(json))
      .catch(ex => console.error('Unable to load books', ex));
  };



  addBook = (book) => {
    let books = this.state.books;
    books.push({id: book.id, author: book.author, title: book.title});
    this.setState({books});
  };




  render() {
    return (
      <Grid>
        <BookForm onSubmit={this.submitNewBook}/>
        <BookList books={this.state.books} deleteBook={this.deleteBook}/>
      </Grid>
    );
  }
}

export default Books;