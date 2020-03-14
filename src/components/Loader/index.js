import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

function Loader({ size = 30 }) {
  return (
    <div>
      <CircularProgress size={size} />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number
};

export default Loader;
