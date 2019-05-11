import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  state = {
    bookName: '',
    bookGenre: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // const { bookName, bookGenre } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
  };
  render() {
    const { bookName, bookGenre } = this.state;
    const { genres } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter genre"
          name="bookName"
          value={bookName}
          onChange={this.handleInputChange}
        />
        <select
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
        <button type="submit">Search</button>
      </form>
    );
  }
}
