import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import Auth from '../pages/Auth';
import { useAuth } from '../contexts/Auth';
import Protected from '../components/Protected';

const AppRoutes = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Routes>
      <Route path="/" element={(
        <Protected isSignedIn={isAuthenticated}>
          <HomeScreen/>
        </Protected>
      )}/>
      <Route path="/login" Component={Auth}/>
    </Routes>
  );
};

export default AppRoutes;