import { getMapByKey, getMapList } from '.';

import csgoMaps from '../../static/maps/csgoMaps';
import valorantMaps from '../../static/maps/valorantMaps';

test('should return a CS:GO mapList', () => {
  const result = csgoMaps;

  expect(getMapList('csgo')).toEqual(result);
});

test('should return a Valorant mapList', () => {
  const result = valorantMaps;

  expect(getMapList('valorant')).toEqual(result);
});

test('should return a CS:GO map', () => {
  const result = csgoMaps[0]; // "de_cache"

  expect(getMapByKey('csgo', 'de_cache')).toEqual(result);
});

test('should return a Valorant map', () => {
  const result = valorantMaps[0]; // "bind"

  expect(getMapByKey('valorant', 'bind')).toEqual(result);
});
