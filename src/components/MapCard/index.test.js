import React from 'react';
import { shallow } from 'enzyme';

import MapCard from '.';

test('should render properly', () => {
  const map = {
    key: 'mapKey',
    name: 'mapName'
  };

  const container = shallow(<MapCard map={map} />);
  expect(container.debug()).toMatchSnapshot();
});
