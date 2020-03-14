import React from 'react';
import { shallow } from 'enzyme';

import MapList from '.';

test('should render properly', () => {
  const container = shallow(<MapList />);
  expect(container.debug()).toMatchSnapshot();
});
