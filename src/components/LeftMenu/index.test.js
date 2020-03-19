import React from 'react';
import { shallow } from 'enzyme';

import LeftMenu from '.';

test('should render properly', () => {
  const container = shallow(<LeftMenu />);
  expect(container.debug()).toMatchSnapshot();
});
