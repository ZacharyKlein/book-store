/**
 * Created by zak on 11/28/16.
 */
import React from 'react';
import  {array} from 'prop-types';
import {Table} from 'react-bootstrap';

const BookList = ({books}) => {

  const renderBookRow = (book) => {
    return (<tr key={book.id}>
      <td className="title">{book.title}</td>
      <td className="author">{book.author}</td>
      <td></td>
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
  books: array
};

export default BookList;