import React from 'react';
import { withRouter } from 'react-router-dom';

import LeftArrowIcon from '../../static/icons/left-arrow.svg';

function BackButton({ history }) {
  function handleClick() {
    history.goBack();
  }

  return (
    <div className='BackButton' onClick={handleClick}>
      <img alt='Left Arrow' src={LeftArrowIcon} />
    </div>
  );
}

export default withRouter(BackButton);