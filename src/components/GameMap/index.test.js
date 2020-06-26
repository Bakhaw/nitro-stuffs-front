import React from 'react';
import { shallow } from 'enzyme';

import { StateProvider } from '../../Context';

import GameMap from '.';

test('should render properly', () => {
  const props = {
    activeStuffs: [],
    map: 'Mirage',
  };

  const container = shallow(
    <StateProvider>
      <GameMap {...props} />
    </StateProvider>
  );
  expect(container.debug()).toMatchSnapshot();
});
