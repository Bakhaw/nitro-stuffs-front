import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { StateContext } from '../../Context';

function MapCard({ map }) {
  const { currentGame } = useContext(StateContext);
  const { key, name } = map;

  const [opacity, setOpacity] = useState(0.5);

  const backgroundURL = require(`../../static/images/${currentGame}/maps-previews/${key}.jpg`);
  const backgroundImage = `linear-gradient(rgb(0, 0, 0) 0, rgba(0, 0, 0, ${opacity}) 0), url(${backgroundURL})`;

  function onCardHover() {
    const newOpacity = opacity === 0.5 ? 0.1 : 0.5;
    setOpacity(newOpacity);
  }

  return (
    <Link
      className='MapCard'
      onMouseEnter={onCardHover}
      onMouseLeave={onCardHover}
      style={{ backgroundImage }}
      to={`/game/${currentGame}/${key}`}
    >
      <h2 className='MapCard__text'>{name}</h2>
    </Link>
  );
}

MapCard.propTypes = {
  map: PropTypes.object.isRequired
};

export default withRouter(MapCard);
