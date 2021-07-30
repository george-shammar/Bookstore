import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../stylesheets/App.css';

const App = () => (
  <>
    <div className="container mt-5 border">
      <div className="header border py-2 px-5 mb-5">
        <div className="left-header">
          <h1 className="blue">Bookstore CMS</h1>
          <p className="mt-3">BOOKS</p>
          <p className="mt-3">CATEGORIES</p>
        </div>
        <div className="blue"><i className="fas fa-user" /></div>
      </div>
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;
