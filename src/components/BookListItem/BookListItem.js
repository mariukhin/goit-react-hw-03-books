import React from 'react';
import PropTypes from 'prop-types';

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
  <div className="bookListItem">
    <img className="itemImg" alt="img" src={img} />
    <h2 className="title">{title}</h2>
    <p className="description">{description}</p>
    <p className="author">{author}</p>
    <p className="publisher">{publisher}</p>
    <p className="publishedDate">{publishedDate}</p>
    <p className="pageCount">{pageCount}</p>
    <p className="rating">{rating}</p>
  </div>
);
BookListItem.defaultProps = {
  author: 'No author',
  rating: 0.0,
};
BookListItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string),
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  rating: PropTypes.number,
};
export default BookListItem;
