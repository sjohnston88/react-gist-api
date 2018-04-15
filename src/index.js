import React from 'react';
import ReactDOM from 'react-dom';
import SiteRoutes from './SiteRoutes/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<SiteRoutes />, document.getElementById('root'));
registerServiceWorker();
