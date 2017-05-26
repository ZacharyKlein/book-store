/**
 * Created by zak on 11/28/16.
 */
import React from 'react';
import  {array, func} from 'prop-types';
import {Table, Button} from 'react-bootstrap';

const BookList = ({books, deleteBook}) => {

  const renderBookRow = (book) => {
    return (<tr key={book.id}>
      <td className="title">{book.title}</td>
      <td className="author">{book.author}</td>
      <td className="inventory">{book.inventoryNumber}</td>
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
          <th>Inventory #</th>
          <th></th>
        </tr>

        {books ? books.map(renderBookRow) : null}

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