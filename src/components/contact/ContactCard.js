import React from 'react';

import styles from './styles.css';

const placeholder = require('../../images/placeholder.jpg');

export default class ContactCard extends React.Component {

  render() {
    const contact = this.props.contact;
    const picture = contact.picture || placeholder;
    const partnerName = (contact.partner && contact.partner.name) || '';

    return (<div className={styles.card}>
      <div className={styles.profile} >
        <img className={styles.picture} src={picture} role="presentation" />
      </div>
      <div className={styles.details} >
        <div className={styles.contactName} title={contact.name}>{contact.name}</div>
        <div className={styles.address}>{contact.address}</div>
        <div className={styles.work}>{partnerName}</div>
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

