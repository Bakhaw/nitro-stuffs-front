import csgoStuffs from '../../static/stuffs/csgoStuffs';

const stuffs = {
  csgo: csgoStuffs,
};

/** Get a stuff list using a map key
 *
 * @param {string} game - The game (example: "csgo")
 * @param {string} mapKey - The map key (example: "de_cache")
 * @param {Array} filters - The filters stuffs (example : ['smoke', 'flashbang'])
 */
export function getStuffListByMapKey(game, mapKey, filters = []) {
  const mapStuffs = stuffs[game][mapKey];

  // if no filters is selected, display all videos
  if (filters.length === 0) return mapStuffs;

  return mapStuffs.filter((stuff) => filters.includes(stuff.type));
}

/** Get a stuff using a map key and a stuff ID
 *
 * @param {string} game - The game (example: "csgo")
 * @param {string} mapKey - The map key (example: "de_cache")
 * @param {string} stuffId - The stuff id
 */
export function getStuffById(game, mapKey, stuffId) {
  return stuffs[game][mapKey].filter((stuff) => stuff.id === stuffId);
}
