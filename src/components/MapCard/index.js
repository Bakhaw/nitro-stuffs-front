import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

function MapCard({ map, match }) {
  const game = match.params.game;
  return (
    <div className='MapCard'>
      <Link to={`/game/${game}/${map.key}`}>
        <img
          className='MapCard_img'
          alt={map.name}
          src={require(`../../static/images/${game}/${map.key}.jpg`)}
        />

        <div className='MapCard_text'>
          <h2>{map.name}</h2>
        </div>
      </Link>
    </div>
  );
}

MapCard.propTypes = {
  map: PropTypes.object.isRequired
};

export default withRouter(MapCard);
