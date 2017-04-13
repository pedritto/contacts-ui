import React from 'react';
import { connect } from 'react-redux';

import { showContactForm } from '../../actions';

import styles from './styles.css';

class NewContact extends React.Component {

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

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewContact: () => dispatch(showContactForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
