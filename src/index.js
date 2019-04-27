import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import configureStore from "./store/store";
import * as serviceWorker from './serviceWorker';

let store = configureStore();
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
