import React from 'react';
import { shallow } from 'enzyme';

import MarkerList from '.';

test('should render properly', () => {
  const props = {
    allVideos: [
      {
        id: 'zokdaodq',
        title: 'Smoke CT from T Spawn',
        videoId: 'FqDYqI9o2YI',
        x: 254,
        y: 66,
      },
      {
        id: 'afdazdazzokdaodq',
        title: 'Smoke CT from Palace',
        videoId: 'FqDYqI9o2YI',
        x: 602,
        y: 352,
      },
    ],
    isSelectedStuff: false,
    stuffShown: [
      {
        id: '9avd46ed',
        type: 'flashbang',
        x: 157,
        y: 250,
        stuffPositions: [
          {
            id: 'zokdaodq',
            title: 'Smoke CT from T Spawn',
            videoId: 'FqDYqI9o2YI',
            x: 254,
            y: 66,
          },
          {
            id: 'afdazdazzokdaodq',
            title: 'Smoke CT from Palace',
            videoId: 'FqDYqI9o2YI',
            x: 602,
            y: 352,
          },
        ],
      },
    ],
    handleClickShowAllStuff: jest.fn(),
    handleClickStuffSelected: jest.fn(),
    handleClickVideoSelected: jest.fn(),
  };

  const container = shallow(<MarkerList {...props} />);
  expect(container.debug()).toMatchSnapshot();
});
