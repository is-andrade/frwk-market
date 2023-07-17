import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Protected from './index';
import '@testing-library/jest-dom';

describe('Protected', () => {
  it('should render the children when isSignedIn is true', () => {
    const {getByText} = render(
      <Protected isSignedIn={true}>
        <div>Protected content</div>
      </Protected>
    );
    const content = getByText('Protected content');
    expect(content).toBeInTheDocument();
  });

  it('should redirect to /login when isSignedIn is false', () => {
    const {queryByText} = render(
      <BrowserRouter>
        <Protected isSignedIn={false}>
          <div>Protected content</div>
        </Protected>
      </BrowserRouter>
    );
    const content = queryByText('Protected content');
    expect(content).not.toBeInTheDocument();
  });
});