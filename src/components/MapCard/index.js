import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MapCard({ map, game }) {
  return (
    <div className='MapCard'>
      <img
        className='MapCard_img'
        src={require(`../../static/images/csgo/${map.img}`)}
      />
      <Link to={`/game/${game}/${map.name}`}>
        <div className='MapCard_text'>
          <h2>{map.name}</h2>
        </div>
      </Link>
    </div>
  );
}

MapCard.propTypes = {
  map: PropTypes.object.isRequired,
  game: PropTypes.string.isRequired
};

export default MapCard;
