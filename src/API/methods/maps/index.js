import { apiRequest } from '../../helpers';

/** Fetch all game maps
 *
 * @param {string} game - The game (example: "csgo")
 */
export async function fetchMapList(game) {
  const url = `${game}/maps`;
  const data = await apiRequest(url);

  return data;
}

/** Fetch a game map using it's key
 *
 * @param {string} mapKey - The map key (example: "de_cache")
 */
export async function fetchMapByKey(game, mapKey) {
  const url = `${game}/maps/${mapKey}`;
  const data = await apiRequest(url);

  return data;
}
