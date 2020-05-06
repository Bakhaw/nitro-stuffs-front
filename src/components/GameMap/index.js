import React, { useEffect, useState } from 'react';

import mirage from '../../static/images/csgo/maps-callouts/mirage.jpg';
import Marker from '../Marker';
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

  function showStuff() {
    if (stuffSelected.length) {
      setStuffShown(stuffSelected);
      setIsSelectedStuff(true);
    } else {
      setStuffShown(activeStuffs);
      setIsSelectedStuff(false);
    }
  }

  function handleClickStuffSelected(stuff) {
    setStuffSelected([stuff]);
    setStuffSelectedType(stuff.type);
    setAllVideos(stuff.stuffPositions);
  }

  function handleClickVideoSelected(videoSelecteds) {
    setVideoSelected(videoSelecteds);
  }

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
          <Marker
            additionalStyles={{ display: isSelectedStuff ? 'block' : 'none' }}
            x={parseInt(640)}
            y={parseInt(15)}
            height='35'
            width='35'
            onClick={() => handleClickShowAllStuff()}
            type='close'
          />
          {stuffShown.map((stuff) => (
            <Marker
              key={stuff.id}
              x={stuff.x}
              y={stuff.y}
              height='35'
              width='35'
              onClick={() => handleClickStuffSelected(stuff)}
              type={stuff.type}
            />
          ))}
          {allVideos.map((stuffSelected) => (
            <Marker
              key={stuffSelected.id}
              x={stuffSelected.x}
              y={stuffSelected.y}
              height='50'
              width='50'
              onClick={() => handleClickVideoSelected(stuffSelected)}
              type='position'
            />
          ))}
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

export default GameMap;
