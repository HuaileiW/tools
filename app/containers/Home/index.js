// @flow
import React, { Component } from 'react';
import RecordIcon from 'assets/RecordIcon';
import styles from './index.scss';
import ScreenShotItem from './ScreenShotItem';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    // const { screenShotList = [] } = this.props;
    const screenShotList = [{ img: 'https://images.plot.ly/plotly-documentation/thumbnail/box.jpg', title: 'chart2', created: 1536119358765 }, { img: 'https://images.plot.ly/plotly-documentation/thumbnail/box.jpg', title: 'chart', created: 1536119358765 }, { img: 'https://images.plot.ly/plotly-documentation/thumbnail/box.jpg', title: 'chart3', created: 1536119358765 }, ]

    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.recordBtn}>
          <RecordIcon className={styles.recordIcon}/>
          开始截屏
        </div>
        <div className={styles.screenShotList}>
          { screenShotList.length > 0 ?
            screenShotList.map((shot, index) => (
              <ScreenShotItem key={'screenshot-' + index} screenshot={shot} />
            )) : (
              <div className={styles.noContent}>
                暂无截图
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
