import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) =>
  console.log(items) || (
    <ul className="bookList">
      {items.map(item => (
        <li className="listItem" key={item.id}>
          <BookListItem {...item} />
        </li>
      ))}
    </ul>
  );
// BookList.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({

//         }).isRequired,
//     ).isRequired,
// }
export default BookList;
