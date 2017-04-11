import React from 'react';
import { connect } from 'react-redux';

import styles from './formStyle.css';

import TextInput from './TextInput';
import { addContact, editContact } from '../../actions';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.contact ? props.contact.id : '',
      name: props.contact ? props.contact.name : '',
      address: props.contact ? props.contact.address : '',
      contactNumber: props.contact ? props.contact.contactNumber : '',
      email: props.contact ? props.contact.email : '',
      company: props.contact ? props.contact.company : '',
      picture: props.contact ? props.contact.picture : ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.contact.id,
      name: nextProps.contact.name,
      address: nextProps.contact.address,
      contactNumber: nextProps.contact.contactNumber,
      email: nextProps.contact.email,
      company: nextProps.contact.company,
      picture: nextProps.contact.picture
    });
  }

  onSubmit() {
    this.props.onSubmitClick(this.state);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className={styles.form}>
        <TextInput id="name" label="Name" value={this.state.name} onValueChange={this.handleInputChange} />
        <TextInput id="address" label="Address" value={this.state.address} onValueChange={this.handleInputChange} />
        <TextInput id="company" label="Company" value={this.state.company} onValueChange={this.handleInputChange} />
        <TextInput id="contactNumber" label="Telephone" value={this.state.contactNumber} onValueChange={this.handleInputChange} />
        <TextInput id="email" label="Email" value={this.state.email} onValueChange={this.handleInputChange} />
        <div className={styles.submit} title="go">
          <input type="submit" name="" value="" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contact: React.PropTypes.object,
  onSubmitClick: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    contact: state.inEdit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (contact) => {
      if (contact.id) {
        dispatch(editContact(contact));
      } else {
        dispatch(addContact(contact));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);