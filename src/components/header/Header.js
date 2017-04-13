import React from 'react';

import styles from './styles.css';

export default class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.title}>Contacts</div>
      </div>
    );
  }
}
