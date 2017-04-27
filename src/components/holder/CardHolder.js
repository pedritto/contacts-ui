import React from 'react';

import Row from './Row';

export default class CardHolder extends React.Component {

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
      <div style={{ minHeight: 500 }}>
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
      </div>
    );
  }
}

CardHolder.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  width: React.PropTypes.number.isRequired
};
