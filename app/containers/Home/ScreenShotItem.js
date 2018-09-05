import React, { PureComponent } from 'react';
import moment from 'moment';
import styles from './index.scss';

export default class ScreenShotItem extends PureComponent {
  render() {
    const { img, title, created } = this.props.screenshot;
    return (
      <div className={styles.screenshotItem}>
        <div className={styles.thumnail} style={{ backgroundImage: `url(${img})` }}>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{ title }</div>
          <div className={styles.created}>{ moment(created).fromNow() }</div>
        </div>
        <div className={styles.process}>
          OCR
        </div>
      </div>
    )
  }
}
