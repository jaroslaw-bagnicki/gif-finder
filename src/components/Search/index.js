import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    toggleIsActive: PropTypes.func.isRequired
  }

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
          onKeyUp={this.handleEnterPress}
          value={this.state.searchText}
        />
      </div>
    );
  }

  handleChange = (e) => {
    const searchText = e.target.value;
    if (searchText === '') this.props.toggleIsActive();
    this.setState({
      searchText
    });
  }

  handleEnterPress = (e) => {
    if (e.keyCode === 13) this.props.onSearch(this.state.searchText);
  }
}
