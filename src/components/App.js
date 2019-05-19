import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from 'react-spinkit';
import mapper from './helper';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import './App.css';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?';

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
    const RESULT_URL = `${API_URL}q=${name.toLowerCase()}+subject:${genre}`;
    axios
      .get(RESULT_URL)
      .then(response => this.setState({ books: mapper(response.data.items) }))
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
        {isLoading && <Spinner name="ball-spin-fade-loader" color="blue" />}
        {books.length > 0 && <BookList items={books} />}
      </div>
    );
  }
}
