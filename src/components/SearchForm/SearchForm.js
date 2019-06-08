import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    bookName: '',
    bookGenre: '',
    selectedOption: null,
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  changeOption = option => {
    this.setState({ bookGenre: option.value, selectedOption: option });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
  };

  render() {
    const { bookName, selectedOption } = this.state;
    const { genres } = this.props;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Enter name"
          name="bookName"
          value={bookName}
          onChange={this.handleInputChange}
        />
        <Select
          value={selectedOption}
          onChange={this.changeOption}
          options={genres}
          className={styles.genreSelect}
          placeholder="Select genre.."
        />
        <button className={styles.submitBtn} type="submit">
          Search
        </button>
      </form>
    );
  }
}
