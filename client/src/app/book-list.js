/**
 * Created by zak on 11/28/16.
 */
import React from 'react';
import  {array, func} from 'prop-types';
import {Table, Row, Button} from 'react-bootstrap';

const BookList = ({books, deleteBook}) => {

  const renderBookRow = (book) => {
    return (<tr key={book.id}>
      <td className="title">{book.title}</td>
      <td className="author">{book.author}</td>
      <td><Button bsStyle="danger" onClick={() => deleteBook(book.id)}>Delete</Button></td>
    </tr>);
  };

  return (
    <div>
      <h3>Books</h3>
      <Table>
        <tbody>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th></th>
        </tr>

        {books.map(renderBookRow)}

        </tbody>

      </Table>
    </div>
  );
};

BookList.propTypes = {
  books: array,
  deleteBook: func
};

export default BookList;