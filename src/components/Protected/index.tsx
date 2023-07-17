import React from 'react';
import { Navigate } from 'react-router-dom';

interface IProtectedProps {
  isSignedIn: boolean
  children: React.ReactNode
}

function Protected({isSignedIn, children}: IProtectedProps) {
  if (isSignedIn) {
    return children;
  }
  return <Navigate to="/login" replace/>;
}

export default Protected;