import React from 'react';
import './App.css';
import AppRoutes from './routes'
import { AuthProvider } from './contexts/Auth';
import { ComposeProviders } from './components/ComposeProviders';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <ComposeProviders with={[AuthProvider]}>
      <AppRoutes/>
    </ComposeProviders>
  </BrowserRouter>
);

export default App;
