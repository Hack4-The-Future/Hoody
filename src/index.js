import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DbContext } from './Context/DBContext';
import { db, auth , storage } from './DB/firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DbContext.Provider value={{ db, auth , storage}}>
    <App />
  </DbContext.Provider>
);


