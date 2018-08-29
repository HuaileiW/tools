// @flow
import React, { Component } from 'react';
import styles from './index.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
