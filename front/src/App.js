import React from 'react';

import DocteurSaisie from './pages/DocteurSaisie';
import { BrowserRouter as Router } from 'react-router-dom';

import Switch from './routes';

const App = () => (
  <Router>
    <Switch />
  </Router>
);

export default App;