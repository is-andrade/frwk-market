import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/Auth';
import { ComposeProviders } from './components/ComposeProviders';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCart';

const App = () => (
  <BrowserRouter>
    <ComposeProviders with={[AuthProvider, ShoppingCartProvider]}>
      <AppRoutes/>
    </ComposeProviders>
  </BrowserRouter>
);

export default App;
