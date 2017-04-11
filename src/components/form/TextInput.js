import React from 'react';

import styles from './formStyle.css';

export default class TextInput extends React.Component {

  constructor(props) {
    super(props);

    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(event) {
    this.props.onValueChange(event);
  }

  render() {
    return (
      <div className={styles.inputRow} style={styles}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          name={this.props.id}
          type="text"
          value={this.props.value}
          onChange={this.props.onValueChange}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onValueChange: React.PropTypes.func.isRequired
};
