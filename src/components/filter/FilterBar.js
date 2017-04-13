import React from 'react';

import Search from './Search';
import NewContact from './NewContact';

import styles from './styles.css';

export default class FilterBar extends React.Component {

  render() {
    return (
      <div className={styles.filterbar}>
        <Search />
        <NewContact />
      </div>
    );
  }

}
