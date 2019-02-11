import React, { Component } from 'react';
import styles from './styles.module.scss';
import * as service from '../../service';

import { Search, Gif } from '../';

export class App extends Component {
  state = {
    isActive: false,
    isLoading: false,
    searchText: '',
    gifUrl: '',
    giphyUrl: ''
  }

  render() {
    const { isActive, isLoading, gifUrl, giphyUrl } = this.state;
    return (
      <div className={styles.container}>
        <h1>GIFs Finder!</h1>
        <p>Find gif on <a href="http://giphy.com">giphy</a>. Click enter to search </p>
        <Search onSearch={this.handleSearch} toggleIsActive={this.toggleIsActive} />
        <Gif 
          isActive={isActive}
          isLoading={isLoading}
          gifUrl={gifUrl}
          giphyUrl={giphyUrl} />
      </div>
    );
  }

  handleSearch = (searchText) => {
    this.setState({
      isActive: true,
      isLoading: true
    });
    service.getGif(searchText)
      .then( res => {
        this.setState({
          gifUrl: res.gifUrl,
          giphyUrl: res.giphyUrl,
          isLoading: false
        });
      });
  }

  toggleIsActive = () => {
    this.setState({
      isActive: false
    });
  }
}
