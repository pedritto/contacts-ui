import React from 'react';

import styles from './styles.css';

export default class ContactActions extends React.Component {

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
        <div className={styles.delete} title="Delete">
          <input type="submit" name="" value="" onClick={this.onDelete} />
        </div>
        <div className={styles.edit} title="Edit">
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
