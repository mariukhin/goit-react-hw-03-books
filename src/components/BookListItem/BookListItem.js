import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';
import { descriptionParser } from '../../services/helper';

export default class BookListItem extends Component {
  state = {
    showMore: false,
  };

  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    publisher: PropTypes.string,
    publishedDate: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.number,
  };

  static defaultProps = {
    description: 'No description',
    author: 'No author',
    publisher: 'No publisher',
    publishedDate: 'No published date',
    pageCount: 0,
    rating: 0.0,
  };

  onShowMore = () => {
    this.setState({ showMore: true });
  };

  render() {
    const {
      img,
      title,
      description,
      author,
      publisher,
      publishedDate,
      pageCount,
      rating,
    } = this.props;
    const { showMore } = this.state;
    return (
      <div className={styles.bookItem}>
        <div className={styles.imgBlock}>
          <img className="itemImg" alt="img" src={img} />
        </div>
        <div className={styles.textBlock}>
          <h2 className="title">{title}</h2>

          {showMore ? (
            <p className="description">{description}</p>
          ) : (
            <p className="description">{descriptionParser(description)}</p>
          )}
          {description.length >= 200 && !showMore && (
            <button type="button" onClick={this.onShowMore}>
              Show more
            </button>
          )}
          <p className="author">
            <b>Author: </b> {author}
          </p>
          <p className="publisher">
            <b>Publisher: </b>
            {publisher}
          </p>
          <p className="publishedDate">
            <b>Published date: </b> {publishedDate}
          </p>
          <p className="pageCount">
            <b>Page count: </b>
            {pageCount}
          </p>
          <p className="rating">
            <b>Rating: </b>
            {rating}
          </p>
        </div>
      </div>
    );
  }
}
