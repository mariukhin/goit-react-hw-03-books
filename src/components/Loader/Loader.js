import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import styles from './Loader.module.css';

const Loader = ({ name, color }) => (
  <Spinner className={styles.loader} name={name} color={color} />
);

Loader.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Loader;
