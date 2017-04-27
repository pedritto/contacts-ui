import { connect } from 'react-redux';

import NewContact from '../components/filter/NewContact';
import { showContactForm, loadPartners } from '../actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewContact: () => {
      dispatch(loadPartners());
      dispatch(showContactForm());
    }
  };
};

const AddContact = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewContact);

export default AddContact;
