import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  img,
  title,
  description,
  author,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => (
  <div className={styles.bookItem}>
    <div className={styles.imgBlock}>
      <img className="itemImg" alt="img" src={img} />
    </div>
    <div className={styles.textBlock}>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
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
BookListItem.defaultProps = {
  description: 'No description',
  author: 'No author',
  publisher: 'No publisher',
  publishedDate: 'No published date',
  pageCount: 0,
  rating: 0.0,
};
BookListItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.arrayOf(PropTypes.string),
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.number,
};
export default BookListItem;
