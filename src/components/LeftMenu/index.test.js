import React from 'react';
import { shallow } from 'enzyme';

import { StateContext } from '../../Context';

import LeftMenu from '.';

test('should render properly', () => {
  const container = shallow(
    <StateContext.Provider value={{ toggleTheme: jest.fn() }}>
      <LeftMenu />
    </StateContext.Provider>
  );

  expect(container.debug()).toMatchSnapshot();
});
