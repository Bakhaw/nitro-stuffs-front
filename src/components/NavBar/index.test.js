import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '.';

test('should render properly', () => {
  const container = shallow(<NavBar />);
  expect(container.debug()).toMatchSnapshot();
});
