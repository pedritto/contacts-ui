import React from 'react';

import Loadable from 'react-loading-overlay';

import Header from './header/Header';
import FilterBar from './filter/FilterBar';

import Holder from '../containers/Holder';
import Form from '../containers/Form';

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPending: props.isPending,
      loadContacts: props.loadContacts
    };
  }

  componentWillMount() {
    this.state.loadContacts();
  }

  componentWillReceiveProps(nextProps) {
    const formClosed = this.props.displayForm && !nextProps.displayForm;
    if (formClosed) {
      this.state.loadContacts();
    }

    this.setState({
      isPending: nextProps.isPending
    });
  }

  renderContent() {
    if (this.props.displayForm) {
      return <Form />;
    }
    return (
      <div>
        <Loadable
          active={this.state.isPending}
          spinner
          text="Loading contacts..."
        >
          <FilterBar />
          <Holder />
        </Loadable>
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
  isPending: React.PropTypes.bool.isRequired,
  displayForm: React.PropTypes.bool.isRequired,
  loadContacts: React.PropTypes.func.isRequired
};
