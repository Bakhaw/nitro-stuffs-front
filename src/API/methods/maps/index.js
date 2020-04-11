import csgoMaps from '../../static/maps/csgoMaps';
import valorantMaps from '../../static/maps/valorantMaps';

const maps = {
  csgo: csgoMaps,
  valorant: valorantMaps,
};

/** Get all game maps
 *
 * @param {string} game - The game (example: "csgo")
 */
export function getMapList(game) {
  return maps[game];
}

/** Get a game map using it's key
 *
 * @param {string} mapKey - The map key (example: "de_cache")
 */
export function getMapByKey(game, mapKey) {
  return maps[game].filter((map) => map.key === mapKey)[0];
}
