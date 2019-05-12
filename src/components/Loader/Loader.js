import React from 'react';
import HalogenLoader from 'halogen/PacmanLoader';

const Loader = ({ isLoading }) =>
  console.log(isLoading) || (
    <HalogenLoader
      loading={isLoading}
      color="#26A65B"
      size="16px"
      margin="4px"
    />
  );

export default Loader;
