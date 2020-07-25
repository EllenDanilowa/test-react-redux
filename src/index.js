import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './styles/fonts.css';
import {GlobalStyle} from './index.styled';

import {configureFakeBackend} from './api/index';
configureFakeBackend();

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <App/>
  </Fragment>,
  document.getElementById('root')
);

registerServiceWorker();
