import React from 'react';

import styles from './styles.css';

export default class Selection extends React.Component {

  render() {
    const options = this.props.options;
    const selectedId = this.props.value ? this.props.value.id : 0;

    return (
      <div className={styles.inputRow} style={styles}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select
          disabled={this.props.disabled}
          id={selectedId}
          name={this.props.id}
          defaultValue={selectedId}
          onChange={this.props.onValueChange}
        >
          <option key="0" value="0">
            {this.props.disabled ? 'loading' : ''}
          </option>
          {
            options.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>);
            })
          }
        </select>
      </div>
    );
  }
}

Selection.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool.isRequired,
  value: React.PropTypes.object,
  options: React.PropTypes.array,
  onValueChange: React.PropTypes.func.isRequired
};
