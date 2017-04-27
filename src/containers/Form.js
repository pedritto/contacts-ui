import { connect } from 'react-redux';

import ContactForm from '../components/form/ContactForm';
import { updateContact, saveContact, hideContactForm } from '../actions';

const mapStateToProps = (state) => {
  return {
    isActionPending: state.contact.isPending,
    contact: state.form.contact,
    partners: state.partners
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: (contact) => {
      if (contact.id) {
        dispatch(updateContact(contact));
      } else {
        dispatch(saveContact(contact));
      }
    },
    hideForm: () => {
      dispatch(hideContactForm());
    }
  };
};

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactForm);

export default Form;
