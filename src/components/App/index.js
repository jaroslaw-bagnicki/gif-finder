import React, { Component } from 'react';
import styles from './styles.module.scss';

import { Search, Gif } from '../';

export class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>GIFs Finder!</h1>
        <p>Find gif on <a href="http://giphy.com">giphy</a>. Click enter to search </p>
        <Search />
        <Gif />
      </div>
    );
  }
}
