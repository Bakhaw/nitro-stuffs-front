import React from 'react';
import { withRouter } from 'react-router-dom';

import Image from '../Image';

function BackButton({ history }) {
  function handleClick() {
    history.goBack();
  }

  return (
    <div className='BackButton' onClick={handleClick}>
      <div className='BackButton__button'>
        <Image width='35' height='35' iconType='left-arrow' />
      </div>
    </div>
  );
}

export default withRouter(BackButton);
