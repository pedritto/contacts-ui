import { connect } from 'react-redux';

import { loadContactList } from '../actions';

import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
  return {
    isActionPending: state.contact.isPending,
    isActionFailed: state.contact.isError,
    displayForm: state.form.isActive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContacts: () => dispatch(loadContactList())
  };
};

const Page = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPage);

export default Page;
