import React from 'react';

import Element from './Element';

export default class Row extends React.Component {

  render() {
    return (
      <tr>
        {
          this.props.contacts.map((contact) => {
            return (
              <td key={contact.id}>
                <Element key={contact.id} contact={contact} />
              </td>
            );
          })
        }
      </tr>
    );
  }
}

Row.propTypes = {
  contacts: React.PropTypes.array.isRequired
};
