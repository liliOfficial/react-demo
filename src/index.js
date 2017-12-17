import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
// import App from './App';
import Layout from './components/layout';
import configStore from './store/configStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={configStore}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>
)
    , document.getElementById('root'));
registerServiceWorker();
