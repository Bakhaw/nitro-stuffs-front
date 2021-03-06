import React from 'react';
import { shallow } from 'enzyme';

import { StateProvider } from '../../Context';

import Filter from '.';

test('should render properly', () => {
  const props = {
    active: false,
    filter: {},
    handleFilterClick: jest.fn(),
  };

  const container = shallow(
    <StateProvider>
      <Filter {...props} />
    </StateProvider>
  );
  expect(container.debug()).toMatchSnapshot();
});
