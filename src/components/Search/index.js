import React, { Component } from 'react';
import styles from './styles.module.scss';

export class Search extends Component {
  state = {
    searchText: ''
  };

  render = () => {
    return (
      <div className={styles.container}>
        <input 
          className={styles.searchInput}
          type="text"
          onChange={this.handleChange}
          value={this.state.searchText}
        />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
}
