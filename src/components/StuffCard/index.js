import React from 'react';
import PropTypes from 'prop-types';

function StuffCard({ stuff }) {
  const { title, type, videoId } = stuff;

  return (
    <div className='StuffCard'>
      <div className='StuffCard__header'>
        <img
          alt={`${type} icon`}
          src={require(`../../static/images/csgo/stuff-icons/${type}.svg`)}
        />
        <span>{title}</span>
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
  stuff: PropTypes.object.isRequired
};

export default StuffCard;
