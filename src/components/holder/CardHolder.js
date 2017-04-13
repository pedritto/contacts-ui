import React from 'react';
import { connect } from 'react-redux';

import Row from './Row';

class CardHolder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      rows: this.split(this.props.contacts)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rows: this.split(nextProps.contacts)
    });
  }

  split(contacts) {
    const chunks = [];
    let begin = 0;
    while (begin < contacts.length) {
      chunks.push(contacts.slice(begin, begin + this.props.width));
      begin += this.props.width;
    }
    return chunks;
  }

  render() {
    return (
      <table>
        <tbody>
          {
            this.state.rows.map((contacts) => {
              return (
                <Row contacts={contacts} key={contacts[0].id} />);
            })
          }
        </tbody>
      </table>
    );
  }
}

CardHolder.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  width: React.PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactList.list
  };
};

export default connect(mapStateToProps)(CardHolder);
