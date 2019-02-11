import React, { Component } from 'react';
import styles from './styles.module.scss';

export class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <input 
          className={styles.searchInput}
          type="text"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
      </div>
    );
  }

  handleChange() {
    console.log('handleChange');
  }
}
