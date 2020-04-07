import React from 'react';
import { shallow } from 'enzyme';

import Loader from '.';

test('should render properly', () => {
  const container = shallow(<Loader />);
  expect(container.debug()).toMatchSnapshot();
});
