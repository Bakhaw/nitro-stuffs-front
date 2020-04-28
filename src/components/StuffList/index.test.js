import React from 'react';
import { shallow } from 'enzyme';

import StuffList from '.';

test('should render properly', () => {
  const props = {
    activeStuffs: [],
  };

  const container = shallow(<StuffList {...props} />);
  expect(container.debug()).toMatchSnapshot();
});
