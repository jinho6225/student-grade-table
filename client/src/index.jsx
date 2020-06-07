import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.querySelector('#app'));
