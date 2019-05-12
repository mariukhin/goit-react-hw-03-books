import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { PacmanLoader } from 'halogen';
import Spinner from 'react-spinkit';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
// import Loader from './Loader/Loader';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?';
const mapper = books => {
  return books
    .map(({ id, volumeInfo }) => ({
      id,
      volumeInfo,
    }))
    .map(
      // eslint-disable-next-line no-return-assign
      item =>
        (item = {
          id: item.id,
          img: item.volumeInfo.imageLinks.smallThumbnail,
          description: item.volumeInfo.description,
          author: item.volumeInfo.authors,
          publisher: item.volumeInfo.publisher,
          publishedDate: item.volumeInfo.publishedDate,
          pageCount: item.volumeInfo.pageCount,
          rating: 'cool',
        }),
    );
};
export default class App extends Component {
  static propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = {
    books: [],
    isLoading: false,
    error: null,
  };

  formSubmit = ({ bookName, bookGenre }) => {
    this.setState({ isLoading: true });

    const RESULT_URL = `${API_URL}q=${bookName.toLowerCase()}+subject:${bookGenre}`;
    axios
      .get(RESULT_URL)
      .then(response => this.setState({ books: mapper(response.data.items) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { books, isLoading } = this.state;
    const { genres } = this.props;
    return (
      <div>
        <SearchForm genres={genres} onSubmit={this.formSubmit} />
        {/* {error && <ErrorNotification text={error.message} />} */}
        {isLoading && (
          // <PacmanLoader loading color="#26A65B" size="16px" margin="4px" />
          <Spinner
            name="ball-spin-fade-loader"
            color="blue"
            className="loader"
          />
        )}
        {books.length > 0 && <BookList items={books} />}
      </div>
    );
  }
}
