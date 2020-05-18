import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import mirage from '../../static/images/csgo/maps-callouts/mirage.jpg';
import MarkerList from '../MarkerList';
import StuffCard from '../StuffCard';

function GameMap({ activeStuffs }) {
  //All Stuff to show with filter
  const [stuffShown, setStuffShown] = useState([]);
  //Stuff selected to show all videos associated
  const [stuffSelected, setStuffSelected] = useState([]);
  //Stuff selected type (smoke,flash, ...)
  const [stuffSelectedType, setStuffSelectedType] = useState('');
  //Boolean to change when user click or leave the selected stuff
  const [isSelectedStuff, setIsSelectedStuff] = useState(true);
  //All videos associated to the stuff selected
  const [allVideos, setAllVideos] = useState([]);
  //The video selected
  const [videoSelected, setVideoSelected] = useState(null);

  useEffect(() => {
    showStuff();
  }, [stuffShown, stuffSelected, activeStuffs]);

  //Stuff to show on the screen: the selected one (stuffSelected) or the default one (activeStuffs: with the filters)
  function showStuff() {
    if (stuffSelected.length) {
      setStuffShown(stuffSelected);
      setIsSelectedStuff(true);
    } else {
      setStuffShown(activeStuffs);
      setIsSelectedStuff(false);
    }
  }

  //Handle click function : Called when a stuff is selected
  //Store the stuff selected marker (calling the useEffect showStuff()), and the markers for all the videos
  function handleClickStuffSelected(stuff) {
    setStuffSelected([stuff]);
    setStuffSelectedType(stuff.type);
    setAllVideos(stuff.stuffPositions);
  }

  //Handle click function : Called when a video marker is selected
  //Store the video selected to show
  function handleClickVideoSelected(videoSelecteds) {
    setVideoSelected(videoSelecteds);
  }

  //Handle click function : Called when you want to remove the selections made
  //Reset all selections made and show the default stuffs (activeStuffs: with the filters)
  function handleClickShowAllStuff() {
    setStuffSelected([]);
    setStuffSelectedType('');
    setAllVideos([]);
    setVideoSelected(null);
  }

  return (
    <div className='GameMap'>
      <div className='GameMap__Title'>
        <h1>MIRAGE</h1>
      </div>
      <div className='GameMap__Content'>
        <div className='GameMap__Content__Map' style={{ position: 'relative' }}>
          <img
            className={`${
              isSelectedStuff ? 'GameMap__Content__Map__Shadow' : ''
            }`}
            alt='Mirage'
            src={mirage}
          />
          <MarkerList
            allVideos={allVideos}
            isSelectedStuff={isSelectedStuff}
            stuffShown={stuffShown}
            handleClickShowAllStuff={handleClickShowAllStuff}
            handleClickStuffSelected={handleClickStuffSelected}
            handleClickVideoSelected={handleClickVideoSelected}
          />
        </div>
        <div className='GameMap__Content__Video'>
          {videoSelected ? (
            <StuffCard stuff={videoSelected} type={stuffSelectedType} />
          ) : (
            <p className='GameMap__Content__Video__Paragraphe'>
              Select a video on the map
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

GameMap.propTypes = {
  activeStuffs: PropTypes.array.isRequired,
};

export default GameMap;
