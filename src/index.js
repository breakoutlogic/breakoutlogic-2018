import 'babel-polyfill';

import { ROOT_ID } from './utils/constants';
import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById(ROOT_ID));