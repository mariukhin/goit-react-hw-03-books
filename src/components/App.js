import React, { Component } from 'react';
import { mapper } from '../services/helper';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import fetchBooks from '../services/book-api';
import Loader from './Loader/Loader';
import genres from '../assets/genres.json';

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
  };

  fetchItems = (name, genre) => {
    fetchBooks(name, genre)
      .then(books => this.setState({ books: mapper(books) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  formSubmit = ({ bookName, bookGenre }) => {
    this.setState({ isLoading: true });
    this.fetchItems(bookName, bookGenre);
  };

  render() {
    const { books, isLoading, error } = this.state;
    return (
      <div>
        <SearchForm genres={genres} onSubmit={this.formSubmit} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader name="ball-spin-fade-loader" color="blue" />}
        {books.length > 0 && <BookList items={books} />}
      </div>
    );
  }
}
