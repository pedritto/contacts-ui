import React from 'react';

import styles from './styles.css';

export default class NewContact extends React.Component {

  render() {
    return (
      <div className={styles.new} title="Add Contact">
        <input type="submit" name="" value="" onClick={this.props.onNewContact} />
      </div>
    );
  }

}

NewContact.propTypes = {
  onNewContact: React.PropTypes.func
};
