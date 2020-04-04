import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import API from '../../API';

import Filter from '../Filter';
import StuffCard from '../StuffCard';

import filtersList from './filters';

class StuffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilters: ['smoke'],
      activeStuffs: [],
    };
  }

  getStuffs = () => {
    const { game, map } = this.props.match.params;
    const { activeFilters } = this.state;

    const activeStuffs = API[game].getStuffListByMapKey(map, activeFilters);

    this.setState({
      activeStuffs,
    });
  };

  componentDidMount() {
    this.getStuffs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeFilters.length !== this.state.activeFilters.length) {
      this.getStuffs();
    }
  }

  handleFilterClick = (filter) => {
    const { activeFilters } = this.state;
    let newFilters = [];

    if (!activeFilters.includes(filter.type)) {
      // Si ya pas le type dans le tableau on l'ajoute
      newFilters = [...activeFilters, filter.type];
    } else {
      // Sinon on lui nique sa race du tableau
      newFilters = activeFilters.filter((d) => d !== filter.type);
    }

    this.setState({
      activeFilters: newFilters,
    });
  };

  render() {
    const { activeStuffs, activeFilters } = this.state;

    return (
      <div className='StuffList'>
        <div className='StuffList__Filter'>
          {filtersList.map((filter) => (
            <Filter
              key={filter.type}
              active={activeFilters.includes(filter.type)}
              filter={filter}
              handleFilterClick={this.handleFilterClick}
            />
          ))}
        </div>
        <div className='StuffList__Stuffs'>
          <ul className='StuffList__Stuffs__List'>
            {activeStuffs.map((stuff) => (
              <li key={stuff.id}>
                <Link to={`/game/csgo/stuff/${stuff.id}`}>
                  <StuffCard stuff={stuff} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(StuffList);
