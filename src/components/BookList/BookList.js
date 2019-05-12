import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) => (
  <ul className="bookList">
    {items.map(item => (
      <li className="listItem" key={item.id}>
        <BookListItem {...item} />
      </li>
    ))}
  </ul>
);
BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      pageCount: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default BookList;
