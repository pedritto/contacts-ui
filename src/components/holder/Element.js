import React from 'react';

import ContactCard from '../contact/ContactCard';
import Actions from '../../containers/Actions';

import styles from './styles.css';

export default class Element extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
      isHovering: false
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      contact: nextProps.contact
    });
  }

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  render() {
    return (
      <div
        className={styles.row}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <ContactCard
          key={this.state.contact.id}
          contact={this.state.contact}
        />
        <Actions
          key={this.state.contact.name}
          contact={this.state.contact}
          display={this.state.isHovering}
        />
      </div>
    );
  }

}

Element.propTypes = {
  contact: React.PropTypes.object.isRequired
};
