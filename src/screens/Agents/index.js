import React, { useContext, useEffect, useState } from 'react';

import { fetchAgentsList } from '../../API/methods/agents';
import { StateContext } from '../../Context';

import MapList from '../../components/MapList';

function Agents() {
  const { currentGame } = useContext(StateContext);
  const [agents, setMaps] = useState([]);

  useEffect(() => {
    getAgents();
  }, [currentGame]);

  async function getAgents() {
    const agents = await fetchAgentsList(currentGame);

    console.log('siiiiisi', agents);

    setMaps(agents);
  }

  return <MapList maps={[]} />;
}

export default Agents;
