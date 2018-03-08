import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from '../app/app';
import './client.scss';
import mixpanel from 'mixpanel-browser';

window.mixpanel = mixpanel;
mixpanel.init('89c5c0bb6af5172d87b01e9e06839b2e');

window.yaCounter = new Ya.Metrika({id: 47973731});

hydrate((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById("root"));
