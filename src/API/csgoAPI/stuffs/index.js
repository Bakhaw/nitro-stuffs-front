import stuffList from './stuffList';

/** Get a stuff list using a map key
 *
 * @param {string} mapKey - The map key (example: "de_cache")
 * @param {Array} filters - The filters stuffs (example : ['smoke', 'flashbang'])
 */
export function getStuffListByMapKey(mapKey, filters = []) {
  return stuffList[mapKey].filter(stuff => filters.includes(stuff.type));
}

/** Get a stuff using a map key and a stuff ID
 *
 * @param {string} mapKey - The map key (example: "de_cache")
 * @param {string} stuffId - The stuff id
 */
export function getStuffById(mapKey, stuffId) {
  return stuffList[mapKey].filter(stuff => stuff.id === stuffId);
}
