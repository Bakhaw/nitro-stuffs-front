import React from 'react';
import { shallow } from 'enzyme';

import GameMap from '.';

test('should render properly', () => {
  const props = {
    activeStuffs: [],
  };

  const container = shallow(<GameMap {...props} />);
  expect(container.debug()).toMatchSnapshot();
});
