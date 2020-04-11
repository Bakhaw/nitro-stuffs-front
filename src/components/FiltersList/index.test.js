import React from 'react';
import { shallow } from 'enzyme';

import FiltersList from '.';

test('should render properly', () => {
  const props = {
    activeFilters: ['smoke'],
    handleFilterClick: jest.fn(),
  };

  const container = shallow(<FiltersList {...props} />);
  expect(container.debug()).toMatchSnapshot();
});
