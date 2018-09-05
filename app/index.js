import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import moment from 'moment';
import 'moment/locale/zh-cn';
import App from './containers/App';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

moment.updateLocale('zh-cn', {
  week: {
    dow: 1, // 重置周一作为一周的开始
  },
});

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRoot = require('./containers/App'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
