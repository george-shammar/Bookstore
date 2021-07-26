import React from 'react';
import { useSelector } from 'react-redux';
import { initialState } from '../reducers/books';

const selectAllBooks = () => initialState.allBooks;

const BooksList = () => {
  const allBooks = useSelector(selectAllBooks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
