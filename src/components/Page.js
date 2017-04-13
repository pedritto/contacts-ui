import React from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';
import CardHolder from './holder/CardHolder';
import FilterBar from './filter/FilterBar';
import ContactForm from './form/ContactForm';

class Page extends React.Component {

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
  displayForm: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    displayForm: state.form.isActive
  };
};

export default connect(mapStateToProps)(Page);
