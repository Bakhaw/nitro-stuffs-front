import React from 'react';
import { shallow } from 'enzyme';

import FilterDisplays from '.';

test('should render properly', () => {
  const props = {
    isDefaultDisplay: true,
    handleFilterDisplaysClick: jest.fn(),
  };

  const container = shallow(<FilterDisplays {...props} />);
  expect(container.debug()).toMatchSnapshot();
});
