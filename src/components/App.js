import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';

const API_URL =
  'https://www.googleapis.com/books/v1/volumes?q=react+subject:computers';
const mapper = books => {
  return books
    .map(({ id, volumeInfo }) => ({
      id,
      volumeInfo,
    }))
    .map(
      item =>
        (item = {
          id: item.id,
          img: item.volumeInfo.imageLinks.smallThumbnail,
          description: item.volumeInfo.description,
          author: item.volumeInfo.authors[0],
          publisher: item.volumeInfo.publisher,
          publishedDate: item.volumeInfo.publishedDate,
          pageCount: item.volumeInfo.pageCount,
          rating: 'cool',
        }),
    );
};
export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(API_URL)
      .then(response => this.setState({ books: mapper(response.data.items) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  formSubmit = ({ bookName, bookGenre }) => {
    console.log(this.state.books);
  };

  render() {
    const { books } = this.state;
    const { genres } = this.props;
    return (
      <div>
        <SearchForm genres={genres} onSubmit={this.formSubmit} />
        {books.length > 0 && <BookList items={books} />}
      </div>
    );
  }
}
// App.propTypes = {
//   // items: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id: PropTypes.string.isRequired,
//   //     title: PropTypes.string.isRequired,
//   //     text: PropTypes.string.isRequired,
//   //   }).isRequired,
//   // ).isRequired,
//   // movies: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id: PropTypes.number.isRequired,
//   //     title: PropTypes.string.isRequired,
//   //     posterUrl: PropTypes.string.isRequired,
//   //     overview: PropTypes.string.isRequired,
//   //   }).isRequired,
//   // ).isRequired,
// };
