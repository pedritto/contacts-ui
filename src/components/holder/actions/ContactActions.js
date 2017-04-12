import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { removeContact, showContactForm } from '../../../actions';

class ContactActions extends React.Component {

  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onDelete() {
    this.props.onDeleteClick(this.props.contact);
  }

  onEdit() {
    this.props.onEditClick(this.props.contact);
  }

  render() {
    const style = this.props.display ? styles.show : styles.hide;

    return (
      <div className={style}>
        <div className={styles.delete} title="delete">
          <input type="submit" name="" value="" onClick={this.onDelete} />
        </div>
        <div className={styles.edit} title="edit">
          <input type="submit" name="" value="" onClick={this.onEdit} />
        </div>
      </div>
    );
  }
}

ContactActions.propTypes = {
  contact: React.PropTypes.object,
  display: React.PropTypes.bool,
  onDeleteClick: React.PropTypes.func,
  onEditClick: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (contact) => {
      dispatch(removeContact(contact));
    },
    onEditClick: (contact) => {
      dispatch(showContactForm(contact));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactActions);
