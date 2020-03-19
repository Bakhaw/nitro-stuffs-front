import React from 'react';
import { shallow } from 'enzyme';

import StuffCard from '.';

test('should render properly', () => {
  const stuff =   {
    id: 'id',
    title: 'title',
    type: 'type',
    videoId: 'videoId' // youtube video ID
  },

  const container = shallow(<StuffCard stuff={stuff} />);
  expect(container.debug()).toMatchSnapshot();
});
