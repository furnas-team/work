import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './app/app';
import './main.scss';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("root"));