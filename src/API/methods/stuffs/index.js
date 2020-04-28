import { apiRequest } from '../../helpers';

/** Fetch a stuff list using a map key
 *
 * @param {string} game - The game (example: "csgo")
 * @param {string} mapKey - The map key (example: "de_cache")
 * @param {array} filters - The filters stuffs (example : ['smoke', 'flashbang'])
 */
export async function fetchStuffListByMapKey(game, mapKey, filters = []) {
  const url = `${game}/stuffs/${mapKey}`;
  const data = await apiRequest(url);

  // if no filters is selected, display all videos
  if (filters.length === 0) return data;

  return data.filter((stuff) => filters.includes(stuff.type));
}

/** Fetch a stuff using a map key and a stuff ID
 *
 * @param {string} game - The game (example: "csgo")
 * @param {string} mapKey - The map key (example: "de_cache")
 * @param {string} stuffId - The stuff id
 */
export function fetchStuffById(game, mapKey, stuffId) {
  // this function is not used atm
}
