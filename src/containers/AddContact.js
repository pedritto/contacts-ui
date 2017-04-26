import { connect } from 'react-redux';

import NewContact from '../components/filter/NewContact';
import { showContactForm, loadPartnerList } from '../actions';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewContact: () => {
      dispatch(loadPartnerList());
      dispatch(showContactForm());
    }
  };
};

const AddContact = connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewContact);

export default AddContact;
