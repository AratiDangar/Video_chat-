import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.npm 

import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router><App/></Router>
  </React.StrictMode>
);

