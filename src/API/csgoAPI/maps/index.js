import mapList from './mapList';

/** Get all maps */
export function getMapList() {
  return mapList;
}

/** Get a map using it's key
 *
 * @param {string} mapKey - The map key (example: "de_cache")
 */
export function getMapByKey(mapKey) {
  return mapList.filter(map => map.key === mapKey)[0];
}
