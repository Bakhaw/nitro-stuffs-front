import React from 'react';
import { shallow } from 'enzyme';

import Filter from '.';

test('should render properly', () => {
  const container = shallow(<Filter />);
  expect(container.debug()).toMatchSnapshot();
});
