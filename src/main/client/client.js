import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from '../app/app';
import './client.scss';
import mixpanel from 'mixpanel-browser';

//mixpanel
window.mixpanel = mixpanel;
mixpanel.init('89c5c0bb6af5172d87b01e9e06839b2e');

//yandex metrika
window.yaCounter = new Ya.Metrika({id: 47973731});

//mouseflow
window._mfq = window._mfq || [];
(function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.async = true;
    mf.src = "//cdn.mouseflow.com/projects/355b66e5-d2a4-4c4b-8a5e-a0f778ba3dae.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
})();

hydrate((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById("root"));
