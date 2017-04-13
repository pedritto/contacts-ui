import React from 'react';

import Search from './Search';
import AddContact from '../../containers/AddContact';

import styles from './styles.css';

export default class FilterBar extends React.Component {

  render() {
    return (
      <div className={styles.filterbar}>
        <Search />
        <AddContact />
      </div>
    );
  }

}
