import { connect } from 'react-redux';

import ContactForm from '../components/form/ContactForm';
import { updateContact, saveContact, hideContactForm } from '../actions';

const mapStateToProps = (state) => {
  return {
    contact: state.form.contact,
    partners: state.partnerList.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (contact) => {
      if (contact.id) {
        dispatch(updateContact(contact));
        dispatch(hideContactForm());
      } else {
        dispatch(saveContact(contact));
        dispatch(hideContactForm());
      }
    }
  };
};

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactForm);

export default Form;
