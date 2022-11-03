import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components';
import { useRoutes } from 'react-router';
import routes from './config/routes';

function App() {
  return useRoutes(routes);
}

export default App;
