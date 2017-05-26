import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

require('./../css/style.css');
require('whatwg-fetch');

import BookList from './book-list';
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

  render() {
    return (
      <Grid>
        <BookList books={this.state.books} />
      </Grid>
    );
  }
}

export default Books;