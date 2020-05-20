import React from 'react';
import { shallow } from 'enzyme';

import Marker from '.';

test('should render properly', () => {
  const props = {
    x: 15,
    y: 250,
    height: 50,
    width: 50,
    onClick: jest.fn(),
    type: 'position',
  };

  const container = shallow(<Marker {...props} />);
  expect(container.debug()).toMatchSnapshot();
});
