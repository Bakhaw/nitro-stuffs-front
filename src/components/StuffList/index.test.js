import React from 'react';
import { shallow } from 'enzyme';

import StuffList from '.';

test('should render properly', () => {
  const container = shallow(<StuffList />);
  expect(container.debug()).toMatchSnapshot();
});
