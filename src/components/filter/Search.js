import React from 'react';

import styles from './styles.css';

export default class Search extends React.Component {

  render() {
    return (
      <div className={styles.search}>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
      </div>
    );
  }

}
