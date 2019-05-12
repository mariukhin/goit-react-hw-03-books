import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    bookName: '',
    bookGenre: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
  };

  render() {
    const { bookName, bookGenre } = this.state;
    const { genres } = this.props;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Enter genre"
          name="bookName"
          value={bookName}
          onChange={this.handleInputChange}
        />
        <select
          className={styles.genreSelect}
          name="bookGenre"
          value={bookGenre}
          onChange={this.handleInputChange}
        >
          {genres.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className={styles.submitBtn} type="submit">
          Search
        </button>
      </form>
    );
  }
}
