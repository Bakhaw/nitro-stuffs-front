import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

function StuffCard({ stuff, type }) {
  const { title, videoId } = stuff;

  return (
    <div className='StuffCard'>
      <div className={`StuffCard__header`}>
        <Image width='35' height='35' iconType={type} />
        <span className={`StuffCard__header__title__${type}`}>{title}</span>
      </div>
      <iframe
        allowFullScreen
        frameBorder={0}
        height='170'
        width='100%'
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
      />
    </div>
  );
}

StuffCard.propTypes = {
  stuff: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default StuffCard;
