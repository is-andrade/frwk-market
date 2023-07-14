import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import Auth from '../pages/Auth';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/login" Component={Auth}/>
      </Routes>
  );
};

export default AppRoutes;