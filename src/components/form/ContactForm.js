import React from 'react';

import Loadable from 'react-loading-overlay';

import styles from './styles.css';

import TextInput from './TextInput';
import Selection from './Selection';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.contact ? props.contact.name : '',
      address: props.contact ? props.contact.address : '',
      contactNumber: props.contact ? props.contact.contactNumber : '',
      email: props.contact ? props.contact.email : '',
      partner: props.contact ? props.contact.partner : {}
      // picture: props.contact ? props.contact.picture : ''
    };

    if (props.contact && props.contact.id) {
      this.state.id = props.contact.id;
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact) {
      this.setState({
        id: nextProps.contact.id,
        name: nextProps.contact.name,
        address: nextProps.contact.address,
        contactNumber: nextProps.contact.contactNumber,
        email: nextProps.contact.email,
        partner: nextProps.contact.partner || {}
        // picture: nextProps.contact.picture
      });
    } else {
      this.setState({});
    }

    if (this.props.isActionPending && !nextProps.isActionPending) {
      this.props.hideForm();
    }
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
      <Loadable
        active={this.props.isActionPending}
        spinner
        text="Saving contact..."
      >
        <div className={styles.form}>
          <TextInput
            id="name"
            label="Name"
            value={this.state.name}
            onValueChange={this.handleInputChange}
          />
          <TextInput
            id="address"
            label="Address"
            value={this.state.address}
            onValueChange={this.handleInputChange}
          />
          <Selection
            id="partnerId"
            label="Partner"
            value={this.state.partner}
            options={this.props.partners.data}
            disabled={this.props.partners.isPending}
            onValueChange={this.handleInputChange}
          />
          <TextInput
            id="contactNumber"
            label="Telephone"
            value={this.state.contactNumber}
            onValueChange={this.handleInputChange}
          />
          <TextInput
            id="email"
            label="Email"
            value={this.state.email}
            onValueChange={this.handleInputChange}
          />
          <div className={styles.submit} title="go">
            <input type="submit" name="" value="" onClick={this.onSubmit} />
          </div>
        </div>
      </Loadable>
    );
  }
}

ContactForm.propTypes = {
  contact: React.PropTypes.object,
  partners: React.PropTypes.object,
  onSubmitClick: React.PropTypes.func,
  isActionPending: React.PropTypes.bool,
  hideForm: React.PropTypes.func
};
