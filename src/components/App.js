import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mapper } from '../services/helper';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import fetchBooks from '../services/book-api';
import Loader from './Loader/Loader';

export default class App extends Component {
  static propTypes = {
    genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

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
    const { genres } = this.props;
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
