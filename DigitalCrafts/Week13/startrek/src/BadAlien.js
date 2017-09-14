
import React from 'react';
import PropTypes from 'prop-types';

const BadAlien = ({name, species}) => (
  <div>
    <h2>{name} ({species})</h2>
  </div>
);

BadAlien.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string
};

export default BadAlien;