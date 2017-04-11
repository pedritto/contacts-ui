import React from 'react';

import styles from './cardStyle.css';

export default class ContactCard extends React.Component {

  render() {
    const contact = this.props.contact;

    contact.picture = contact.picture || require('./placeholder.jpg');

    return (<div className={styles.card}>
      <div className={styles.profile} >
        <img className={styles.picture} src={contact.picture} role="presentation" />
      </div>
      <div className={styles.details} >
        <div className={styles.contactName} title={contact.name}>{contact.name}</div>
        <div className={styles.address}>{contact.address}</div>
        <div className={styles.work}>{contact.company}</div>
        <div className={styles.telephone}>{contact.contactNumber}</div>
        <div className={styles.email}>
          <a href="mailto:{contact.email}">{contact.email}</a>
        </div>
      </div>
    </div>
    );
  }
}

ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
};

