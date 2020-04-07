import React from 'react';
import { shallow } from 'enzyme';

import MapList from '.';

test('should render properly', () => {
  const maps = [
    {
      key: 'mapKey1',
      name: 'mapName1'
    },
    {
      key: 'mapKey2',
      name: 'mapName2'
    },
    {
      key: 'mapKey3',
      name: 'mapName3'
    }
  ];

  const container = shallow(<MapList maps={maps} />);
  expect(container.debug()).toMatchSnapshot();
});
