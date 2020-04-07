import csgoAPI from './csgoAPI';
import { getMapList } from './valorantAPI';

const API = {
  csgo: csgoAPI,
  valorant: {
    getMapList
  }
};

export default API;
