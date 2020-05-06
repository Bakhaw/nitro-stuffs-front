import { apiRequest } from '../../helpers';

/** Fetch all agents
 *
 * @param {string} game - The game (example: "valorant")
 */
export async function fetchAgentsList(game) {
  const url = `${game}/agents`;
  const data = await apiRequest(url);

  return data;
}
