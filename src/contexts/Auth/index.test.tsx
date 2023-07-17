import React from 'react';
import { act, render, renderHook, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('AuthProvider', () => {
  it('should render the children', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <div>Protected content</div>
        </AuthProvider>
      </MemoryRouter>
    );
    const content = screen.getByText('Protected content');
    expect(content).toBeInTheDocument();
  });

  it('should set isAuthenticated to true when login is called', () => {
    const {result} = renderHook(() => useAuth(), {
      wrapper: ({children}) => (
        <MemoryRouter>
          <AuthProvider>{children}</AuthProvider>
        </MemoryRouter>
      ),
    });
    expect(result.current.isAuthenticated).toBe(false);
    act(() => {
      result.current.login('test@example.com');
    });
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should set isAuthenticated to false when logout is called', () => {
    const {result} = renderHook(() => useAuth(), {
      wrapper: ({children}) => (
        <MemoryRouter>
          <AuthProvider>{children}</AuthProvider>
        </MemoryRouter>
      ),
    });
    act(() => {
      result.current.login('test@example.com');
    });
    expect(result.current.isAuthenticated).toBe(true);
    act(() => {
      result.current.logout();
    });
    expect(result.current.isAuthenticated).toBe(false);
  });
});
