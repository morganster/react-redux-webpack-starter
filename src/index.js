import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { HomePage } from './containers';
import Store from './helpers/Store';

ReactDOM.render(
    <Provider store={Store}>
        <HomePage className='main'></HomePage>
    </Provider>
    ,
    document.getElementById('root')
);
