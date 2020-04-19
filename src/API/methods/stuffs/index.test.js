import { getStuffById, getStuffListByMapKey } from '.';

import csgoStuffs from '../../static/stuffs/csgoStuffs';

test('should return full stuff list when filters array is empty', () => {
  const result = csgoStuffs['de_cache'];
  const filters = [];

  expect(getStuffListByMapKey('csgo', 'de_cache', filters)).toEqual(result);
});

test('should return a stuff list with flashbang, molotov and smoke', () => {
  const result = csgoStuffs['de_cache'];
  const filters = ['flashbang', 'molotov', 'smoke'];

  expect(getStuffListByMapKey('csgo', 'de_cache', filters)).toEqual(result);
});

test('should return a stuff list with filter', () => {
  const filters = ['smoke'];
  const result = [
    {
      id: '9avd4e3d',
      title: 'Connector from T Spawn',
      type: 'smoke',
      videoId: 'FqDYqI9o2YI',
    },
    {
      id: '9av1d4ed',
      title: 'Connector from T Spawn',
      type: 'smoke',
      videoId: 'FqDYqI9o2YI',
    },
    {
      id: '9avd2314ed',
      title: 'Connector from T Spawn',
      type: 'smoke',
      videoId: 'FqDYqI9o2YI',
    },
  ];

  expect(getStuffListByMapKey('csgo', 'de_cache', filters)).toEqual(result);
});

test('should return a stuff', () => {
  const result = [
    {
      id: '9avd46ed',
      title: 'Connector from T Spawn',
      type: 'flashbang',
      videoId: 'FqDYqI9o2YI',
    },
  ];

  expect(getStuffById('csgo', 'de_cache', '9avd46ed')).toEqual(result);
});
