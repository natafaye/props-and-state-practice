import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Exercise 1: Class Components
import App from './exercise-1-class-solution/App';

// Exercise 1: Functional Components
//import App from './exercise-1-functional/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);