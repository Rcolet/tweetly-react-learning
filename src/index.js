import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import router from './router';
import './styles/index.css';

render(
    <Router 
        history={browserHistory}
        routes={router}
    />, 
    document.getElementById('root')
);
