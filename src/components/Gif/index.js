import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export class Gif extends Component {

  static propTypes = {
    isActive: PropTypes.bool,
    isLoading: PropTypes.bool,
    giphyUrl: PropTypes.string,
    gifUrl: PropTypes.string
  }

  render() {
    const { isActive, isLoading, giphyUrl, gifUrl } = this.props;
    return (
      isActive && (
        <div className={styles.container}>
          { isLoading ? 
            '-- Loader --' 
            : 
            <a href={giphyUrl} title="Open in Giphy" target="new">
              <img src={gifUrl} className={styles.gifImg} />
            </a>
          }
        </div>
      )
    );
  }
}
