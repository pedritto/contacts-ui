import { connect } from 'react-redux';

import ContactActions from '../components/holder/actions/ContactActions';
import { removeContact, showContactForm, loadPartners } from '../actions';

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
      dispatch(loadPartners());
      dispatch(showContactForm(contact));
    }
  };
};

const Actions = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactActions);

export default Actions;
