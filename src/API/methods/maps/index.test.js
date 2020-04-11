import { getMapByKey, getMapList } from '.';

import csgoMaps from '../../static/maps/csgoMaps';

test('should return a mapList', () => {
  const result = csgoMaps;

  expect(getMapList('csgo')).toEqual(result);
});

test('should return a map', () => {
  const result = csgoMaps[0]; // "de_cache"

  expect(getMapByKey('csgo', 'de_cache')).toEqual(result);
});
