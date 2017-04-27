import { connect } from 'react-redux';

import { loadContacts } from '../actions';

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
    loadContacts: () => dispatch(loadContacts())
  };
};

const Page = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPage);

export default Page;
