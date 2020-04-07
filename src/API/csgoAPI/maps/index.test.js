import { getMapByKey, getMapList } from '.';

test('should return a mapList', () => {
  const result = getMapList();

  expect(getMapList()).toEqual(result);
});

test('should return a map', () => {
  const result = getMapByKey('de_cache');

  expect(getMapByKey('de_cache')).toEqual(result);
});
