import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

function MapCard({ map, match }) {
  const game = match.params.game;
  return (
    <div className='MapCard'>
      <img
        className='MapCard_img'
        alt={map.name}
        src={require(`../../static/images/csgo/${map.key}.jpg`)}
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

export default withRouter(MapCard);
