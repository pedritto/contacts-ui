import React from 'react';
import { connect } from 'react-redux';

import { loadContactList } from '../actions';

import Header from './header/Header';
import CardHolder from './holder/CardHolder';
import FilterBar from './filter/FilterBar';
import ContactForm from './form/ContactForm';

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPending: props.isActionPending,
      isActionFailed: props.isActionFailed,
      loadContacts: props.loadContacts
    };
  }

  componentWillMount() {
    this.state.loadContacts();
  }

  componentWillReceiveProps(nextProps) {
    const fullfilled = this.state.isPending && !nextProps.isActionPending;
    const success = !nextProps.isActionFailed;
    if (fullfilled && success) {
      this.state.loadContacts();
    }

    this.setState({
      isPending: nextProps.isActionPending,
      isActionFailed: nextProps.isActionFailed
    });
  }

  renderContent() {
    if (this.props.displayForm) {
      return <ContactForm />;
    }
    return (
      <div>
        <FilterBar />
        <CardHolder width={2} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        { this.renderContent() }
      </div>
    );
  }

}

Page.propTypes = {
  isActionPending: React.PropTypes.bool.isRequired,
  isActionFailed: React.PropTypes.bool.isRequired,
  displayForm: React.PropTypes.bool.isRequired,
  loadContacts: React.PropTypes.func.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
