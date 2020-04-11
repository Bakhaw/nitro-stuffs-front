import React from 'react';
import { shallow } from 'enzyme';

import { StateProvider } from '../../Context';

import LeftMenu from '.';

test('should render properly', () => {
  const container = shallow(
    <StateProvider>
      <LeftMenu />
    </StateProvider>
  );

  expect(container.debug()).toMatchSnapshot();
});
