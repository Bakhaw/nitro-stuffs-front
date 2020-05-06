import React from 'react';
import { shallow } from 'enzyme';

import StuffCard from '.';

test('should render properly', () => {
  const props = {
    stuff: {
      id: 'id',
      title: 'title',
      videoId: 'videoId', // youtube video ID
      x: 150,
      y: 25,
    },
    type: 'smoke',
  };

  const container = shallow(
    <StuffCard stuff={props.stuff} type={props.type} />
  );
  expect(container.debug()).toMatchSnapshot();
});
