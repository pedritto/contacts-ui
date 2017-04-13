import React from 'react';

import Header from './header/Header';
import FilterBar from './filter/FilterBar';

import Holder from '../containers/Holder';
import Form from '../containers/Form';

export default class MainPage extends React.Component {

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
      return <Form />;
    }
    return (
      <div>
        <FilterBar />
        <Holder />
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

MainPage.propTypes = {
  isActionPending: React.PropTypes.bool.isRequired,
  isActionFailed: React.PropTypes.bool.isRequired,
  displayForm: React.PropTypes.bool.isRequired,
  loadContacts: React.PropTypes.func.isRequired
};
